<?php

namespace Biz\MultiClass\Dao;

use Codeages\Biz\Framework\Dao\AdvancedDaoInterface;

interface MultiClassGroupDao extends AdvancedDaoInterface
{
    public function findByIds($ids);

    public function findGroupsByMultiClassId($multiClassId);

    public function findGroupsByMultiClassIdAndAssistantIds($multiClassId, $assistantIds);

    public function countMultiClassGroupAssistant($multiClassId);

    public function findByCourseId($courseId);

    public function findUnAssignGroups($multiClassId);

    public function getNoFullGroup($multiClassId, $fullNum);

    public function getLatestGroup($multiClassId);

    public function findMultiClassGroupsByMultiClassId($multiClassId);
}
