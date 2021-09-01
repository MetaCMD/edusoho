<?php

namespace Biz\MultiClass\Dao\Impl;

use Biz\MultiClass\Dao\MultiClassRecordDao;
use Codeages\Biz\Framework\Dao\AdvancedDaoImpl;

class MultiClassRecordDaoImpl extends AdvancedDaoImpl implements MultiClassRecordDao
{
    protected $table = 'multi_class_record';

    public function getRecordBySign($sign)
    {
        return $this->getByFields(['sign' => $sign]);
    }

    public function findByUserIdAndIsPush($userId, $isPush)
    {
        return $this->findByFields(['user_id' => $userId, 'is_push' => $isPush]);
    }

    public function declares()
    {
        return [
            'timestamps' => ['created_time'],
            'orderbys' => ['id', 'created_time'],
            'serializes' => [
                'data' => 'json',
            ],
            'conditions' => [
                'id = :id',
                'user_id = :userId',
                'sign = :sign',
                'multi_class_id = :multiClassId',
                'created_time >= :createdTimeGE',
                'is_push = :isPush',
            ],
        ];
    }
}
