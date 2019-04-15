<?php

namespace Biz\Sms\Event;

use AppBundle\Common\ArrayToolkit;
use Biz\CloudPlatform\CloudAPIFactory;
use Biz\Course\Service\CourseService;
use Biz\Sms\Service\SmsService;
use Biz\Sms\SmsException;
use Biz\Sms\SmsProcessor\SmsProcessorFactory;
use Biz\Task\Dao\TaskDao;
use Biz\Task\Service\TaskService;
use Codeages\Biz\Framework\Event\Event;
use Codeages\Biz\Framework\Scheduler\Service\SchedulerService;
use Codeages\PluginBundle\Event\EventSubscriber;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class TaskEventSubscriber extends EventSubscriber implements EventSubscriberInterface
{
    /**
     * {@inheritdoc}
     */
    public static function getSubscribedEvents()
    {
        return array(
            'course.task.unpublish' => 'onTaskUnpublish',
            'course.task.publish' => 'onTaskPublish',
            'course.task.update' => 'onTaskUpdate',
            'course.task.delete' => 'onTaskDelete',
            'course.task.create.sync' => 'onTaskCreateSync',
            'course.task.publish.sync' => 'onTaskPublishSync',
        );
    }

    public function onTaskUnpublish(Event $event)
    {
        $task = $event->getSubject();
        $this->deleteJob($task);
    }

    public function onTaskDelete(Event $event)
    {
        $task = $event->getSubject();
        $this->deleteJob($task);
    }

    public function onTaskUpdate(Event $event)
    {
        $task = $event->getSubject();
        if ('live' == $task['type']) {
            $this->deleteJob($task);

            if ('published' == $task['status']) {
                $this->registerJob($task, array($task['id']));
            }
        }
    }

    public function onTaskPublish(Event $event)
    {
        $task = $event->getSubject();

        $targetIds = array($task['id']);

        $this->sendTaskPublishSms($task, $targetIds);
    }

    public function onTaskPublishSync(Event $event)
    {
        $task = $event->getSubject();

        if ('published' == $task['status'] && $this->isTaskCreateSyncFinished($task)) {
            $targetIds = $this->getTargetTaskIds($task);

            $this->sendTaskPublishSms($task, $targetIds);
        }
    }

    public function onTaskCreateSync(Event $event)
    {
        $task = $event->getSubject();

        if ('published' == $task['status']) {
            $targetIds = $this->getTargetTaskIds($task);

            $this->sendTaskPublishSms($task, $targetIds);
        }
    }

    protected function sendTaskPublishSms($task, $targetIds)
    {
        if ('live' == $task['type']) {
            $this->registerJob($task, $targetIds);
            $smsType = 'sms_live_lesson_publish';
        } else {
            $smsType = 'sms_normal_lesson_publish';
        }

        if ($this->getSmsService()->isOpen($smsType)) {
            $processor = SmsProcessorFactory::create('task');
            $api = CloudAPIFactory::create('root');

            foreach ($targetIds as $targetId) {
                $return = $processor->getUrls($targetId, $smsType);
                $callbackUrls = $return['urls'];
                $count = ceil($return['count'] / 1000);
                try {
                    $result = $api->post('/sms/sendBatch', array('total' => $count, 'callbackUrls' => $callbackUrls));
                } catch (\Exception $e) {
                    throw SmsException::FAILED_SEND();
                }
            }
        }
    }

    protected function registerJob($task, $targetIds)
    {
        $dayIsOpen = $this->getSmsService()->isOpen('sms_live_play_one_day');
        $hourIsOpen = $this->getSmsService()->isOpen('sms_live_play_one_hour');

        if ($dayIsOpen && $task['startTime'] >= (time() + 24 * 60 * 60)) {
            //24小时期限，在预定时间前1小时内有效
            $startJob = array(
                'name' => 'SmsSendOneDayJob_task_'.$task['id'],
                'expression' => intval($task['startTime'] - 24 * 60 * 60),
                'class' => 'Biz\Sms\Job\SmsSendOneDayJob',
                'misfire_threshold' => 60 * 60,
                'args' => array(
                    'targetType' => 'task',
                    'targetIds' => $targetIds,
                ),
            );
            $this->createJob($startJob);
        }

        if ($hourIsOpen && $task['startTime'] >= (time() + 60 * 60)) {
            //1小时期限，在预定时间前10分钟内有效
            $startJob = array(
                'name' => 'SmsSendOneHourJob_task_'.$task['id'],
                'expression' => intval($task['startTime'] - 60 * 60),
                'class' => 'Biz\Sms\Job\SmsSendOneHourJob',
                'misfire_threshold' => 60 * 10,
                'args' => array(
                    'targetType' => 'task',
                    'targetIds' => $targetIds,
                ),
            );
            $this->createJob($startJob);
        }
    }

    private function getTargetTaskIds($task)
    {
        if (empty($task)) {
            return array();
        }

        $courses = $this->getCourseService()->findCoursesByParentIdAndLocked($task['courseId'], 1);
        $tasks = $this->getTaskDao()->findByCopyIdAndLockedCourseIds($task['id'], ArrayToolkit::column($courses, 'id'));
        $taskIds = ArrayToolkit::column($tasks, 'id');

        return $taskIds;
    }

    private function isTaskCreateSyncFinished($task)
    {
        $courses = $this->getCourseService()->findCoursesByParentIdAndLocked($task['courseId'], 1);
        $tasks = $this->getTaskDao()->findByCopyIdAndLockedCourseIds($task['id'], ArrayToolkit::column($courses, 'id'));

        if (count($tasks) == count($courses)) {
            return true;
        }

        return false;
    }

    /**
     * @return SchedulerService
     */
    private function getSchedulerService()
    {
        return $this->getBiz()->service('Scheduler:SchedulerService');
    }

    private function deleteJob($task)
    {
        $this->deleteByJobName('SmsSendOneDayJob_task_'.$task['id']);
        $this->deleteByJobName('SmsSendOneHourJob_task_'.$task['id']);
    }

    private function deleteByJobName($jobName)
    {
        $jobs = $this->getSchedulerService()->searchJobs(array('name' => $jobName), array(), 0, PHP_INT_MAX);

        foreach ($jobs as $job) {
            $this->getSchedulerService()->deleteJob($job['id']);
        }
    }

    /**
     * @return SmsService
     */
    protected function getSmsService()
    {
        return $this->getBiz()->service('Sms:SmsService');
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->getBiz()->service('Course:CourseService');
    }

    /**
     * @return TaskService
     */
    protected function getTaskService()
    {
        return $this->getBiz()->service('Task:TaskService');
    }

    /**
     * @return TaskDao
     */
    protected function getTaskDao()
    {
        return $this->getBiz()->dao('Task:TaskDao');
    }

    private function createJob($startJob)
    {
        $job = $this->getSchedulerService()->getJobByName($startJob['name']);
        if (!isset($job)) {
            $this->getSchedulerService()->register($startJob);
        }
    }
}
