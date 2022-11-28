<?php

namespace Biz\Certificate\Strategy\Impl;

use AppBundle\Common\ArrayToolkit;
use Biz\Certificate\Strategy\BaseStrategy;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\CourseSetService;
use Biz\Course\Service\MemberService;

class CourseStrategy extends BaseStrategy
{
    public function getTargetModal()
    {
        return 'admin-v2/operating/certificate/target/course-modal.html.twig';
    }

    public function count($conditions)
    {
        $conditions = $this->filterConditions($conditions);

        return $this->getCourseSetService()->countCourseSets($conditions);
    }

    public function search($conditions, $orderBys, $start, $limit)
    {
        $conditions = $this->filterConditions($conditions);

        $courseSets = $this->getCourseSetService()->searchCourseSets($conditions, $orderBys, $start, $limit);
        if (empty($courseSets)) {
            return [];
        }

        $courseSets = ArrayToolkit::index($courseSets, 'id');
        $courses = $this->getCourseService()->findCoursesByCourseSetIds(ArrayToolkit::column($courseSets, 'id'));
        if (!empty($courses)) {
            foreach ($courses as $course) {
                if ('published' != $course['status']) {
                    continue;
                }

                if (empty($courseSets[$course['courseSetId']]['courses'])) {
                    $courseSets[$course['courseSetId']]['courses'] = [$course];
                } else {
                    $courseSets[$course['courseSetId']]['courses'][] = $course;
                }
            }
        }

        return array_values($courseSets);
    }

    public function getTarget($targetId)
    {
        $course = $this->getCourseService()->getCourse($targetId);

        return $this->getCourseSetService()->getCourseSet($course['courseSetId']);
    }

    public function findTargetsByIds($targetIds)
    {
        $courses = $this->getCourseService()->findCoursesByIds($targetIds);
        foreach ($courses as &$course) {
            $course['title'] = $course['courseSetTitle'];
        }

        return $courses;
    }

    public function findTargetsByTargetTitle($targetTitle)
    {
        $count = $this->getCourseService()->countCourses(['courseSetTitleLike' => $targetTitle]);

        return $this->getCourseService()->searchCourses(
            ['courseSetTitleLike' => $targetTitle],
            [],
            0,
            $count
        );
    }

    public function issueCertificate($certificate)
    {
        $course = $this->getCourseService()->getCourse($certificate['targetId']);
        $members = $this->getMemberService()->searchMembers(
            ['courseId' => $course['id'], 'finishedTime_GT' => 0, 'learnedCompulsoryTaskNumGreaterThan' => $course['compulsoryTaskNum']],
            [],
            0,
            PHP_INT_MAX
        );
        $memberUserIds = ArrayToolkit::column($members, 'userId');
        $batches = array_chunk($memberUserIds, self::ISSUE_LIMIT);
        foreach ($batches as $userIds) {
            $this->getRecordService()->autoIssueCertificates($certificate['id'], $userIds);
        }
    }

    public function updateCertificateTargetStatus($targetId, $status)
    {
        if (in_array($status, ['published', 'unpublished'])) {
            $certificates = $this->getCertificateService()->findByTargetIdAndTargetType($targetId, 'course');
            foreach ($certificates as $certificate) {
                $this->getCertificateService()->update($certificate['id'], ['targetStatus' => $status]);
            }
        }
    }

    protected function filterConditions($conditions)
    {
        if (!empty($conditions['keyword'])) {
            $conditions['title'] = $conditions['keyword'];
            unset($conditions['keyword']);
        }

        $conditions['status'] = 'published';
        $conditions['parentId'] = 0;
        $conditions['types'] = [CourseSetService::NORMAL_TYPE, CourseSetService::LIVE_TYPE];

        return $conditions;
    }

    protected function getContent($record, $content)
    {
        $content = $this->getRecipientContent($record['userId'], $content);

        if (strstr($content, '$courseName$')) {
            $course = $this->getCourseService()->getCourse($record['targetId']);
            $content = str_replace('$courseName$', $course['courseSetTitle'], $content);
        }

        return $content;
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->biz->service('Course:CourseService');
    }

    /**
     * @return CourseSetService
     */
    protected function getCourseSetService()
    {
        return $this->biz->service('Course:CourseSetService');
    }

    /**
     * @return MemberService
     */
    protected function getMemberService()
    {
        return $this->biz->service('Course:MemberService');
    }
}
