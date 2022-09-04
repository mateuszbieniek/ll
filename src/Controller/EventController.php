<?php

namespace App\Controller;

use App\Exception\AlreadyParticipatingException;
use App\Exception\NotParticipatingException;
use Ibexa\Contracts\Core\Repository\ContentService;
use Ibexa\Contracts\Core\Repository\Exceptions\NotFoundException;
use Ibexa\Contracts\Core\Repository\Exceptions\UnauthorizedException;
use Ibexa\Contracts\Core\Repository\SearchService;
use Ibexa\Contracts\Core\Repository\Values\Content\Content;
use Ibexa\Contracts\Core\Repository\Values\Content\Query;
use Ibexa\Contracts\HttpCache\ResponseTagger\ResponseTagger;
use Ibexa\Contracts\Core\Repository\Repository;
use Ibexa\Core\FieldType\RelationList\Value;
use Ibexa\Core\MVC\Symfony\View\View;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

final class EventController extends AbstractSearchController
{
    public const EVENT_CONTENT_TYPE_IDENTIFIER = 'event';

    private int $rootLocationId;
    private ResponseTagger $responseTagger;
    private ContentService $contentService;
    private Repository $repository;
    private Security $security;

    public function __construct(
        int            $rootLocationId,
        SearchService  $searchService,
        ResponseTagger $responseTagger,
        ContentService $contentService,
        Repository     $repository,
        Security       $security
    )
    {
        $this->rootLocationId = $rootLocationId;
        $this->responseTagger = $responseTagger;
        $this->contentService = $contentService;
        $this->repository = $repository;
        $this->security = $security;

        parent::__construct($searchService);
    }

    public function show(View $view, int $locationId): View
    {
        $query = $this->prepareQuery($locationId, 'stage', null, Query::SORT_ASC);
        $results = $this->searchService->findLocations($query);

        $stages = [];
        foreach ($results->searchHits as $searchHit) {
            $stages[] = $searchHit->valueObject;
        }

        $view->addParameters([
            'stages' => $stages,
        ]);

        return $view;
    }

    /**
     * @Route("/events", name="app_events")
     */
    public function list(): Response
    {
        $query = $this->prepareQuery($this->rootLocationId, 'event');
        $results = $this->searchService->findLocations($query);

        $events = [];
        foreach ($results->searchHits as $searchHit) {
            $event = $searchHit->valueObject;
            $events[] = $event;
            $this->responseTagger->tag($event);
        }

        return $this->render('@ibexadesign/list/event.html.twig', [
            'eventLocations' => $events,
        ]);
    }

    /**
     * @Route("/events/participate/{contentId}", name="app_event_participate", methods={"POST"})
     *
     * @throws \App\Exception\AlreadyParticipatingException
     */
    public function participate(int $contentId): Response
    {
        $event = $this->checkIfEvent($contentId);

        /** @var \Ibexa\Core\Repository\Values\User\User $user */
        $user = $this->security->getUser()->getAPIUser();

        if (!$user) {
            throw new AccessDeniedHttpException();
        }

        $participantsContentIds = $event->getFieldValue('participants')->destinationContentIds;

        if (in_array($user->id, $participantsContentIds)) {
            throw new AlreadyParticipatingException();
        }

        $participantsContentIds[] = $user->id;
        $contentUpdateStruct = $this->contentService->newContentUpdateStruct();
        $contentUpdateStruct->setField('participants', new Value($participantsContentIds));

        try {
            $this->updateParticipants($event, $participantsContentIds);
            $this->addFlash('success', 'You are now participating in "' . $event->getName() . '"!');
        } catch (\Exception $e) {
            $this->addFlash('danger', 'Something went wrong. Are you a Participant?');
        }

        return $this->redirect('/');
    }

    /**
     * @Route("/events/withdraw/{contentId}", name="app_event_withdraw", methods={"POST"})
     *
     * @throws \App\Exception\NotParticipatingException
     */
    public function withdraw(int $contentId): Response
    {
        $event = $this->checkIfEvent($contentId);

        /** @var \Ibexa\Core\Repository\Values\User\User $user */
        $user = $this->security->getUser()->getAPIUser();

        if (!$user) {
            throw new AccessDeniedHttpException();
        }

        $participantsContentIds = $event->getFieldValue('participants')->destinationContentIds;
        if (!in_array($user->id, $participantsContentIds)) {
            throw new NotParticipatingException();
        }

        $participantsContentIds = array_diff($participantsContentIds, [$user->id]);
        try {
           $this->updateParticipants($event, $participantsContentIds);
           $this->addFlash('success', 'You withdrawn from participating in "' . $event->getName() . '". Chicken!');
        } catch (\Exception $e) {
            $this->addFlash('danger', 'Something went wrong. Are you a Participant?');
        }

        return $this->redirect('/');
    }

    private function checkIfEvent($contentId): Content
    {
        try {
            $event = $this->contentService->loadContent($contentId);
        } catch (NotFoundException|UnauthorizedException $e) {
            throw new NotFoundHttpException();
        }

        if ($event->contentInfo->getContentType()->identifier !== self::EVENT_CONTENT_TYPE_IDENTIFIER) {
            throw new NotFoundHttpException();
        }

        return $event;
    }

    /**
     * @param int[] $participantsContentIds
     *
     * @throws \Exception
     */
    private function updateParticipants(Content $event, array $participantsContentIds): void
    {
        $contentUpdateStruct = $this->contentService->newContentUpdateStruct();
        $contentUpdateStruct->setField('participants', new Value($participantsContentIds));

        $this->repository->sudo(function () use ($event, $contentUpdateStruct) {
            $eventDraft = $this->contentService->createContentDraft($event->contentInfo);
            $this->contentService->updateContent($eventDraft->getVersionInfo(), $contentUpdateStruct);
            $this->contentService->publishVersion($eventDraft->getVersionInfo());
        });
    }
}
