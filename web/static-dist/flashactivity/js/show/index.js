/*! For license information please see index.js.LICENSE.txt */
!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/static-dist/",n(n.s=113)}({113:function(e,t,n){"use strict";n.r(t);var a=n(42),r=n.n(a),i=$("#flash-player");if(r.a.hasFlashPlayerVersion("11"))r.a.embedSWF(i.data("uri"),"flash-player","100%","100%","9.0.0",null,null,{wmode:"opaque",allowFullScreen:"true"});else{var o='\n    <div class="alert alert-warning alert-dismissible fade in" role="alert">\n      <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">×</span>\n      </button>\n      '.concat(Translator.trans("site.flash_not_install_hint"),"\n    </div>");i.html(o),i.show()}},42:function(e,t){var n=function(){var e,t,a,r,i,o,l="undefined",s="object",d="Shockwave Flash",f="application/x-shockwave-flash",c="SWFObjectExprInst",u="onreadystatechange",p=window,v=document,y=navigator,h=!1,m=[],g=[],b=[],w=[],C=!1,E=!1,S=!0,T=!1,A=function(){var e=typeof v.getElementById!=l&&typeof v.getElementsByTagName!=l&&typeof v.createElement!=l,t=y.userAgent.toLowerCase(),n=y.platform.toLowerCase(),a=/win/.test(n||t),r=/mac/.test(n||t),i=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),o="Microsoft Internet Explorer"===y.appName,c=[0,0,0],u=null;if(typeof y.plugins!=l&&typeof y.plugins[d]==s)(u=y.plugins[d].description)&&typeof y.mimeTypes!=l&&y.mimeTypes[f]&&y.mimeTypes[f].enabledPlugin&&(h=!0,o=!1,u=u.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),c[0]=_(u.replace(/^(.*)\..*$/,"$1")),c[1]=_(u.replace(/^.*\.(.*)\s.*$/,"$1")),c[2]=/[a-zA-Z]/.test(u)?_(u.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0);else if(typeof p.ActiveXObject!=l)try{var m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");m&&(u=m.GetVariable("$version"))&&(o=!0,c=[_((u=u.split(" ")[1].split(","))[0]),_(u[1]),_(u[2])])}catch(e){}return{w3:e,pv:c,wk:i,ie:o,win:a,mac:r}}();A.w3&&((typeof v.readyState!=l&&("complete"===v.readyState||"interactive"===v.readyState)||typeof v.readyState==l&&(v.getElementsByTagName("body")[0]||v.body))&&N(),C||(typeof v.addEventListener!=l&&v.addEventListener("DOMContentLoaded",N,!1),A.ie&&(v.attachEvent(u,(function e(){"complete"==v.readyState&&(v.detachEvent(u,e),N())})),p==top&&function e(){if(!C){try{v.documentElement.doScroll("left")}catch(t){return void setTimeout(e,0)}N()}}()),A.wk&&function e(){C||(/loaded|complete/.test(v.readyState)?N():setTimeout(e,0))}()));function N(){if(!C&&document.getElementsByTagName("body")[0]){try{var e,t=R("span");t.style.display="none",(e=v.getElementsByTagName("body")[0].appendChild(t)).parentNode.removeChild(e),e=null,t=null}catch(e){return}C=!0;for(var n=m.length,a=0;a<n;a++)m[a]()}}function O(e){C?e():m[m.length]=e}function k(){var e=g.length;if(e>0)for(var t=0;t<e;t++){var n=g[t].id,a=g[t].callbackFn,r={success:!1,id:n};if(A.pv[0]>0){var i=V(n);if(i)if(!W(g[t].swfVersion)||A.wk&&A.wk<312)if(g[t].expressInstall&&B()){var o={};o.data=g[t].expressInstall,o.width=i.getAttribute("width")||"0",o.height=i.getAttribute("height")||"0",i.getAttribute("class")&&(o.styleclass=i.getAttribute("class")),i.getAttribute("align")&&(o.align=i.getAttribute("align"));for(var s={},d=i.getElementsByTagName("param"),f=d.length,c=0;c<f;c++)"movie"!=d[c].getAttribute("name").toLowerCase()&&(s[d[c].getAttribute("name")]=d[c].getAttribute("value"));I(o,s,n,a)}else L(i),a&&a(r);else H(n,!0),a&&(r.success=!0,r.ref=x(n),r.id=n,a(r))}else if(H(n,!0),a){var u=x(n);u&&typeof u.SetVariable!=l&&(r.success=!0,r.ref=u,r.id=u.id),a(r)}}}function x(e){var t=null,n=V(e);return n&&"OBJECT"===n.nodeName.toUpperCase()&&(t=typeof n.SetVariable!==l?n:n.getElementsByTagName(s)[0]||n),t}function B(){return!E&&W("6.0.65")&&(A.win||A.mac)&&!(A.wk&&A.wk<312)}function I(n,i,o,s){var d=V(o);if(o=U(o),E=!0,a=s||null,r={success:!1,id:o},d){"OBJECT"==d.nodeName.toUpperCase()?(e=j(d),t=null):(e=d,t=o),n.id=c,(typeof n.width==l||!/%$/.test(n.width)&&_(n.width)<310)&&(n.width="310"),(typeof n.height==l||!/%$/.test(n.height)&&_(n.height)<137)&&(n.height="137");var f=A.ie?"ActiveX":"PlugIn",u="MMredirectURL="+encodeURIComponent(p.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+f+"&MMdoctitle="+encodeURIComponent(v.title.slice(0,47)+" - Flash Player Installation");if(typeof i.flashvars!=l?i.flashvars+="&"+u:i.flashvars=u,A.ie&&4!=d.readyState){var y=R("div");o+="SWFObjectNew",y.setAttribute("id",o),d.parentNode.insertBefore(y,d),d.style.display="none",P(d)}F(n,i,o)}}function L(e){if(A.ie&&4!=e.readyState){e.style.display="none";var t=R("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(j(e),t),P(e)}else e.parentNode.replaceChild(j(e),e)}function j(e){var t=R("div");if(A.win&&A.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(s)[0];if(n){var a=n.childNodes;if(a)for(var r=a.length,i=0;i<r;i++)1==a[i].nodeType&&"PARAM"==a[i].nodeName||8==a[i].nodeType||t.appendChild(a[i].cloneNode(!0))}}return t}function F(e,t,n){var a,r=V(n);if(n=U(n),A.wk&&A.wk<312)return a;if(r){var i,o,d,c=A.ie?R("div"):R(s);for(d in typeof e.id==l&&(e.id=n),t)t.hasOwnProperty(d)&&"movie"!==d.toLowerCase()&&M(c,d,t[d]);for(i in A.ie&&(c=function(e,t){var n=R("div");return n.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+e+"'>"+t+"</object>",n.firstChild}(e.data,c.innerHTML)),e)e.hasOwnProperty(i)&&("styleclass"===(o=i.toLowerCase())?c.setAttribute("class",e[i]):"classid"!==o&&"data"!==o&&c.setAttribute(i,e[i]));A.ie?b[b.length]=e.id:(c.setAttribute("type",f),c.setAttribute("data",e.data)),r.parentNode.replaceChild(c,r),a=c}return a}function M(e,t,n){var a=R("param");a.setAttribute("name",t),a.setAttribute("value",n),e.appendChild(a)}function P(e){var t=V(e);t&&"OBJECT"==t.nodeName.toUpperCase()&&(A.ie?(t.style.display="none",function e(){if(4==t.readyState){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}else setTimeout(e,10)}()):t.parentNode.removeChild(t))}function $(e){return e&&e.nodeType&&1===e.nodeType}function U(e){return $(e)?e.id:e}function V(e){if($(e))return e;var t=null;try{t=v.getElementById(e)}catch(e){}return t}function R(e){return v.createElement(e)}function _(e){return parseInt(e,10)}function W(e){e+="";var t=A.pv,n=e.split(".");return n[0]=_(n[0]),n[1]=_(n[1])||0,n[2]=_(n[2])||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]}function D(e,t,n,a){var r=v.getElementsByTagName("head")[0];if(r){var s="string"==typeof n?n:"screen";if(a&&(i=null,o=null),!i||o!=s){var d=R("style");d.setAttribute("type","text/css"),d.setAttribute("media",s),i=r.appendChild(d),A.ie&&typeof v.styleSheets!=l&&v.styleSheets.length>0&&(i=v.styleSheets[v.styleSheets.length-1]),o=s}i&&(typeof i.addRule!=l?i.addRule(e,t):typeof v.createTextNode!=l&&i.appendChild(v.createTextNode(e+" {"+t+"}")))}}function H(e,t){if(S){var n=t?"visible":"hidden",a=V(e);C&&a?a.style.visibility=n:"string"==typeof e&&D("#"+e,"visibility:"+n)}}function G(e){return null!=/[\\\"<>\.;]/.exec(e)&&typeof encodeURIComponent!=l?encodeURIComponent(e):e}m[0]=function(){h?function(){var e=v.getElementsByTagName("body")[0],t=R(s);t.setAttribute("style","visibility: hidden;"),t.setAttribute("type",f);var n=e.appendChild(t);if(n){var a=0;!function r(){if(typeof n.GetVariable!=l)try{var i=n.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),A.pv=[_(i[0]),_(i[1]),_(i[2])])}catch(e){A.pv=[8,0,0]}else if(a<10)return a++,void setTimeout(r,10);e.removeChild(t),n=null,k()}()}else k()}():k()};A.ie&&window.attachEvent("onunload",(function(){for(var e=w.length,t=0;t<e;t++)w[t][0].detachEvent(w[t][1],w[t][2]);for(var a=b.length,r=0;r<a;r++)P(b[r]);for(var i in A)A[i]=null;for(var o in A=null,n)n[o]=null;n=null}));return{registerObject:function(e,t,n,a){if(A.w3&&e&&t){var r={};r.id=e,r.swfVersion=t,r.expressInstall=n,r.callbackFn=a,g[g.length]=r,H(e,!1)}else a&&a({success:!1,id:e})},getObjectById:function(e){if(A.w3)return x(e)},embedSWF:function(e,t,n,a,r,i,o,d,f,c){var u=U(t),p={success:!1,id:u};A.w3&&!(A.wk&&A.wk<312)&&e&&t&&n&&a&&r?(H(u,!1),O((function(){n+="",a+="";var v={};if(f&&typeof f===s)for(var y in f)v[y]=f[y];v.data=e,v.width=n,v.height=a;var h={};if(d&&typeof d===s)for(var m in d)h[m]=d[m];if(o&&typeof o===s)for(var g in o)if(o.hasOwnProperty(g)){var b=T?encodeURIComponent(g):g,w=T?encodeURIComponent(o[g]):o[g];typeof h.flashvars!=l?h.flashvars+="&"+b+"="+w:h.flashvars=b+"="+w}if(W(r)){var C=F(v,h,t);v.id==u&&H(u,!0),p.success=!0,p.ref=C,p.id=C.id}else{if(i&&B())return v.data=i,void I(v,h,t,c);H(u,!0)}c&&c(p)}))):c&&c(p)},switchOffAutoHideShow:function(){S=!1},enableUriEncoding:function(e){T=typeof e===l||e},ua:A,getFlashPlayerVersion:function(){return{major:A.pv[0],minor:A.pv[1],release:A.pv[2]}},hasFlashPlayerVersion:W,createSWF:function(e,t,n){return A.w3?F(e,t,n):void 0},showExpressInstall:function(e,t,n,a){A.w3&&B()&&I(e,t,n,a)},removeSWF:function(e){A.w3&&P(e)},createCSS:function(e,t,n,a){A.w3&&D(e,t,n,a)},addDomLoadEvent:O,addLoadEvent:function(e){if(typeof p.addEventListener!=l)p.addEventListener("load",e,!1);else if(typeof v.addEventListener!=l)v.addEventListener("load",e,!1);else if(typeof p.attachEvent!=l)!function(e,t,n){e.attachEvent(t,n),w[w.length]=[e,t,n]}(p,"onload",e);else if("function"==typeof p.onload){var t=p.onload;p.onload=function(){t(),e()}}else p.onload=e},getQueryParamValue:function(e){var t=v.location.search||v.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return G(t);for(var n=t.split("&"),a=0;a<n.length;a++)if(n[a].substring(0,n[a].indexOf("="))==e)return G(n[a].substring(n[a].indexOf("=")+1))}return""},expressInstallCallback:function(){if(E){var n=V(c);n&&e&&(n.parentNode.replaceChild(e,n),t&&(H(t,!0),A.ie&&(e.style.display="block")),a&&a(r)),E=!1}},version:"2.3"}}();e.exports=n}});