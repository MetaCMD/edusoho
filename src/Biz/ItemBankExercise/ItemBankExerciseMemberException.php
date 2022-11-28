<?php

namespace Biz\ItemBankExercise;

use AppBundle\Common\Exception\AbstractException;

class ItemBankExerciseMemberException extends AbstractException
{
    const EXCEPTION_MODULE = 76;

    const DUPLICATE_MEMBER = 4037601;

    const NOTFOUND_MEMBER = 4047602;

    const CAN_NOT_BECOME_MEMBER = 4037603;

    const NON_EXPIRED_MEMBER = 5007604;

    const MEMBER_NOT_STUDENT = 5007605;

    public $messages = [
        4037601 => 'exception.item_bank_exercise.member.duplicate_member',
        4047602 => 'exception.item_bank_exercise.member.not_found',
        4037603 => 'exception.item_bank_exercise.member.can_not_become_member',
        5007604 => 'exception.item_bank_exercise.member.non_expired',
        5007605 => 'exception.item_bank_exercise.member.member_not_student',
    ];
}
