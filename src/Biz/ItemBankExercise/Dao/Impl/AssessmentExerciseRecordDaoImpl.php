<?php

namespace Biz\ItemBankExercise\Dao\Impl;

use Biz\ItemBankExercise\Dao\AssessmentExerciseRecordDao;
use Codeages\Biz\Framework\Dao\GeneralDaoImpl;

class AssessmentExerciseRecordDaoImpl extends GeneralDaoImpl implements AssessmentExerciseRecordDao
{
    protected $table = 'item_bank_assessment_exercise_record';

    public function getByAnswerRecordId($answerRecordId)
    {
        return $this->getByFields(['answerRecordId' => $answerRecordId]);
    }

    public function getLatestRecord($moduleId, $assessmentId, $userId)
    {
        $sql = "SELECT * FROM {$this->table} WHERE moduleId = ? AND assessmentId = ? AND userId = ? ORDER BY id DESC;";

        return $this->db()->fetchAssoc($sql, [$moduleId, $assessmentId, $userId]);
    }

    public function deleteByExerciseId($exerciseId)
    {
        return $this->db()->delete($this->table(), ['exerciseId' => $exerciseId]);
    }

    public function declares()
    {
        return [
            'timestamps' => ['createdTime', 'updatedTime'],
            'orderbys' => ['createdTime'],
            'conditions' => [
                'id IN (:ids)',
                'assessmentExerciseId IN (:assessmentExerciseIds)',
                'userId = :userId',
                'moduleId = :moduleId',
                'exerciseId = :exerciseId',
                'userId = :userId',
            ],
        ];
    }
}
