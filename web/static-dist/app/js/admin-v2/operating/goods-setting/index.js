!function(i){function e(e){for(var n,t,r=e[0],a=e[1],o=e[2],l=0,s=[];l<r.length;l++)t=r[l],Object.prototype.hasOwnProperty.call(u,t)&&u[t]&&s.push(u[t][0]),u[t]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(i[n]=a[n]);for(p&&p(e);s.length;)s.shift()();return c.push.apply(c,o||[]),d()}function d(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==u[o]&&(r=!1)}r&&(c.splice(n--,1),e=l(l.s=t[0]))}return e}var t={},u={79:0},c=[];function l(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return i[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=i,l.c=t,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)l.d(t,r,function(e){return n[e]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/static-dist/";var n=window.webpackJsonp=window.webpackJsonp||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var a=0;a<n.length;a++)e(n[a]);var p=r;c.push([572,0]),d()}({572:function(e,n,t){"use strict";t.r(n);var r=t(21),s=t.n(r);cd.upload({el:"#cd-upload"}).on("success",function(e,n,t){var r,a=$(e.currentTarget),o=$(a.data("target")),l=new FormData;l.append("token",a.data("token")),l.append("file",n),r=l,new s.a(function(n,e){$.ajax({url:app.uploadUrl,type:"POST",cache:!1,data:r,processData:!1,contentType:!1}).done(function(e){n(e)})}).then(function(e){o.attr("src",e.url),$('input[name="leading[qrcode]"]').val(e.uri)})}).on("error",function(e){$el.val(""),"FILE_SIZE_LIMIT"===e?cd.message({type:"danger",message:Translator.trans("uploader.size_2m_limit_hint")}):5006201===e&&cd.message({type:"danger",message:Translator.trans("uploader.type_denied_limit_hint")})});var a=$("#goods-setting-form").validate({rules:{},ajax:!0,submitSuccess:function(){cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),$(".js-setting-save-btn").button("reset")}});function o(){a.resetForm(),1==$('input[name="leading_join_enabled"]:checked').val()?($("#leading-label").rules("add",{required:!0,maxlength:20}),$("#leading-description").rules("add",{required:!0,maxlength:40}),$('input[name="leading[qrcode]"]').rules("add",{required:!0})):($("#leading-label").rules("remove"),$("#leading-description").rules("remove"),$('input[name="leading[qrcode]"]').rules("remove"))}o(),$(".js-setting-save-btn").on("click",function(e){var n=$(e.currentTarget);a.form()&&(n.button("loading"),$("#goods-setting-form").submit())}),$("input[type=radio][name=recommend_rule]").change(function(e){var n=$(e.currentTarget),t=$(".js-recommend-rule").find(".help-block");"hot"===n.val()?(t.addClass("hidden"),$(".js-recommend-rule-hot").removeClass("hidden")):"latest"===n.val()?(t.addClass("hidden"),$(".js-recommend-rule-latest").removeClass("hidden")):"label"===n.val()&&(t.addClass("hidden"),$(".js-recommend-rule-label").removeClass("hidden"))}),$('input[name="leading_join_enabled"]').on("change",function(e){o()})}});