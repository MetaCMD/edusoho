!function(r){var e={};function t(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return r[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=r,t.c=e,t.d=function(r,e,o){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:o})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)t.d(o,n,function(e){return r[e]}.bind(null,n));return o},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/static-dist/",t(t.s=987)}({987:function(r,e){var t=0,o=1;function n(){if(o>3){clearInterval(t);var r=Translator.trans("classroom.live_room.entry_error_hint");$("#classroom-url").html(r)}else $.ajax({url:$("#classroom-url").data("url"),success:function(r){if(r.error){clearInterval(t);var e=r.error+Translator.trans("，")+Translator.trans("classroom.live_room.retry_or_close");$("#classroom-url").html(e)}else if(r.url){var o=r.url;r.param&&(o=o+"?param="+r.param);var n='<iframe name="classroom" src="'+o+'" style="position:absolute; left:0; top:0; height:100%; width:100%; border:0px;" scrolling="no" allowfullscreen="true" allow="screen-wake-lock; display-capture"></iframe>';$("body").html(n),clearInterval(t)}},error:function(){}}),o++}n(),t=setInterval(n,3e3)}});