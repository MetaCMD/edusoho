<?php

namespace Tests\Unit\Goods\Mediator;

use Biz\BaseTestCase;
use Biz\Classroom\Service\ClassroomService;
use Biz\Goods\Mediator\ClassroomGoodsMediator;
use Biz\Goods\Service\GoodsService;

class ClassroomGoodsMediatorTest extends BaseTestCase
{
    public function testOnCreate()
    {
        $classroom = $this->mockClassroom();
        list($product, $goods) = $this->getClassroomGoodsMediator()->onCreate($classroom);
        self::assertEquals($classroom['title'], $product['title']);
        self::assertEquals($classroom['id'], $product['targetId']);
        self::assertEquals($classroom['title'], $goods['title']);
        self::assertEquals($classroom['subtitle'], $goods['subtitle']);
        self::assertEquals('classroom', $goods['type']);
    }

    public function testOnNormalDataUpdate()
    {
        $classroom = $this->mockClassroom();
        list($product, $goods) = $this->getClassroomGoodsMediator()->onCreate($classroom);
        self::assertEquals($classroom['title'], $goods['title']);
        $updatedClassroom = $this->mockClassroom(['title' => '测试班级商品-改']);
        list($updatedProduct, $updatedGoods) = $this->getClassroomGoodsMediator()->onUpdateNormalData($updatedClassroom);
        self::assertEquals($updatedClassroom['title'], $updatedGoods['title']);
    }

    public function testOnPublish()
    {
        $classroom = $this->mockClassroom();
        list($product, $goods) = $this->getClassroomGoodsMediator()->onCreate($classroom);
        list($publishedProduct, $publishedGoods) = $this->getClassroomGoodsMediator()->onPublish($classroom);
        self::assertEquals('created', $goods['status']);
        self::assertEquals('published', $publishedGoods['status']);
    }

    public function testOnClose()
    {
        $classroom = $this->mockClassroom();
        list($product, $goods) = $this->getClassroomGoodsMediator()->onCreate($classroom);
        list($publishedProduct, $publishedGoods) = $this->getClassroomGoodsMediator()->onPublish($classroom);
        self::assertEquals('created', $goods['status']);
        self::assertEquals('published', $publishedGoods['status']);
        list($unpublishedProduct, $unpublishedGoods) = $this->getClassroomGoodsMediator()->onClose($classroom);
        self::assertEquals('unpublished', $unpublishedGoods['status']);
    }

    public function testOnDelete()
    {
        $classroom = $this->mockClassroom();
        list($product, $goods) = $this->getClassroomGoodsMediator()->onCreate($classroom);
        self::assertNotEmpty($goods);
        $this->getClassroomGoodsMediator()->onDelete($classroom);
        $goods = $this->getGoodsService()->getGoods($goods['id']);
        self::assertEmpty($goods);
    }

    public function testOnMaxRateChange()
    {
        $classroom = $this->mockClassroom();
        list($product, $goods) = $this->getClassroomGoodsMediator()->onCreate($classroom);
        self::assertEquals(100, $goods['maxRate']);
        $updatedClassroom = $this->mockClassroom(['maxRate' => 10]);
        list($updatedProduct, $updatedGoods) = $this->getClassroomGoodsMediator()->onMaxRateChange($updatedClassroom);
        self::assertEquals(10, $updatedGoods['maxRate']);
    }

    public function mockClassroom($customFields = [])
    {
        return array_merge([
            'id' => 1,
            'title' => '测试班级商品',
            'subtitle' => '测试班级商品副标题',
            'about' => '测试班级商品简介',
            'largePicture' => 'public://course/2018/07-25/150507367180941893.jpg',
            'smallPicture' => 'public://course/2018/07-25/150507367180941893.jpg',
            'middlePicture' => 'public://course/2018/07-25/150507367180941893.jpg',
            'orgCode' => '1.1',
            'orgId' => 1,
            'creator' => 1,
            'price' => '0.00',
            'showable' => 1,
            'buyable' => 1,
            'expiryMode' => 'forever',
            'service' => [],
        ], $customFields);
    }

    protected function createSpecs($customFields = [])
    {
        return $this->getGoodsService()->createGoodsSpecs(array_merge([
            'goodsId' => 1,
            'targetId' => 1,
            'title' => '测试班级规格',
            'seq' => 1,
            'usageMode' => 'forever',
        ], $customFields));
    }

    protected function createGoods($customFields = [])
    {
        return $this->getGoodsService()->createGoods(array_merge([
            'targetType' => 'classroom',
            'targetId' => 1,
            'title' => '测试班级商品',
            'owner' => 1,
        ], $customFields));
    }

    /**
     * @return ClassroomGoodsMediator
     */
    protected function getClassroomGoodsMediator()
    {
        return $this->biz['goods.mediator.classroom'];
    }

    /**
     * @return ClassroomService
     */
    protected function getClassroomService()
    {
        return $this->createService('Classroom:ClassroomService');
    }

    /**
     * @return GoodsService
     */
    protected function getGoodsService()
    {
        return $this->createService('Goods:GoodsService');
    }
}
