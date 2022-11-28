<?php

namespace Biz\WrongBook\Dao;

use Codeages\Biz\Framework\Dao\AdvancedDaoInterface;

interface WrongQuestionDao extends AdvancedDaoInterface
{
    public function searchWrongQuestionsWithCollect($conditions, $orderBys, $start, $limit, $columns);

    public function countWrongQuestionWithCollect($conditions);

    public function countWrongQuestionsWithDistinctItem($conditions);

    public function searchWrongQuestionsWithDistinctItem($conditions, $orderBys, $start, $limit, $columns);

    public function findWrongQuestionBySceneIds($sceneIds);

    public function findWrongQuestionByCollectIds($collectIds);

    public function searchWrongQuestionsWithDistinctUserId($conditions, $orderBys, $start, $limit);

    public function countWrongQuestionsWithDistinctUserId($conditions);

    public function findWrongQuestionsByUserIdsAndItemIdAndSceneIds($userIds, $itemId, $sceneIds);

    public function findWrongQuestionsByUserIdAndItemIdsAndSceneIds($userId, $itemIds, $sceneIds);

    public function findWrongQuestionsByUserIdAndSceneIds($userId, $sceneIds);
}
