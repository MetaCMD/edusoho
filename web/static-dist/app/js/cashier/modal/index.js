!function(e){function r(r){for(var n,i,u=r[0],c=r[1],l=r[2],p=0,s=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(f&&f(r);s.length;)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(n=!1)}n&&(a.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},o={131:0},a=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/static-dist/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=r,u=u.slice();for(var l=0;l<u.length;l++)r(u[l]);var f=c;a.push([757,0]),t()}({22:function(e,r){e.exports=jQuery},757:function(e,r,t){"use strict";t.r(r);var n=t(8);$(".js-confirm-btn").on("click",(function(e){var r=$(e.currentTarget);$.get(r.data("url"),(function(e){e.isPaid?location.href=e.redirectUrl:(Object(n.a)("danger",Translator.trans("cashier.confirm.fail_message")),$("#modal").modal("hide"))}))}))}});