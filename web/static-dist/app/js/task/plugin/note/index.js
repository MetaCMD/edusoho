!function(e){function t(t){for(var r,i,l=t[0],u=t[1],s=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={357:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;a.push([1354,0]),n()}({1354:function(e,t,n){"use strict";n.r(t);var r=n(8),o=n(131),a=$("[data-role=saved-message]");Object(o.a)();var i,l=function(){a.html(Translator.trans("task.plugin_redmine_save_hint")).show()},u=function(){var e=(new Date).Format("yyyy-MM-dd hh:mm:ss");a.html(Translator.trans("task.plugin_redmine_save_success_hint",{date:e})).show(),setTimeout((function(){a.hide()}),3e3)},s=function(){a.html("")},c=$(".js-sidebar-pane").height()-175,f=$("#note-content-field"),p=CKEDITOR.replace("note-content-field",{toolbar:"Minimal",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:f.data("imageUploadUrl"),allowedContent:!0,height:c<300?200:c});function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if($.trim(f.val())){var t=$("#task-note-plugin-form"),n=t.serializeArray();i!==n[0].value&&(l(),e&&e.attr("disabled","disabled"),$.post(t.attr("action"),n).then((function(t){u(),e&&e.removeAttr("disabled"),i=n[0].value})).catch((function(t){e.removeAttr("disabled"),s()})))}else e&&Object(r.a)("danger",Translator.trans("course.notebook.empty_note_content_notice"))}p.on("change",(function(){f.val(p.getData())})),$("#note-save-btn").click((function(e){var t=$(this);e.preventDefault(),d(t)})),setInterval(d,3e4)},21:function(e,t){e.exports=jQuery}});