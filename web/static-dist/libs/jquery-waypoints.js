/*! For license information please see jquery-waypoints.js.LICENSE.txt */
!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static-dist/",n(n.s=696)}({696:function(t,e,n){t.exports=n(697)},697:function(t,e){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){var t,e=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},n=[].slice;t=window,function(t,o){var r,i,l,c,s,u,f,a,h,d,p,y,v,w,b,g;r=t(o),a=e.call(o,"ontouchstart")>=0,c={horizontal:{},vertical:{}},s=1,f={},u="waypoints-context-id",p="resize.waypoints",y="scroll.waypoints",v=1,w="waypoints-waypoint-ids",b="waypoint",g="waypoints",i=function(){function e(e){var n=this;this.$element=e,this.element=e[0],this.didResize=!1,this.didScroll=!1,this.id="context"+s++,this.oldScroll={x:e.scrollLeft(),y:e.scrollTop()},this.waypoints={horizontal:{},vertical:{}},this.element[u]=this.id,f[this.id]=this,e.bind(y,(function(){var e;if(!n.didScroll&&!a)return n.didScroll=!0,e=function(){return n.doScroll(),n.didScroll=!1},o.setTimeout(e,t[g].settings.scrollThrottle)})),e.bind(p,(function(){var e;if(!n.didResize)return n.didResize=!0,e=function(){return t[g]("refresh"),n.didResize=!1},o.setTimeout(e,t[g].settings.resizeThrottle)}))}return e.prototype.doScroll=function(){var e,n=this;return e={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!a||e.vertical.oldScroll&&e.vertical.newScroll||t[g]("refresh"),t.each(e,(function(e,o){var r,i,l;return l=[],i=o.newScroll>o.oldScroll,r=i?o.forward:o.backward,t.each(n.waypoints[e],(function(t,e){var n,r;return o.oldScroll<(n=e.offset)&&n<=o.newScroll||o.newScroll<(r=e.offset)&&r<=o.oldScroll?l.push(e):void 0})),l.sort((function(t,e){return t.offset-e.offset})),i||l.reverse(),t.each(l,(function(t,e){if(e.options.continuous||t===l.length-1)return e.trigger([r])}))})),this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.refresh=function(){var e,n,o,r=this;return o=t.isWindow(this.element),n=this.$element.offset(),this.doScroll(),e={horizontal:{contextOffset:o?0:n.left,contextScroll:o?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:o?0:n.top,contextScroll:o?0:this.oldScroll.y,contextDimension:o?t[g]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},t.each(e,(function(e,n){return t.each(r.waypoints[e],(function(e,o){var r,i,l,c,s;if(r=o.options.offset,l=o.offset,i=t.isWindow(o.element)?0:o.$element.offset()[n.offsetProp],t.isFunction(r)?r=r.apply(o.element):"string"==typeof r&&(r=parseFloat(r),o.options.offset.indexOf("%")>-1&&(r=Math.ceil(n.contextDimension*r/100))),o.offset=i-n.contextOffset+n.contextScroll-r,(!o.options.onlyOnScroll||null==l)&&o.enabled)return null!==l&&l<(c=n.oldScroll)&&c<=o.offset?o.trigger([n.backward]):null!==l&&l>(s=n.oldScroll)&&s>=o.offset||null===l&&n.oldScroll>=o.offset?o.trigger([n.forward]):void 0}))}))},e.prototype.checkEmpty=function(){if(t.isEmptyObject(this.waypoints.horizontal)&&t.isEmptyObject(this.waypoints.vertical))return this.$element.unbind([p,y].join(" ")),delete f[this.id]},e}(),l=function(){function e(e,n,o){var r,i;"bottom-in-view"===o.offset&&(o.offset=function(){var e;return e=t[g]("viewportHeight"),t.isWindow(n.element)||(e=n.$element.height()),e-t(this).outerHeight()}),this.$element=e,this.element=e[0],this.axis=o.horizontal?"horizontal":"vertical",this.callback=o.handler,this.context=n,this.enabled=o.enabled,this.id="waypoints"+v++,this.offset=null,this.options=o,n.waypoints[this.axis][this.id]=this,c[this.axis][this.id]=this,(r=null!=(i=this.element[w])?i:[]).push(this.id),this.element[w]=r}return e.prototype.trigger=function(t){if(this.enabled)return null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0},e.prototype.disable=function(){return this.enabled=!1},e.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},e.prototype.destroy=function(){return delete c[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},e.getWaypointsByElement=function(e){var n,o;return(o=e[w])?(n=t.extend({},c.horizontal,c.vertical),t.map(o,(function(t){return n[t]}))):[]},e}(),d={init:function(e,n){return null==(n=t.extend({},t.fn[b].defaults,n)).handler&&(n.handler=e),this.each((function(){var e,o,r,c;return e=t(this),r=null!=(c=n.context)?c:t.fn[b].defaults.context,t.isWindow(r)||(r=e.closest(r)),r=t(r),(o=f[r[0][u]])||(o=new i(r)),new l(e,o,n)})),t[g]("refresh"),this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,(function(t,e,n){if(e>0)return t.push(n[e-1])}))},next:function(t,e){return d._traverse.call(this,t,e,(function(t,e,n){if(e<n.length-1)return t.push(n[e+1])}))},_traverse:function(e,n,r){var i,l;return null==e&&(e="vertical"),null==n&&(n=o),l=h.aggregate(n),i=[],this.each((function(){var n;return n=t.inArray(this,l[e]),r(i,n,l[e])})),this.pushStack(i)},_invoke:function(e){return this.each((function(){var n;return n=l.getWaypointsByElement(this),t.each(n,(function(t,n){return n[e](),!0}))})),this}},t.fn[b]=function(){var e,o;return o=arguments[0],e=2<=arguments.length?n.call(arguments,1):[],d[o]?d[o].apply(this,e):t.isFunction(o)?d.init.apply(this,arguments):t.isPlainObject(o)?d.init.apply(this,[null,o]):o?t.error("The "+o+" method does not exist in jQuery Waypoints."):t.error("jQuery Waypoints needs a callback function or handler option.")},t.fn[b].defaults={context:o,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},h={refresh:function(){return t.each(f,(function(t,e){return e.refresh()}))},viewportHeight:function(){var t;return null!=(t=o.innerHeight)?t:r.height()},aggregate:function(e){var n,o,r;return n=c,e&&(n=null!=(r=f[t(e)[0][u]])?r.waypoints:void 0),n?(o={horizontal:[],vertical:[]},t.each(o,(function(e,r){return t.each(n[e],(function(t,e){return r.push(e)})),r.sort((function(t,e){return t.offset-e.offset})),o[e]=t.map(r,(function(t){return t.element})),o[e]=t.unique(o[e])})),o):[]},above:function(t){return null==t&&(t=o),h._filter(t,"vertical",(function(t,e){return e.offset<=t.oldScroll.y}))},below:function(t){return null==t&&(t=o),h._filter(t,"vertical",(function(t,e){return e.offset>t.oldScroll.y}))},left:function(t){return null==t&&(t=o),h._filter(t,"horizontal",(function(t,e){return e.offset<=t.oldScroll.x}))},right:function(t){return null==t&&(t=o),h._filter(t,"horizontal",(function(t,e){return e.offset>t.oldScroll.x}))},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(e){var n;return n=t.extend({},c.vertical,c.horizontal),t.each(n,(function(t,n){return n[e](),!0}))},_filter:function(e,n,o){var r,i;return(r=f[t(e)[0][u]])?(i=[],t.each(r.waypoints[n],(function(t,e){if(o(r,e))return i.push(e)})),i.sort((function(t,e){return t.offset-e.offset})),t.map(i,(function(t){return t.element}))):[]}},t[g]=function(){var t,e;return e=arguments[0],t=2<=arguments.length?n.call(arguments,1):[],h[e]?h[e].apply(null,t):h.aggregate.call(null,e)},t[g].settings={resizeThrottle:100,scrollThrottle:30},r.on("load.waypoints",(function(){return t[g]("refresh")}))}(t.jQuery,t)}).call(this)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}});