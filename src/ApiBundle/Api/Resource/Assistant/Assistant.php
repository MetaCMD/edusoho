<?php

namespace ApiBundle\Api\Resource\Assistant;

use ApiBundle\Api\Annotation\ResponseFilter;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use AppBundle\Common\ArrayToolkit;
use AppBundle\Common\Exception\AccessDeniedException;
use Biz\Assistant\Service\AssistantStudentService;
use Biz\Course\Service\MemberService;
use Biz\MultiClass\MultiClassException;
use Biz\MultiClass\Service\MultiClassService;
use Biz\User\Service\UserService;

class Assistant extends AbstractResource
{
    /**
     * @return array
     * @ResponseFilter(class="ApiBundle\Api\Resource\Assistant\AssistantFilter", mode="simple")
     */
    public function search(ApiRequest $request)
    {
        $user = $this->getCurrentUser();
        if (!$user->hasPermission('admin_v2_assistant')) {
            throw new AccessDeniedException();
        }

        $conditions = [
            'nickname' => $request->query->get('nickname', ''),
            'roles' => '|ROLE_TEACHER_ASSISTANT|',
            'destroyed' => 0,
            'locked' => 0,
            'excludeIds' => $request->query->get('excludeIds', []),
        ];

        list($offset, $limit) = $this->getOffsetAndLimit($request);
        $users = $this->getUserService()->searchUsers($conditions, ['createdTime' => 'DESC'], $offset, $limit);
        $total = $this->getUserService()->countUsers($conditions);

        $users = $this->appendAssistantData($users);

        return $this->makePagingObject($users, $total, $offset, $limit);
    }

    public function add(ApiRequest $request)
    {
        $assistantStudentData = $request->request->all();
        if (!ArrayToolkit::requireds($assistantStudentData, ['assistantId', 'studentIds', 'multiClassId'])) {
            throw MultiClassException::MULTI_CLASS_DATA_FIELDS_MISSING();
        }

        $assistantStudents = $this->getAssistantStudentService()->findByStudentIdsAndMultiClassId($assistantStudentData['studentIds'], $assistantStudentData['multiClassId']);
        $assistantStudents = ArrayToolkit::index($assistantStudents, 'studentId');

        $multiClass = $this->getMultiClassService()->getMultiClass($assistantStudentData['multiClassId']);
        foreach ($assistantStudentData['studentIds'] as $studentId) {
            if (empty($assistantStudents[$studentId])) {
                $fields = [
                    'studentId' => $studentId,
                    'multiClassId' => $assistantStudentData['multiClassId'],
                    'assistantId' => $assistantStudentData['assistantId'],
                    'courseId' => $multiClass['courseId'],
                ];

                $this->getAssistantStudentService()->create($fields);
            } else {
                $this->getAssistantStudentService()->updateStudentAssistant($assistantStudents[$studentId]['id'], $assistantStudentData['assistantId']);
            }
        }

        return ['success' => true];
    }

    protected function appendAssistantData($assistants)
    {
        $currentTime = time();
        $members = $this->getMemberService()->findMembersByUserIdsAndRole(array_column($assistants, 'id'), 'assistant');

        $courseIds = empty($members) ? [-1] : ArrayToolkit::column($members, 'courseId');
        $liveMultiClasses = $this->findMultiClassesByConditions(['courseIds' => $courseIds, 'endTimeGT' => $currentTime]);
        $endMultiClasses = $this->findMultiClassesByConditions(['courseIds' => $courseIds, 'endTimeLE' => $currentTime]);

        $assistantIds = ArrayToolkit::column($assistants, 'id');
        $liveMultiClassStudentCount = $this->getAssistantStudentService()->countAssistantStudentGroup($assistantIds, ArrayToolkit::column($liveMultiClasses, 'id'));
        $endMultiClassStudentCount = $this->getAssistantStudentService()->countAssistantStudentGroup($assistantIds, ArrayToolkit::column($endMultiClasses, 'id'));
        $members = ArrayToolkit::group($members, 'userId');
        foreach ($assistants as &$assistant) {
            $assistantMembers = empty($members[$assistant['id']]) ? [] : $members[$assistant['id']];
            $liveMultiClassNum = 0;
            $endMultiClassNum = 0;
            foreach ($assistantMembers as $assistantMember) {
                $liveMultiClassNum += empty($liveMultiClasses[$assistantMember['courseId']]) ? 0 : 1;
                $endMultiClassNum += empty($endMultiClasses[$assistantMember['courseId']]) ? 0 : 1;
            }
            $assistant['isScrmBind'] = empty($assistant['scrmStaffId']) ? 0 : 1;
            $assistant['liveMultiClassStudentNum'] = empty($liveMultiClassStudentCount[$assistant['id']]) ? 0 : $liveMultiClassStudentCount[$assistant['id']]['studentNum'];
            $assistant['endMultiClassStudentNum'] = empty($endMultiClassStudentCount[$assistant['id']]) ? 0 : $endMultiClassStudentCount[$assistant['id']]['studentNum'];
            $assistant['liveMultiClassNum'] = $liveMultiClassNum;
            $assistant['endMultiClassNum'] = $endMultiClassNum;
        }

        return $assistants;
    }

    protected function findMultiClassesByConditions($conditions)
    {
        $multiClasses = $this->getMultiClassService()->searchMultiClass(
            $conditions,
            [],
            0,
            PHP_INT_MAX
        );

        return ArrayToolkit::index($multiClasses, 'courseId');
    }

    protected function findCourseStudentCount($courseIds)
    {
        if (empty($courseIds)) {
            return [];
        }

        $courseStudentNum = $this->getMemberService()->searchMemberCountGroupByFields(
            ['courseIds' => $courseIds, 'role' => 'student'],
            'courseId',
            0,
            PHP_INT_MAX
        );

        return ArrayToolkit::index($courseStudentNum, 'courseId');
    }

    /**
     * @return UserService
     */
    protected function getUserService()
    {
        return $this->service('User:UserService');
    }

    /**
     * @return MultiClassService
     */
    protected function getMultiClassService()
    {
        return $this->service('MultiClass:MultiClassService');
    }

    /**
     * @return AssistantStudentService
     */
    protected function getAssistantStudentService()
    {
        return $this->service('Assistant:AssistantStudentService');
    }

    /**
     * @return MemberService
     */
    protected function getMemberService()
    {
        return $this->service('Course:MemberService');
    }
}
