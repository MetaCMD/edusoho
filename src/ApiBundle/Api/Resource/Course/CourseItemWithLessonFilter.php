<?php

namespace ApiBundle\Api\Resource\Course;

use ApiBundle\Api\Resource\Filter;

class CourseItemWithLessonFilter extends Filter
{
    protected $publicFields = [
        'type', 'number', 'seq', 'title', 'isOptional', 'tasks',  'isExist', 'children', 'id',
    ];

    protected function publicFields(&$data)
    {
        if (!empty($data['tasks'])) {
            $taskFilter = new CourseTaskFilter();
            foreach ($data['tasks'] as &$task) {
                $replayStatus = empty($task['replayDownloadStatus']) ? '' : $task['replayDownloadStatus'];
                $liveId = empty($task['liveId']) ? 0 : $task['liveId'];
                $taskFilter->filter($task);
                if ($replayStatus) {
                    $task['replayDownloadStatus'] = $replayStatus;
                }
                if ($liveId) {
                    $task['liveId'] = $liveId;
                }
            }
        } else {
            $taskFilter = new CourseItemFilter();
            $taskFilter->filter($data);
        }
    }
}
