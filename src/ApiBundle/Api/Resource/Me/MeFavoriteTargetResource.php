<?php

namespace ApiBundle\Api\Resource\Me;

use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use Biz\Common\CommonException;
use Biz\Favorite\Service\FavoriteService;

class MeFavoriteTargetResource extends AbstractResource
{
    public function get(ApiRequest $request, $targetType, $targetId)
    {
        if (empty($targetType) || empty($targetId)) {
            throw CommonException::ERROR_PARAMETER_MISSING();
        }

        return $this->getFavoriteService()->getUserFavorite(
            $this->getCurrentUser()->getId(),
            $targetType,
            $targetId
        );
    }

    /**
     * @return FavoriteService
     */
    private function getFavoriteService()
    {
        return $this->service('Favorite:FavoriteService');
    }
}
