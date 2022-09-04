<?php

namespace App\Controller;

use App\DTO\ProfileDTO;
use App\Form\ProfileType;
use eZ\Publish\Core\FieldType\TextLine\Value;
use FOS\HttpCacheBundle\Http\SymfonyResponseTagger;
use Ibexa\Contracts\Core\Repository\ContentService;
use Ibexa\Contracts\Core\Repository\UserService;
use Ibexa\Contracts\HttpCache\Handler\ContentTagInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Routing\Annotation\Route;

final class ProfileController extends AbstractController
{
    private ContentService $contentService;
    private UserService $userService;
    private SymfonyResponseTagger $responseTagger;
    private Security $security;

    public function __construct(
        ContentService $contentService,
        UserService $userService,
        SymfonyResponseTagger $responseTagger,
        Security $security
    ) {
        $this->contentService = $contentService;
        $this->userService = $userService;
        $this->responseTagger = $responseTagger;
        $this->security = $security;
    }

    public function menu(): Response
    {
        $response = $this->render('@ibexadesign/menu/profile.html.twig');
        $response->setVary('Cookie');

        return $response;
    }

    /**
     * @Route("/user/profile", name="app_user_profile")
     */
    public function profile(Request $request): Response
    {
        /** @var \Ibexa\Core\Repository\Values\User\User $user */
        $user = $this->security->getUser()->getAPIUser();

        $profileDTO = new ProfileDTO();
        $profileDTO->nickname = $user->getName();

        $form = $this->createForm(ProfileType::class, $profileDTO);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $profileDTO = $form->getData();
            $userUpdateStruct = $this->userService->newUserUpdateStruct();
            $contentUpdateStruct = $this->contentService->newContentUpdateStruct();
            $contentUpdateStruct->setField('nickname', new Value($profileDTO->nickname));
            $userUpdateStruct->contentUpdateStruct = $contentUpdateStruct;
            $this->userService->updateUser($user, $userUpdateStruct);

            return $this->redirectToRoute('app_user_profile');
        }

        $this->responseTagger->addTags([ContentTagInterface::CONTENT_PREFIX . $user->id]);

        $response = $this->renderForm('@ibexadesign/user/profile.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
        $response->setVary('Cookie');

        return $response;
    }
}
