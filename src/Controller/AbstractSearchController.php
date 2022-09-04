<?php

namespace App\Controller;

use Ibexa\Contracts\Core\Repository\SearchService;
use Ibexa\Contracts\Core\Repository\Values\Content\LocationQuery;
use Ibexa\Contracts\Core\Repository\Values\Content\Query;
use Ibexa\Contracts\Core\Repository\Values\Content\Query\Criterion;
use Ibexa\Contracts\Core\Repository\Values\Content\Query\SortClause\Location\Priority;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

abstract class AbstractSearchController extends AbstractController
{
    protected SearchService $searchService;

    public function __construct(SearchService $searchService)
    {
        $this->searchService = $searchService;
    }

    protected function prepareQuery(
        int $parentLocationId,
        string $contentTypeIdentifier,
        ?int $limit = null,
        string $order = Query::SORT_DESC
    ): LocationQuery
    {
        $query = new LocationQuery();
        $query->query = new Criterion\LogicalAnd([
            new Criterion\ParentLocationId($parentLocationId),
            new Criterion\Visibility(Criterion\Visibility::VISIBLE),
            new Criterion\ContentTypeIdentifier($contentTypeIdentifier)
        ]);

        if ($limit) {
            $query->limit = $limit;
        }
        $query->sortClauses = [new Priority($order)];

        return $query;
    }
}
