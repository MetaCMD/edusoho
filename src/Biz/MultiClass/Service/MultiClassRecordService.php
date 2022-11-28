<?php

namespace Biz\MultiClass\Service;

interface MultiClassRecordService
{
    public function findNotPushRecordsByUserId($userId);

    public function searchRecord($conditions, $orderBys, $start, $limit);

    public function batchUpdateRecords($records);

    public function batchCreateRecords($records);

    public function createRecord($userId, $multiClassId);

    public function uploadUserRecords($userId);

    public function makeSign();
}
