<?php

namespace ApiBundle\Api\Resource\Classroom;

use ApiBundle\Api\Annotation\ApiConf;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use AppBundle\Common\ArrayToolkit;
use Biz\Classroom\ClassroomException;
use Biz\Classroom\Service\ClassroomService;
use Biz\User\Service\UserService;

class Classroom extends AbstractResource
{
    /**
     * @ApiConf(isRequiredAuth=false)
     */
    public function get(ApiRequest $request, $classroomId)
    {
        $classroom = $this->getClassroomService()->getClassroom($classroomId);

        if (empty($classroom)) {
            throw ClassroomException::NOTFOUND_CLASSROOM();
        }

        $this->getOCUtil()->single($classroom, ['creator', 'teacherIds', 'assistantIds', 'headTeacherId']);

        if (!empty($classroom['headTeacher'])) {
            $this->mergeProfile($classroom['headTeacher']);
        }

        $classroom['access'] = $this->getClassroomService()->canJoinClassroom($classroomId);
        $classroom['hasCertificate'] = $this->getClassroomService()->hasCertificate($classroomId);
        $classroom = $this->getClassroomService()->appendSpecInfo($classroom);

        return $classroom;
    }

    /**
     * @ApiConf(isRequiredAuth=false)
     */
    public function search(ApiRequest $request)
    {
        $conditions = $request->query->all();
        $conditions['status'] = 'published';
        $conditions['showable'] = 1;
        if (isset($conditions['title'])) {
            $conditions['titleLike'] = $conditions['title'];
            unset($conditions['title']);
        }

        list($offset, $limit) = $this->getOffsetAndLimit($request);
        if ($this->isPluginInstalled('Vip') && isset($conditions['vipLevelId'])) {
            $vipClassroomIds = $this->getVipClassroomIdsByVipLevelId($conditions['vipLevelId']);
            $conditions['classroomIds'] = empty($vipClassroomIds) ? [-1] : $vipClassroomIds;
            unset($conditions['vipLevelId']);
        }
        $classrooms = $this->getClassroomService()->searchClassrooms(
            $conditions,
            $this->getSort($request),
            $offset,
            $limit,
            [],
            true
        );

        $this->getOCUtil()->multiple($classrooms, ['creator', 'teacherIds', 'headTeacherId', 'assistantIds']);

        $this->mergeProfilesInClassroom($classrooms, 'headTeacher');

        $total = $this->getClassroomService()->countClassrooms($conditions);

        $classrooms = $this->getClassroomService()->appendHasCertificate($classrooms);
        $classrooms = $this->getClassroomService()->appendSpecsInfo($classrooms);

        return $this->makePagingObject($classrooms, $total, $offset, $limit);
    }

    protected function getVipClassroomIdsByVipLevelId($vipLevelId)
    {
        if ('0' == $vipLevelId) {
            $levels = $this->getLevelService()->findEnabledLevels();
            $vipLevelIds = ArrayToolkit::column($levels, 'id');
        } else {
            if (empty($this->getLevelService()->getLevel($vipLevelId))) {
                return [];
            }
            $levels = $this->getLevelService()->findPrevEnabledLevels($vipLevelId);
            $vipLevelIds = array_merge(ArrayToolkit::column($levels, 'id'), [$vipLevelId]);
        }

        if (empty($vipLevelIds)) {
            return [];
        }

        $vipRights = $this->getVipRightService()->findVipRightsBySupplierCodeAndVipLevelIds('classroom', $vipLevelIds);

        return empty($vipRights) ? [] : ArrayToolkit::column($vipRights, 'uniqueCode');
    }

    private function mergeProfile(&$user)
    {
        $profile = $this->getUserService()->getUserProfile($user['id']);
        $user = array_merge($profile, $user);
    }

    private function mergeProfilesInClassroom(&$classrooms, $column)
    {
        $users = ArrayToolkit::column($classrooms, $column);
        $userIds = ArrayToolkit::column($users, 'id');
        $profiles = $this->getUserService()->findUserProfilesByIds($userIds);
        $profiles = ArrayToolkit::index($profiles, 'id');
        foreach ($classrooms as &$classroom) {
            if (!empty($classroom[$column]['id']) && !empty($profiles[$classroom[$column]['id']])) {
                $classroom[$column] = array_merge($classroom[$column], $profiles[$classroom[$column]['id']]);
            }
        }
    }

    /**
     * @return ClassroomService
     */
    private function getClassroomService()
    {
        return $this->service('Classroom:ClassroomService');
    }

    /**
     * @return UserService
     */
    private function getUserService()
    {
        return $this->service('User:UserService');
    }

    protected function getLevelService()
    {
        return $this->service('VipPlugin:Vip:LevelService');
    }

    protected function getVipRightService()
    {
        return $this->service('VipPlugin:Marketing:VipRightService');
    }
}
