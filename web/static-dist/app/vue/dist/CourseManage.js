(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{1285:function(e,t,a){"use strict";a.r(t);var s=a(23),r=a.n(s),n=a(34),i=a.n(n),u=a(493),l={name:"MultiClassCourseManage",components:{AsideLayout:a(1298).a},data:function(){return{current:["class_info"],id:this.$route.params.id,multiClass:{}}},befeoreRouteUpdate:function(e,t,a){this.id=e.params.id,a()},created:function(){this.current=[this.$route.meta.current],this.getMultiClass()},methods:{getMultiClass:function(){var e=this;return i()(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.i.get(e.id);case 2:e.multiClass=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},m=(a(1362),a(31)),o=Object(m.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside-layout",{staticClass:"course-manage",attrs:{breadcrumbs:[{name:"班课",pathName:"MultiClass"},{name:e.multiClass.title}]}},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"16px"}},[a("a-menu",{staticClass:"manage-menu pull-left",attrs:{mode:"horizontal"},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}},[a("a-menu-item",{key:"class_info",staticClass:"manage-menu-item"},[a("router-link",{attrs:{to:{name:"MultiClassCourseManage"}}},[e._v("课时管理")])],1),e._v(" "),a("a-menu-item",{key:"student_manage",staticClass:"manage-menu-item"},[a("router-link",{attrs:{to:{name:"MultiClassStudentManage"}}},[e._v("学员管理")])],1),e._v(" "),a("a-menu-item",{key:"homework_review",staticClass:"manage-menu-item"},[e.isPermission("course_homework_review")||e.isPermission("course_exam_review")?a("router-link",{attrs:{to:{name:"MultiClassHomewordReview"}}},[e._v("作业批阅")]):e._e()],1),e._v(" "),a("a-menu-item",{key:"data_preview",staticClass:"manage-menu-item manage-menu-item--space"},[e.isPermission("course_statistics_view")?a("router-link",{attrs:{to:{name:"MultiClassDataPreview"}}},[e._v("数据预览")]):e._e()],1)],1),e._v(" "),e.multiClass.course?a("a-menu",{staticClass:"manage-menu manage-menu-blank pull-right",attrs:{selectable:!1,mode:"horizontal"}},[a("a-menu-item",{staticClass:"manage-menu-item"},[e.isPermission("course_announcement_manage")?a("a",{attrs:{href:"/announcement/course/"+e.multiClass.course.id+"/list",target:"_blank"}},[e._v("公告管理")]):e._e()]),e._v(" "),a("a-menu-item",{staticClass:"manage-menu-item"},[e.isPermission("course_replay_manage")?a("a",{attrs:{href:"/course_set/"+e.multiClass.course.courseSetId+"/manage/course/"+e.multiClass.course.id+"/replay",target:"_blank"}},[e._v("录播管理")]):e._e()]),e._v(" "),a("a-menu-item",{staticClass:"manage-menu-item manage-menu-item--space"},[e.isPermission("course_order_manage")?a("a",{attrs:{href:"/course_set/"+e.multiClass.course.courseSetId+"/manage/course/"+e.multiClass.course.id+"/orders",target:"_blank"}},[e._v("订单管理")]):e._e()])],1):e._e()],1),e._v(" "),a("router-view")],1)}),[],!1,null,null,null);t.default=o.exports},1296:function(e,t,a){},1298:function(e,t,a){"use strict";var s={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""}}},r=(a(1299),a(31)),n=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside-layout"},[a("div",{staticClass:"aside-layout-header"},[a("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},e._l(e.breadcrumbs,(function(t,s){return a("a-breadcrumb-item",{key:s},[t.href?[a("a",{attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.name))])]:t.pathName?[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return e.$router.push({name:t.pathName})}}},[e._v(e._s(t.name))])]:[e._v("\n          "+e._s(t.name)+"\n        ")]],2)})),1),e._v(" "),e.headerTip?a("a-popover",{attrs:{placement:"bottomLeft"}},[a("template",{slot:"content"},[a("div",{staticClass:"aside-header-tip",domProps:{innerHTML:e._s(e.headerTip)}})]),e._v(" "),a("span",{staticClass:"aside-header-title-icon"},[a("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),a("span",{staticClass:"icon-circle"},[e._v(e._s(e.headerTitle))])],1)],2):e._e()],1),e._v(" "),a("div",{staticClass:"aside-layout-main"},[e._t("default")],2)])}),[],!1,null,null,null);t.a=n.exports},1299:function(e,t,a){"use strict";var s=a(1296);a.n(s).a},1326:function(e,t,a){},1362:function(e,t,a){"use strict";var s=a(1326);a.n(s).a}}]);