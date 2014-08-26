<?php

namespace Topxia\Service\Classes\Dao;

interface ClassesDao
{
    const TABLENAME = 'class';

    public function getClass($id);

  /*  public function getCoursesCount();

    public function findCoursesByIds(array $ids);

    public function findCoursesByTagIdsAndStatus(array $tagIds, $status, $start, $limit);

    public function findCoursesByAnyTagIdsAndStatus(array $tagIds, $status, $orderBy, $start, $limit);*/

    public function searchClasses($conditions, $orderBy, $start, $limit);

    public function searchClassCount($conditions);

    public function createClass($class);

 /*   public function updateCourse($id, $fields);

    public function deleteCourse($id);
    
    public function waveCourse($id,$field,$diff);

    public function analysisCourseDataByTime($startTime,$endTime);*/

}