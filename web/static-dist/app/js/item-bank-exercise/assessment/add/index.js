!function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],u=0,h=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);h.length;)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={233:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;r.push([872,0]),n()}({199:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(47),i=n.n(a),r=n(2),s=n.n(r),o=n(3),c=n.n(o),l=function(){function e(t){s()(this,e),this.$elem=$(t),this.init(),this.selectMap={}}return c()(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.$elem.on("click",".js-checkbox",(function(t){e.toggleItem(t),e.changeSelectedNum()})),this.$elem.on("click",".js-select-all",(function(t){$(t.target).prop("checked")?(e.$elem.find(".js-select-all").prop("checked",!0),e.addItems()):(e.$elem.find(".js-select-all").prop("checked",!1),e.removeItems()),e.changeSelectedNum()}))}},{key:"setOpts",value:function(e){var t=e.addCb,n=void 0===t?function(){}:t,a=e.removeCb,i=void 0===a?function(){}:a;this.addCb=n,this.removeCb=i}},{key:"getItem",value:function(e){return{id:e.data("id")}}},{key:"removeItem",value:function(e){var t=this.$elem.find('input[data-id="'.concat(e.id,'"]'));t.length&&t.prop("checked",!1),this.selectMap[e.id]&&delete this.selectMap[e.id]}},{key:"addItem",value:function(e){var t=$(e);t.prop("checked",!0),this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0)}},{key:"addItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){$(n).prop("checked")||(e.addItem(n),e.addCb&&e.addCb(n))}))}},{key:"removeItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){if($(n).prop("checked")){var a=e.getItem($(n));e.removeItem(a),e.removeCb&&e.removeCb(n)}}))}},{key:"toggleItem",value:function(e){var t=$(e.currentTarget);t.prop("checked")?this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0,this.addCb&&this.addCb(t)):this.selectMap[t.data("id")]&&(delete this.selectMap[t.data("id")],this.removeCb&&this.removeCb(t))}},{key:"resetItems",value:function(){this.selectMap={}}},{key:"getObjectLength",value:function(){return i()(this.selectMap).length}},{key:"toJson",value:function(){return i()(this.selectMap)}},{key:"updateTable",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){e.selectMap[$(n).data("id")]&&$(n).prop("checked",!0)})),this.changeSelectedNum()}},{key:"changeSelectedNum",value:function(){this.$elem.find(".js-select-number").length>0&&this.$elem.find(".js-select-number").text(this.getObjectLength())}}]),e}()},872:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),r=n(3),s=n.n(r),o=n(199);new(function(){function e(){i()(this,e),this.table=$(".js-testpaper-html"),this.selector=new o.a(this.table),this.renderUrl=$("#renderUrl").data("url"),this.init()}return s()(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.table.on("click","#batch-add",(function(t){e.onBatchAdd(t)})),this.table.on("click",".pagination li",(function(t){e.onClickPagination(t)}))}},{key:"onBatchAdd",value:function(e){var t=$(e.currentTarget),n=t.data("name"),a=this.selector.toJson();0!==a.length?cd.confirm({title:Translator.trans("site.data.add_title_hint",{name:n}),content:Translator.trans("site.data.add_check_name_hint",{name:n}),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(t.data("url"),{ids:a},(function(e){e?(cd.message({type:"success",message:Translator.trans("site.add_success_hint")}),window.location.reload()):cd.message({type:"danger",message:Translator.trans("site.add_fail_hint")})})).error((function(e){cd.message({type:"danger",message:Translator.trans("site.add_fail_hint")})}))})):cd.message({type:"danger",message:Translator.trans("site.data.uncheck_name_hint",{name:n})})}},{key:"onClickPagination",value:function(e){var t=$(e.currentTarget);this.table.find(".js-page").val(t.data("page")),this.renderTable(!0),e.preventDefault()}},{key:"renderTable",value:function(e){e||this._resetPage();var t=this,n=this.table.find('[data-role="search-conditions"]').serialize()+"&page="+this.table.find(".js-page").val();this._loading(),$.ajax({type:"GET",url:this.renderUrl,data:n}).done((function(e){t.table.html(e),t.table.updateTable()})).fail((function(){t._loaded_error()}))}},{key:"_resetPage",value:function(){this.table.find(".js-page").val(1)}},{key:"_loading",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading")+"</div>";this.table.html(e)}},{key:"_loaded_error",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading_error")+"</div>";this.table.html(e)}}]),e}())}});