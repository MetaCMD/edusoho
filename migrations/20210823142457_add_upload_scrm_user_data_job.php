<?php

use Phpmig\Migration\Migration;

class AddUploadScrmUserDataJob extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $biz = $this->getContainer();
        $connection = $biz['db'];

        $job = $connection->fetchAssoc("select * from biz_scheduler_job where name = 'UploadSCRMUserDataJob'");
        if (empty($job)) {
            $randNum = rand(1, 29);
            $currentTime = time();
            $connection->exec("
            INSERT INTO `biz_scheduler_job` (
                `name`,
                `pool`,
                `expression`,
                `class`,
                `args`,
                `priority`,
                `next_fire_time`,
                `misfire_threshold`,
                `misfire_policy`,
                `enabled`,
                `creator_id`,
                `updated_time`,
                `created_time`
            ) VALUES
            (
                'UploadSCRMUserDataJob',
                'default',
                '{$randNum}/30 * * * *',
                'Biz\\\\SCRM\\\\Job\\\\UploadSCRMUserDataJob',
                '',
                '100',
                '{$currentTime}',
                '0',
                'executing',
                '1',
                '0',
                '{$currentTime}',
                '{$currentTime}'
            );
        ");
        }
    }

    /**
     * Undo the migration
     */
    public function down()
    {
    }
}
