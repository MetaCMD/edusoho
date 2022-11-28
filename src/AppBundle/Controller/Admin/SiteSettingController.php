<?php

namespace AppBundle\Controller\Admin;

use AppBundle\Common\Exception\FileToolkitException;
use AppBundle\Common\FileToolkit;
use Biz\Common\HTMLHelper;
use Symfony\Component\HttpFoundation\Request;

class SiteSettingController extends BaseController
{
    public function securityAction(Request $request)
    {
        $security = $this->getSettingService()->get('security', []);
        $default = [
            'safe_iframe_domains' => [],
        ];
        $security = array_merge($default, $security);

        if ($request->isMethod('POST')) {
            $security = $request->request->all();

            $security['safe_iframe_domains'] = trim(str_replace(["\r\n", "\n", "\r"], ' ', $security['safe_iframe_domains']));
            $security['safe_iframe_domains'] = array_filter(explode(' ', $security['safe_iframe_domains']));

            $this->getCacheService()->set('safe_iframe_domains', $security['safe_iframe_domains']);
            $this->getSettingService()->set('security', $security);
            $this->setFlashMessage('success', 'site.save.success');
        }

        return $this->render('admin/system/security.html.twig', [
            'security' => $security,
        ]);
    }

    public function siteAction(Request $request)
    {
        $site = $this->getSettingService()->get('site', []);
        $default = [
            'name' => '',
            'slogan' => '',
            'url' => '',
            'logo' => '',
            'seo_keywords' => '',
            'seo_description' => '',
            'master_email' => '',
            'icp' => '',
            'icpUrl' => 'https://beian.miit.gov.cn',
            'analytics' => '',
            'status' => 'open',
            'closed_note' => '',
            'favicon' => '',
            'copyright' => '',
        ];
        $site = array_merge($default, $site);

        return $this->render('admin/system/site.html.twig', [
            'site' => $site,
        ]);
    }

    public function saveSiteAction(Request $request)
    {
        $site = $request->request->all();

        if (!empty($site['analytics'])) {
            $helper = new HTMLHelper($this->getBiz());
            $site['analytics'] = $helper->closeTags($site['analytics']);
        }
        $this->getSettingService()->set('site', $site);

        return $this->createJsonResponse([
            'message' => $this->trans('site.save.success'),
        ]);
    }

    public function consultSettingAction(Request $request)
    {
        $consult = $this->getSettingService()->get('consult', []);
        $default = [
            'enabled' => 0,
            'worktime' => '9:00 - 17:00',
            'qq' => [
                ['name' => '', 'number' => ''],
            ],
            'qqgroup' => [
                ['name' => '', 'number' => '', 'url' => ''],
            ],
            'phone' => [
                ['name' => '', 'number' => ''],
            ],
            'supplier' => '',
            'webchatURI' => '',
            'email' => '',
            'color' => 'default',
        ];

        $consult = array_merge($default, $consult);
        if ('POST' == $request->getMethod()) {
            $consult = $request->request->all();

            foreach ($consult['qq'] as &$qq) {
                $qq['url'] = $this->purifyHtml($qq['url'], true);
            }

            foreach ($consult['qqgroup'] as &$group) {
                $group['url'] = $this->purifyHtml($group['url'], true);
            }

            ksort($consult['qq']);
            ksort($consult['qqgroup']);
            ksort($consult['phone']);
            if (!empty($consult['webchatURI'])) {
                $fields = explode('?', $consult['webchatURI']);
                $consult['webchatURI'] = $fields[0].'?time='.time();
            }
            $this->getSettingService()->set('consult', $consult);
            $this->setFlashMessage('success', 'site.save.success');
        }

        return $this->render('admin/system/consult-setting.html.twig', [
            'consult' => $consult,
        ]);
    }

