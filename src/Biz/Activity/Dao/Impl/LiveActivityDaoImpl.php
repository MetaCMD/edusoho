<?php

namespace Biz\Activity\Dao\Impl;

use Biz\Activity\Dao\LiveActivityDao;
use Codeages\Biz\Framework\Dao\GeneralDaoImpl;

class LiveActivityDaoImpl extends GeneralDaoImpl implements LiveActivityDao
{
    protected $table = 'activity_live';

    public function declares()
    {
        return [
            'serializes' => ['fileIds' => 'json', 'coursewareIds' => 'json'],
            'conditions' => [
                'id IN (:ids)',
                'liveId = :liveId',
                'liveProvider = :liveProvider',
                'replayStatus = :replayStatus',
                'progressStatus != :progressStatusNotEqual',
                'progressStatus = :progressStatus',
                /*S2B2C 增加syncId*/
                'syncId = :syncId',
                'syncId in (:syncIds)',
                'syncId > :syncIdGT',
                /*END*/
            ],
        ];
    }

    public function findByIds($Ids)
    {
        return $this->findInField('id', $Ids);
    }

    public function findByLiveIdAndReplayStatus($liveId)
    {
        return $this->findByFields(['liveId' => $liveId, 'replayStatus' => 'ungenerated']);
    }

    public function getByLiveId($liveId)
    {
        return $this->getByFields(['liveId' => $liveId]);
    }

    public function findByLiveIds($liveIds)
    {
        return $this->findInField('liveId', $liveIds);
    }

    public function getBySyncIdGTAndLiveId($liveId)
    {
        $sql = "SELECT * FROM {$this->table()} WHERE syncId > 0 and liveId = ?";

        return $this->db()->fetchAssoc($sql, [$liveId]);
    }

    public function getBySyncId($syncId)
    {
        return $this->getByFields(['syncId' => $syncId]);
    }
}
