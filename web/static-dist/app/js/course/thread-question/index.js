!function(e){function t(t){for(var n,a,u=t[0],s=t[1],f=t[2],c=0,p=[];c<u.length;c++)a=u[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,f||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={202:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static-dist/";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=s;i.push([850,0]),r()}({84:function(e,t,r){"use strict";var n=r(17),o=r.n(n),i=r(2),a=r.n(i),u=r(3),s=r.n(u),f=(r(109),function(){function e(){a()(this,e)}return s()(e,null,[{key:"set",value:function(e,t,r){var n=store.get("durations",{});n&&n instanceof Array||(n=new Array);var o=e+"-"+t+":"+r;n.length>0&&n.slice(n.length-1,n.length)[0].indexOf(e+"-"+t)>-1&&n.splice(n.length-1,n.length),n.length>=20&&n.shift(),n.push(o),store.set("durations",n)}},{key:"get",value:function(e,t){var r=store.get("durations",{});if(r)for(var n=0;n<r.length;n++){if(r[n].indexOf(e+"-"+t)>-1){var i=r[n];return o()(i.split(":")[1])}}return 0}},{key:"del",value:function(e,t){var r=store.get("durations");if(r){for(var n=0;n<r.length;n++){r[n].indexOf(e+"-"+t)>-1&&r.splice(n,1)}store.set("durations",r)}}}]),e}());t.a=f},850:function(e,t,r){"use strict";r.r(t);var n=r(84),o=$("#js-task-iframe").data("userId"),i=$("#js-task-iframe").data("fileId"),a=$("#js-task-iframe").data("videoAskTime");n.a.set(o,i,a)}});