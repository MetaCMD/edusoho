<?php

namespace Mooc\Service\Course\Dao\Impl;

use Mooc\Service\Course\Dao\CourseDao;
use Topxia\Service\Course\Dao\Impl\CourseDaoImpl as BaseCourseDao;

class CourseDaoImpl extends BaseCourseDao implements CourseDao
{
	public function getPeriodicCoursesCount($rootId){
		$sql = "SELECT MAX(`periods`) FROM {$this->getTablename()} WHERE rootId = ?";
		return $this->getConnection()->fetchColumn($sql, array($rootId)) ? : null;
	}

	public function findOtherPeriods($course){
		$rootId = $course['rootId']==0 ? $course['id'] : $course['rootId'];
		$sql ="SELECT * FROM {$this->getTablename()} WHERE rootId = {$rootId} and id != {$course['id']} and status= 'published';";
		return $this->getConnection()->fetchAll($sql);
	}

	public function addCourse($course)
	{
		$course = parent::addCourse($course);
		if($course['rootId'] == 0){
			$fields = array('rootId' => $course['id']);
			return parent::updateCourse($course['id'], $fields);
		}
		return $course;
	}


	protected function _createSearchQueryBuilder($conditions)
	{
		/*if(!isset($conditions['rootId'])){
			$conditions['rootId'] = 0;
		}*/

		if(isset($conditions['isPeriodic']) && $conditions['isPeriodic'] === true) {
			unset($conditions['isPeriodic']);
			$conditions['type'] = 'periodic';
		} else if(isset($conditions['isPeriodic']) && $conditions['isPeriodic'] === false){
			unset($conditions['isPeriodic']);
			$conditions['excludeType'] = 'periodic';
		}

		$builder = parent::_createSearchQueryBuilder($conditions)
			->andWhere('rootId =:rootId')
			->andWhere('type <> :excludeType')
			;

		if(!empty($conditions['table']) && $conditions['table'] == 'singleCourse'){
			$now = time();
			$table = "(select a.* from (	select b.* from (
						select b.*, {$now} - cast(b.startTime as signed) as maxTime from course b order by maxTime desc) b where b.endTime > {$now} UNION all select b.* from (
						select b.*, {$now} - cast(b.startTime as signed) as maxTime from course b order by maxTime desc) b where b.endTime < {$now}) a group by rootId )";
			$builder->from($table, 'course');
		}



		return $builder;
	}


}