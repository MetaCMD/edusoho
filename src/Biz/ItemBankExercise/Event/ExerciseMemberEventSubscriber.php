<?php

namespace Biz\ItemBankExercise\Event;

use AppBundle\Common\MathToolkit;
use Biz\ItemBankExercise\Dao\ExerciseDao;
use Biz\ItemBankExercise\Service\ExerciseService;
use Biz\OrderFacade\Service\OrderFacadeService;
use Codeages\Biz\Framework\Event\Event;
use Codeages\PluginBundle\Event\EventSubscriber;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ExerciseMemberEventSubscriber extends EventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            'exercise.join' => 'onExerciseJoin',
            'exercise.quit' => 'onExerciseQuit',
        ];
    }

    public function onExerciseJoin(Event $event)
    {
        $this->countStudentMember($event);
        $this->countIncome($event);
    }

    public function onExerciseQuit(Event $event)
    {
        $this->countStudentMember($event);
        $this->countIncome($event);
    }

    private function countStudentMember(Event $event)
    {
        $exercise = $event->getSubject();
        $member = $event->getArgument('member');

        if ('student' == $member['role']) {
            $this->getExerciseService()->updateExerciseStatistics($exercise['id'], ['studentNum']);
        }
    }

    private function countIncome(Event $event)
    {
        $exercise = $event->getSubject();

        $conditions = [
            'target_type' => 'item_bank_exercise',
            'target_id' => $exercise['id'],
            'statuses' => ['paid', 'success', 'finished'],
        ];

        $income = $this->getOrderFacadeService()->sumOrderItemPayAmount($conditions);
        $income = MathToolkit::simple($income, 0.01);

        $this->getExerciseDao()->update($exercise['id'], ['income' => $income]);
    }

    /**
     * @return OrderFacadeService
     */
    protected function getOrderFacadeService()
    {
        return $this->getBiz()->service('OrderFacade:OrderFacadeService');
    }

    /**
     * @return ExerciseService
     */
    protected function getExerciseService()
    {
        return $this->getBiz()->service('ItemBankExercise:ExerciseService');
    }

    /**
     * @return ExerciseDao
     */
    protected function getExerciseDao()
    {
        return $this->getBiz()->service('ItemBankExercise:ExerciseDao');
    }
}
