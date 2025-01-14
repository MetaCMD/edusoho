<?php

namespace ApiBundle\Api\Resource\Me;

use ApiBundle\Api\Annotation\ResponseFilter;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use AppBundle\Common\ArrayToolkit;
use Biz\Classroom\Service\ClassroomService;

class MeClassroom extends AbstractResource
{
    /**
     * @ResponseFilter(class="ApiBundle\Api\Resource\Classroom\ClassroomFilter", mode="simple")
     */
    public function search(ApiRequest $request)
    {
        $querys = $request->query->all();

        $conditions = [
            'userId' => $this->getCurrentUser()->getId(),
            'role' => 'student',
        ];

        $total = $this->getClassroomService()->searchMemberCount($conditions);

        if (isset($querys['format']) && 'pagelist' == $querys['format']) {
            list($offset, $limit) = $this->getOffsetAndLimit($request);

            $classrooms = $this->getClassrooms($conditions, [], $offset, $limit);
            $classrooms = $this->getClassroomService()->appendSpecsInfo($classrooms);

            return $this->makePagingObject($classrooms, $total, $offset, $limit);
        } else {
            $members = $this->getClassroomService()->searchMembers($conditions, [], 0, $total);
            $classroomIds = ArrayToolkit::column($members, 'classroomId');

            $classrooms = array_values($this->getClassroomService()->findClassroomsByIds($classroomIds));
            $classrooms = $this->getClassroomService()->appendSpecsInfo($classrooms);
            $classrooms = ArrayToolkit::index($classrooms, 'id');

            foreach ($members as $member) {
                $classrooms[$member['classroomId']]['lastLearnTime'] = $member['createdTime'];
            }

            array_multisort(ArrayToolkit::column($classrooms, 'lastLearnTime'), SORT_DESC, $classrooms);

            return $classrooms;
        }
    }

    private function getClassrooms($conditions, $orderBy, $offset, $limit)
    {
        $classroomIds = ArrayToolkit::column(
            $this->getClassroomService()->searchMembers($conditions, [], $offset, $limit),
            'classroomId'
        );

        return array_values($this->getClassroomService()->findClassroomsByIds($classroomIds));
    }

    /**
     * @return ClassroomService
     */
    private function getClassroomService()
    {
        return $this->service('Classroom:ClassroomService');
    }
}
