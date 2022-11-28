<?php

namespace Biz\WrongBook\Service;

interface WrongQuestionService
{
    public function buildWrongQuestion($fields, $source);

    public function createWrongQuestion($fields);

    public function searchWrongQuestion($conditions, $orderBys, $start, $limit, $columns = []);

    public function deleteWrongQuestion($id);

    public function batchDeleteWrongQuestionByItemIds($itemIds);

    public function batchBuildWrongQuestion($wrongAnswerQuestionReports, $source);

    public function batchBuildCorrectQuestion($correctAnswerQuestionReports, $source);

    public function countWrongQuestion($conditions);

    public function getPool($poolId);

    public function getPoolBySceneId($sceneId);

    public function updatePool($id, $pool);

    public function searchWrongQuestionsWithDistinctUserId($conditions, $orderBys, $start, $limit);

    public function countWrongQuestionsWithDistinctUserId($conditions);

    public function findWrongQuestionsByUserIdsAndItemIdAndSceneIds($userIds, $itemId, $sceneIds);

    public function findWrongQuestionsByUserIdAndItemIdsAndSceneIds($userId, $itemIds, $sceneIds);

    public function findWrongQuestionsByUserIdAndSceneIds($userId, $sceneIds);

    public function findWrongQuestionCollectByCollectIds($collectIds);

    public function findWrongQuestionByCollectIds($collectIds);

    /**
     * BookPool
     */
    public function searchWrongBookPool($conditions, $orderBys, $start, $limit);

    public function countWrongBookPool($conditions);

    public function getWrongBookPoolByFieldsGroupByTargetType($fields);

    public function searchWrongQuestionsWithCollect($conditions, $orderBys, $start, $limit, $columns = []);

    public function countWrongQuestionWithCollect($conditions);

    public function searchWrongQuestionsWithDistinctItem($conditions, $orderBys, $start, $limit, $columns = []);

    public function searchWrongQuestionCollect($conditions, $orderBys, $start, $limit, $columns = []);

    public function countWrongQuestionCollect($conditions);

    public function countWrongQuestionsWithDistinctItem($conditions);

    public function findWrongQuestionBySceneIds($sceneIds);
}
