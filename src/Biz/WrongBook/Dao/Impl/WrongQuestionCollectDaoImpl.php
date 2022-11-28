<?php

namespace Biz\WrongBook\Dao\Impl;

use Biz\WrongBook\Dao\WrongQuestionCollectDao;
use Codeages\Biz\Framework\Dao\AdvancedDaoImpl;

class WrongQuestionCollectDaoImpl extends AdvancedDaoImpl implements WrongQuestionCollectDao
{
    protected $table = 'biz_wrong_question_collect';

    public function getCollectBYPoolIdAndItemId($poolId, $itemId)
    {
        return $this->getByFields(['pool_id' => $poolId, 'item_id' => $itemId]);
    }

    public function findCollectBYPoolId($poolId)
    {
        return $this->findByFields(['pool_id' => $poolId, 'status' => 'wrong']);
    }

    public function getCollectIdsBYPoolIds($poolIds)
    {
        $builder = $this->createQueryBuilder(['pool_ids' => $poolIds])
            ->select('id');

        return $builder->execute()->fetchAll();
    }

    public function deleteCollectByPoolIds($poolIds)
    {
        return $this->batchDelete(['pool_ids' => $poolIds]);
    }

    public function findCollectByItemIds($itemIds)
    {
        return $this->findInField('item_id', $itemIds);
    }

    public function findWrongQuestionCollectByIds($ids)
    {
        return $this->findInField('id', $ids);
    }

    public function declares()
    {
        return [
            'timestamps' => ['created_time', 'updated_time'],
            'conditions' => [
                'id = :id',
                'id IN (:ids)',
                'pool_id = :pool_id',
                'pool_id IN (:pool_ids)',
                'item_id = :item_id',
                'item_id IN (:item_ids)',
                'created_time = :created_time',
                'status = :status',
                'pool_id IN (:pool_ids)',
            ],
            'orderbys' => ['id', 'created_time', 'wrong_times', 'last_submit_time'],
        ];
    }
}
