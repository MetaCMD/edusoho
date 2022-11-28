<?php

/**
 * @OA\Get(
 *     path="/api/courses/{courseId}/notes/{noteId}",
 *     tags={"course"},
 *     summary="课程单个笔记获取接口",
 *     @OA\Response(
 *         response=200,
 *         description="单条笔记",
 *         @OA\MediaType(
 *             mediaType="application/vnd.edusoho.v2+json",
 *             @OA\Schema(ref="#/components/schemas/course.note")
 *         )
 *     ),
 * )
 *
 * @OA\Get(
 *     path="/api/courses/{courseId}/notes",
 *     tags={"course"},
 *     summary="课程多个笔记获取接口",
 *     @OA\Response(
 *         response=200,
 *         description="多条笔记",
 *         @OA\MediaType(
 *             mediaType="application/vnd.edusoho.v2+json",
 *             @OA\Schema(
 *                 @OA\Property(
 *                     property="data",
 *                     type="array",
 *                     @OA\Items(ref="#/components/schemas/course.note")
 *                 ),
 *                 @OA\Property(property="paging",type="object",ref="#/components/schemas/common.paging")
 *             ),
 *         )
 *     ),
 * )
 */

/**
 * @OA\Schema(
 *      schema="course.note",
 *      title="course.note",
 *      description="课程笔记",
 *      @OA\Property(property="id",title="id",description="ID",type="number"),
 *      @OA\Property(property="userId",title="userId",description="userId",type="number"),
 *      @OA\Property(property="taskId",title="taskId",description="taskId",type="number"),
 *      @OA\Property(property="content",title="content",description="content",type="string"),
 *      @OA\Property(property="length",title="length",description="length",type="number"),
 *      @OA\Property(property="likeNum",title="likeNum",description="likeNum",type="number"),
 *      @OA\Property(property="createdTime",title="createdTime",description="创建时间",type="string", format="datetime"),
 *      @OA\Property(property="updatedTime",title="updatedTime",description="更新时间",type="string", format="datetime"),
 *      @OA\Property(property="user",title="id",ref="#/components/schemas/user.simple"),
 *      @OA\Property(property="like",title="like",ref="#components/schemas/course.note.like"),
 *      @OA\Property(property="task",title="task",ref="#/components/schemas/course.task.public"),
 * )
 *
 * @OA\Schema(
 *     schema="course.note.like",
 *     title="course.note.like",
 *     description="笔记点赞数据",
 *     @OA\Property(property="id",title="id",description="ID",type="number"),
 *     @OA\Property(property="noteId",title="noteId",description="笔记ID",type="number"),
 *     @OA\Property(property="userId",title="userId",description="点赞人ID",type="number"),
 *     @OA\Property(property="createdTime",title="createdTime",description="创建时间",type="string",format="datetime"),
 * )
 */
