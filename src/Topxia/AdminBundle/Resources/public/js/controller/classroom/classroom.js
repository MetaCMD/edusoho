define(function (require, exports, module) {
  var Notify = require('common/bootstrap-notify');
  var Validator = require('bootstrap.validator');
  require('common/validator-rules').inject(Validator);

  exports.run = function () {
    var $table = $('#classroom-table');

    $table.on('click', '.close-classroom,.open-classroom,.cancel-recommend-classroom', function () {
      var $trigger = $(this);
      if (!confirm($trigger.attr('title') + Translator.trans('admin.classroom.operation_hint'))) {
        return;
      }
      $.post($(this).data('url'), function (html) {
        Notify.success($trigger.attr('title') + Translator.trans('admin.classroom.operation_success_hint'));
        var $tr = $(html);
        $('#' + $tr.attr('id')).replaceWith($tr);
      }).error(function () {
        Notify.danger($trigger.attr('title') + Translator.trans('admin.classroom.operation_fail_hint'));
      });
    });

    // 确认后,弹出密码确认框;确认后删除
    $table.on('click', '.delete-classroom', function () {
      if (!confirm(Translator.trans('admin.classroom.delete_hint'))) {
        return;
      }
      let $tr = $(this).parents('tr');
      $.post($(this).data('url'), function (data) {
        if (data.code == 0) {
          $tr.remove();
          Notify.success(data.message);
        } else {
          $('#modal').modal('show').html(data);
        }
      }).error(function (e) {
        let res = e.responseJSON.error.message;
        Notify.danger(res);
      });
    });
  };
});