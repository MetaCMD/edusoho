<?php

namespace AppBundle\Controller\AdminV2\User;

use AppBundle\Controller\AdminV2\BaseController;
use Symfony\Component\HttpFoundation\Request;

class ScrmController extends BaseController
{
    public function indexAction(Request $request)
    {
        return $this->render('admin-v2/user/scrm/index.html.twig');
    }
}
