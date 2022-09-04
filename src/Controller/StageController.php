<?php

namespace App\Controller;

use Ibexa\Contracts\Core\Repository\Values\Content\Query;
use Ibexa\Core\MVC\Symfony\View\View;

final class StageController extends AbstractSearchController
{
    public function embed(View $view, int $locationId): View
    {
        $query = $this->prepareQuery($locationId, 'match', null, Query::SORT_ASC);
        $results = $this->searchService->findLocations($query);

        $matches = [];
        foreach ($results->searchHits as $searchHit) {
            $matches[] = $searchHit->valueObject;
        }

        $view->addParameters([
            'matches' => $matches,
        ]);

        return $view;
    }
}
