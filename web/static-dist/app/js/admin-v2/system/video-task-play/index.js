!function(l){function e(e){for(var t,n,r=e[0],o=e[1],s=e[2],i=0,a=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&a.push(c[n][0]),c[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);for(f&&f(e);a.length;)a.shift()();return d.push.apply(d,s||[]),u()}function u(){for(var e,t=0;t<d.length;t++){for(var n=d[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(r=!1)}r&&(d.splice(t--,1),e=i(i.s=n[0]))}return e}var n={},c={96:0},d=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=l,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var f=r;d.push([588,0]),u()}({15:function(e,t){e.exports=jQuery},588:function(e,t,n){"use strict";n.r(t);var r=n(4),o=$("#video-play-form");$(".js-setting-submit").click(function(){$.post(o.data("url"),o.serialize()).success(function(e){Object(r.a)("success",Translator.trans("site.save_success_hint"))}).fail(function(e,t,n){Object(r.a)("danger",e.responseJSON.error.message)})}),$('input:radio[name="multiple_learn_enable"]').click(function(){0==$('input:radio[name="multiple_learn_enable"]:checked').val()?($(".js-effect-show").removeClass("hidden"),$(".js-allow-tips").addClass("hidden"),$(".js-forbidden-tips").removeClass("hidden")):($(".js-effect-show").addClass("hidden"),$(".js-allow-tips").removeClass("hidden"),$(".js-forbidden-tips").addClass("hidden"))})}});