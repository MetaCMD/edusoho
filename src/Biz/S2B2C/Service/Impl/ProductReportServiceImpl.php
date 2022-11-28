<?php

namespace Biz\S2B2C\Service\Impl;

use AppBundle\Common\ArrayToolkit;
use Biz\BaseService;
use Biz\S2B2C\Dao\ProductReportDao;
use Biz\S2B2C\S2B2CException;
use Biz\S2B2C\Service\ProductReportService;
use Biz\S2B2C\Service\ProductService;
use Biz\S2B2C\Service\S2B2CFacadeService;
use Biz\User\Service\UserService;

class ProductReportServiceImpl extends BaseService implements ProductReportService
{
    public function create($fields)
    {
        if (!ArrayToolkit::requireds($fields, ['s2b2cProductId', 'userId', 'type', 'orderId'])) {
            throw new \InvalidArgumentException();
        }
        $config = $this->getS2B2CFacadeService()->getS2B2CConfig();
        $user = $this->getUserService()->getUser($fields['userId']);

        return $this->getProductReportDao()->create([
            'supplierId' => $config['supplierId'],
            'productId' => $fields['s2b2cProductId'],
            'type' => $fields['type'],
            'userId' => $user['id'],
            'nickname' => $user['nickname'],
            'orderId' => $fields['orderId'],
            'status' => self::STATUS_CREATED,
            'reason' => empty($fields['reason']) ? '' : $fields['reason'],
        ]);
    }

    public function getById($id)
    {
        return $this->getProductReportDao()->get($id);
    }

    public function getByOrderIdAndType($orderId, $type)
    {
        if ($orderId <= 0) {
            return [];
        }

        return $this->getProductReportDao()->getByOrderIdAndType($orderId, $type);
    }

    public function updateFailedReason($id, $reason)
    {
        $report = $this->getById($id);
        if (empty($report)) {
            $this->createNewException(S2B2CException::SETTLEMENT_REPORT_NOT_FOUND());
        }

        return $this->getProductReportDao()->update($id, [
            'status' => self::STATUS_FAILED,
            'reason' => $reason,
        ]);
    }

    public function updateStatusToSent($id)
    {
        $report = $this->getById($id);
        if (empty($report)) {
            $this->createNewException(S2B2CException::SETTLEMENT_REPORT_NOT_FOUND());
        }

        return $this->getProductReportDao()->update($id, ['status' => self::STATUS_SENT]);
    }

    public function updateStatusToSucceed($id)
    {
        $report = $this->getById($id);
        if (empty($report)) {
            $this->createNewException(S2B2CException::SETTLEMENT_REPORT_NOT_FOUND());
        }

        return $this->getProductReportDao()->update($id, ['status' => self::STATUS_SUCCEED]);
    }

    /**
     * @return ProductReportDao
     */
    protected function getProductReportDao()
    {
        return $this->biz->dao('S2B2C:ProductReportDao');
    }

    /**
     * @return S2B2CFacadeService
     */
    protected function getS2B2CFacadeService()
    {
        return $this->biz->service('S2B2C:S2B2CFacadeService');
    }

    /**
     * @return UserService
     */
    protected function getUserService()
    {
        return $this->biz->service('User:UserService');
    }

    /**
     * @return ProductService
     */
    protected function getProductService()
    {
        return $this->biz->service('S2B2C:ProductService');
    }
}