    public function esBarSettingAction(Request $request)
    {
        $esBar = $this->getSettingService()->get('esBar', []);

        $default = [
            'enabled' => 1,
        ];

        $esBar = array_merge($default, $esBar);

        if ('POST' == $request->getMethod()) {
            $esBar = $request->request->all();
            $this->getSettingService()->set('esBar', $esBar);
            $this->setFlashMessage('success', 'site.save.success');
        }

        return $this->render('admin/system/esbar-setting.html.twig', [
            'esBar' => $esBar,
        ]);
    }

    public function deleteWebchatAction(Request $request)
    {
        $consult = $this->getSettingService()->get('consult', []);
        if (isset($consult['webchatURI'])) {
            $consult['webchatURI'] = '';
            $this->getSettingService()->set('consult', $consult);
        }

        return $this->createJsonResponse(true);
    }

    public function consultUploadAction(Request $request)
    {
        $fileId = $request->request->get('id');
        $objectFile = $this->getFileService()->getFileObject($fileId);
        if (!FileToolkit::isImageFile($objectFile)) {
            $this->createNewException(FileToolkitException::NOT_IMAGE());
        }

        $file = $this->getFileService()->getFile($fileId);
        $parsed = $this->getFileService()->parseFileUri($file['uri']);

        $consult = $this->getSettingService()->get('consult', []);

        $consult['webchatURI'] = "{$this->container->getParameter('topxia.upload.public_url_path')}/".$parsed['path'];
        $consult['webchatURI'] = ltrim($consult['webchatURI'], '/');

        $this->getSettingService()->set('consult', $consult);

        $response = [
            'path' => $consult['webchatURI'],
            'url' => $this->container->get('assets.default_package_util_util')->getUrl($consult['webchatURI']),
        ];

        return $this->createJsonResponse($response);
    }

    public function shareAction(Request $request)
    {
        $defaultSetting = $this->getSettingService()->get('default', []);
        $default = $this->getDefaultSet();

        $defaultSetting = array_merge($default, $defaultSetting);

        if ('POST' == $request->getMethod()) {
            $defaultSetting = $request->request->all();
            $default = $this->getSettingService()->get('default', []);
            $defaultSetting = array_merge($default, $defaultSetting);

            $this->getSettingService()->set('default', $defaultSetting);
            $this->setFlashMessage('success', 'site.save.success');
        }

        return $this->render('admin/system/share.html.twig', [
            'defaultSetting' => $defaultSetting,
        ]);
    }

    protected function getDefaultSet()
    {
        $default = [
            'defaultAvatar' => 0,
            'defaultCoursePicture' => 0,
            'defaultAvatarFileName' => 'avatar',
            'defaultCoursePictureFileName' => 'coursePicture',
            'inviteShareContent' => '我正在{{sitename}}网校学习，邀请你也来体验下。',
            'articleShareContent' => '我正在看{{articletitle}}，关注{{sitename}}，分享知识，成就未来。',
            'courseShareContent' => '我正在学习{{course}}，收获巨大哦，一起来学习吧！',
            'groupShareContent' => '我在{{groupname}}小组,发表了{{threadname}},很不错哦,一起来看看吧!',
            'classroomShareContent' => '我正在学习{{classroom}}，收获巨大哦，一起来学习吧！',
            'user_name' => '学员',
            'chapter_name' => '章',
            'part_name' => '节',
        ];

        return $default;
    }

    protected function getCourseService()
    {
        return $this->createService('Course:CourseService');
    }

    protected function getAppService()
    {
        return $this->createService('CloudPlatform:AppService');
    }

    protected function getSettingService()
    {
        return $this->createService('System:SettingService');
    }

    protected function getCacheService()
    {
        return $this->createService('System:CacheService');
    }

    protected function getUserFieldService()
    {
        return $this->createService('User:UserFieldService');
    }

    protected function getAuthService()
    {
        return $this->createService('User:AuthService');
    }

    protected function getFileService()
    {
        return $this->createService('Content:FileService');
    }
}
