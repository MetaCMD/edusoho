import notify from 'common/notify';

let validator = initValidator();
initEvent(validator);
initCkeditor(validator);
initDatetimePicker(validator);

function initValidator() {
  return $('#announcement-write-form').validate({
    onkeyup: false,
    rules: {
      content: {
        required: true,
      },
      startTime: {
        required: true,
        DateAndTime: true,
      },
      endTime: {
        required: true,
        DateAndTime: true,
      }
    },
  });
}

function initEvent() {
  $('#modal').modal('show');
  $('a[data-role="announcement-modal"]').click(function () {
    var $modal = $('#modal');
    $modal.html('').load($(this).data('url'));
  });
  $('.js-save-btn').click(function () {
    if (Date.parse($('[name=startTime]').val()) > Date.parse($('[name=endTime]').val())) {
      notify('danger', Translator.trans('announcement.create_datetime.error.hint'));
      return;
    }

    if (validator.form()) {
      $('.js-save-btn').button('loading');
      $.post($('#announcement-write-form').attr('action'), $('#announcement-write-form').serialize(), function (json) {
        window.location.reload();
      }, 'json');
    }
  });
}

function initCkeditor(validator) {
  // group: 'course'
  var editor = CKEDITOR.replace('announcement-content-field', {
    toolbar: 'Simple',
    fileSingleSizeLimit: app.fileSingleSizeLimit,
    filebrowserImageUploadUrl: $('#announcement-content-field').data('imageUploadUrl')
  });

  editor.on('change', () => {
    $('#announcement-content-field').val(editor.getData());
    validator.form();
  });
  editor.on('blur', () => {
    $('#announcement-content-field').val(editor.getData());
    validator.form();
  });
}

function initDatetimePicker(validator) {
  var now = new Date();
  $('[name=startTime]').datetimepicker({
    language: document.documentElement.lang,
    autoclose: true
  }).on('hide', function (ev) {
    validator.form();
  });

  $('[name=startTime]').datetimepicker('setStartDate', now);
  $('[name=startTime]').datetimepicker().on('changeDate', function () {
    $('[name=endTime]').datetimepicker('setStartDate', $('[name=startTime]').val().substring(0, 16));
  });

  $('[name=endTime]').datetimepicker({
    autoclose: true,
    language: document.documentElement.lang,
  }).on('hide', function (ev) {
    validator.form();
  });

  $('[name=endTime]').datetimepicker('setStartDate', now);

  $('[name=endTime]').datetimepicker().on('changeDate', function () {
    $('[name=startTime]').datetimepicker('setEndDate', $('[name=endTime]').val().substring(0, 16));
  });
}