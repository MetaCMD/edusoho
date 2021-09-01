<?php

namespace Biz\Assistant;

use AppBundle\Common\Exception\AbstractException;

class AssistantException extends AbstractException
{
    const EXCEPTION_MODULE = 82;

    const MUTLICLASS_ASSISTANT_REQUIRE = 5008201;

    const ASSISTANT_STUDENT_NOT_FOUND = 4048202;

    const ASSISTANT_NOT_FOUND = 4048203;

    public $message = [
        5008201 => 'exception.multi_class.assistant_require',
        4048202 => 'exception.multi_class.assistant_student_not_found',
        4048203 => 'exception.multi_class.assistant_not_found',
    ];
}
