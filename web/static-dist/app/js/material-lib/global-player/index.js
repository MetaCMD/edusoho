!function(u){function e(e){for(var t,r,a=e[0],n=e[1],o=e[2],i=0,l=[];i<a.length;i++)r=a[i],Object.prototype.hasOwnProperty.call(p,r)&&p[r]&&l.push(p[r][0]),p[r]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(u[t]=n[t]);for(c&&c(e);l.length;)l.shift()();return d.push.apply(d,o||[]),s()}function s(){for(var e,t=0;t<d.length;t++){for(var r=d[t],a=!0,n=1;n<r.length;n++){var o=r[n];0!==p[o]&&(a=!1)}a&&(d.splice(t--,1),e=i(i.s=r[0]))}return e}var r={},p={249:0},d=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=u,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var n=0;n<t.length;n++)e(t[n]);var c=a;d.push([719,0]),s()}({367:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=function(){return t=document.createElement("video"),["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some(function(e){return/maybe|probably/i.test(t.canPlayType(e))})?"native":window.MediaSource?"hls":!!function(){var e={};if(e.ie9=/MSIE\s+9.0/i.test(navigator.userAgent),e.ie10=/MSIE\s+10.0/i.test(navigator.userAgent),e.ie11=/Trident\/7\./.test(navigator.userAgent),e.edge=/Edge\/13./i.test(navigator.userAgent),e.ie9||e.ie10||e.ie11||e.edge)return!0}()&&"flash";var t}},719:function(e,t,r){"use strict";r.r(t);function a(){var e=new QiQiuYun.Player({id:"global-player",sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,resNo:s.data("resNo"),token:s.data("token"),user:{id:s.data("userId"),name:s.data("userName")},playbackRates:s.data("enablePlaybackRates")?["0.5","1.0","1.25","1.5","2.0"]:0}),t=new u.a({name:"parent",project:"PlayerProject",type:"child"});e.on("video.timeupdate",function(e){t.sendToParent("video.timeupdate",e)})}var n,o=r(74),i=r.n(o),l=r(367),u=r(99),s=$("#global-player");"video"!==s.data("fileType")||"flash"!==Object(l.a)()||i.a.hasFlashPlayerVersion("11")?a():(n='\n    <div class="alert alert-warning alert-dismissible fade in" role="alert">\n      <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">×</span>\n      </button>\n      '.concat(Translator.trans("site.flash_not_install_hint"),"\n    </div>"),s.html(n).show())}});