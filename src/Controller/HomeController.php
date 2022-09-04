<?php

namespace App\Controller;

use Ibexa\Contracts\Core\Repository\ContentService;
use Ibexa\Contracts\Core\Repository\SearchService;
use Ibexa\Core\MVC\Symfony\View\View;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class HomeController extends AbstractSearchController
{
    private int $aboutContentId;
    private ContentService $contentService;

    public function __construct(
        int $aboutContentId,
        ContentService $contentService,
        SearchService $searchService
    ) {
        $this->aboutContentId = $aboutContentId;
        $this->contentService = $contentService;

        parent::__construct($searchService);
    }

    public function index(View $view, int $locationId): View
    {
        $query = $this->prepareQuery($locationId, 'event', 1);
        $results = $this->searchService->findLocations($query);

        $featuredEvent = null;
        if (isset($results->searchHits[0])) {
            $featuredEvent = $results->searchHits[0]->valueObject;
        }

        $view->addParameters([
            'featuredEvent' => $featuredEvent,
        ]);

        return $view;
    }

    /**
     * @Route("/about", name="app_about")
     */
    public function about(): Response
    {
        $about = $this->contentService->loadContent($this->aboutContentId);

        return $this->render('@ibexadesign/full/about.html.twig', ['content' => $about]);
    }
}
