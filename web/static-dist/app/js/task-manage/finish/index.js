!function(i){var n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=i,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static-dist/",r(r.s=771)}({771:function(e,t){var i=$("#finish-type");i.length&&i.on("change",function(){$("#conditions").children().hide();var e,t=$(this).val();switch("time"==t?$("#watchTime").rules("add",{required:!0,positive_integer:!0,messages:{required:Translator.trans("activity.video_manage.length_required_error_hint")}}):$("#watchTime").rules("remove"),t){case"time":$("#conditions-time").show(),$("#watchTime").val()||(e=$("#finish-type option:selected"),$("#watchTime").val(e.data("value")),$("#finish-data").val(e.data("value")));break;case"end":break;default:i.trigger("selectChange",t)}});var n=$("#step3-form").validate({groups:{nameGroup:"minute second"},rules:{watchTime:{positive_integer:!0}}});"none"!=$("#conditions-time").css("display")&&$("#watchTime").rules("add",{required:!0,positive_integer:!0,messages:{required:Translator.trans("activity.video_manage.length_required_error_hint")}}),$("#watchTime").on("change",function(){$("#finish-data").val($(this).val())}),window.ltc.on("getCondition",function(e){0<$("#finish-type-select").length?window.ltc.emit("returnCondition",{valid:n.form(),data:{finishType:$("#finish-type-select:checked").val()}}):window.ltc.emit("returnCondition",{valid:n.form(),data:{finishType:$("#finish-type").val(),finishData:$("#finish-data").val()}})})}});