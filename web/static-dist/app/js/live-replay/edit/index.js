!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static-dist/",n(n.s=992)}({992:function(t,e){var n=$("#tags");console.log("ddddd"),n.select2({ajax:{url:n.data("url"),dataType:"json",quietMillis:500,data:function(t,e){return{q:t,page_limit:10}},results:function(t){return console.log(t),{results:t.map((function(t){return{id:t.id,name:t.name}}))}}},initSelection:function(t,e){e(e($(t).data("selected")))},formatSelection:function(t){return t.name},formatResult:function(t){return t.name},formatNoMatches:function(){return Translator.trans("validate.tag_required_not_found_hint")},formatSearching:function(){return Translator.trans("site.searching_hint")},multiple:!0,maximumSelectionSize:20,placeholder:Translator.trans("course_set.manage.tag_required_hint"),width:"off",createSearchChoice:function(){return null}}),$("#submit-btn").on("click",(function(t){$("#submit-btn").button("loading"),$.post($("#replay-form").attr("action"),$("#replay-form").serialize(),(function(t){t?$("#submit-btn").parents(".modal").modal("hide"):$(".js-delete-btn").button("reset")}))}))}});