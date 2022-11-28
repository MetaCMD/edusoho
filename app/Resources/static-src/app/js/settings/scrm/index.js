class SCRMBind {
  constructor() {
    this.intervalCheckOrderId = null;
    this.init();
  }

  init() {
    if ($('.js-qrcode-content').length > 0) {
      this.intervalCheckOrderId = setInterval(() => this.bindScrm(), 2000);
    }
  }

  bindScrm() {
    if ($('.js-qrcode-content').length <= 0) {
      return;
    }

    let self = this;
    $.post($('.js-qrcode-content').data('url'), function (res) {
      if (res == true) {
        clearInterval(self.intervalCheckOrderId);
        window.location.reload();
      }
    });
  }
}

new SCRMBind();