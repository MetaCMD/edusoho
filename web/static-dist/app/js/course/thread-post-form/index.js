!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/",o(o.s=648)}({648:function(e,t){var n=$("#thread-post-form"),r=n.validate({rules:{"post[content]":{required:!0}}});$(".js-btn-thread-save").click(function(e){r.form()&&($(e.currentTarget).button("loading"),n.submit())});var o=CKEDITOR.replace("post_content",{toolbar:"Thread",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#post_content").data("imageUploadUrl"),height:300});o.on("change",function(){$("#post_content").val(o.getData()),r.form()}),o.on("blur",function(){$("#post_content").val(o.getData()),r.form()})}});