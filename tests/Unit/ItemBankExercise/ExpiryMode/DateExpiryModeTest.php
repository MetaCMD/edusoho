<?php

namespace Tests\Unit\ItemBankExercise\ExpiryMode;

use Biz\BaseTestCase;
use Biz\ItemBankExercise\ExpiryMode\ExpiryModeFactory;
use Biz\ItemBankExercise\Service\ExerciseService;

class DateExpiryModeTest extends BaseTestCase
{
    public function testGetDeadline()
    {
        $exercise = $this->createExercise();
        $except = strtotime(date('Y-m-d').' 23:59:59');
        $res = ExpiryModeFactory::create($exercise['expiryMode'])->getDeadline($exercise);

        $this->assertEquals($except, $res);
    }

    public function testValidateExpiryMode()
    {
        $exercise = $this->createExercise();
        $res = ExpiryModeFactory::create($exercise['expiryMode'])->validateExpiryMode($exercise);

        $this->assertEquals($exercise['expiryMode'], $res['expiryMode']);
        $this->assertEquals($exercise['expiryDays'], $res['expiryDays']);
        $this->assertEquals($exercise['expiryStartDate'], $res['expiryStartDate']);
        $this->assertEquals($exercise['expiryEndDate'], $res['expiryEndDate']);
    }

    public function testIsExpired()
    {
        $exercise = $this->createExercise();
        $res = ExpiryModeFactory::create($exercise['expiryMode'])->isExpired($exercise);

        $this->assertFalse($res);
    }

    private function createExercise()
    {
        return $this->getExerciseService()->create(
            [
                'id' => 1,
                'title' => 'test',
                'questionBankId' => 1,
                'categoryId' => 1,
                'seq' => 1,
                'expiryMode' => 'date',
                'expiryStartDate' => strtotime(date('Y-m-d').' 00:00:00'),
                'expiryEndDate' => strtotime(date('Y-m-d').' 23:59:59'),
            ]
        );
    }

    /**
     * @return ExerciseService
     */
    protected function getExerciseService()
    {
        return $this->createService('ItemBankExercise:ExerciseService');
    }
}
