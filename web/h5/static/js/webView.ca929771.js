(window.webpackJsonp=window.webpackJsonp||[]).push([["webView"],{"07b4":function(t,e,i){"use strict";i("8e6e"),i("ac6a"),i("456d"),i("e7e5");var s=i("d399"),r=i("bd86"),n=i("3ce7"),a=i("2164"),o=i("2f62"),c=i("faa5");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){Object(r.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={name:"finish-dialog",mixins:[a.a],inject:["reload"],data:function(){return{show:!0,path:""}},props:{finishResult:{type:Object,default:function(){return{}}},courseId:{type:String,default:""}},computed:l(l({},Object(o.e)("course",{allTask:function(t){return t.allTask}})),{},{rate:function(){return this.finishResult?"".concat(parseInt(this.finishResult.completionRate),"%"):"0%"},title:function(){return this.finishResult?this.allTask[this.finishResult.result.courseTaskId].title:""}}),created:function(){this.path=this.$route.path},methods:l(l({},Object(o.d)("course",{setSourceType:c.y})),{},{goNextTask:function(){var t=this;if(!this.finishResult.nextTask)return Object(s.a)("没有下一课"),void(this.show=!1);var e={courseId:this.courseId,taskId:this.finishResult.nextTask.id};n.a.getCourseData({query:e}).then((function(e){t.toLearnTask(e)}))},toLearnTask:function(t){if("create"!==t.status){var e={id:t.id};this.$store.commit("course/".concat(c.h),{nextTask:e}),this.showTypeDetail(t),this.show=!1,this.setSourceType({sourceType:"img",taskId:t.id})}else Object(s.a)("课时创建中，敬请期待")},showTypeDetail:function(t){if("published"===t.status)switch(t.type){case"video":this.playVedio(t);break;case"audio":this.playAudio(t);break;case"text":case"ppt":case"doc":this.$router.push({name:"course_web",query:{courseId:this.courseId,taskId:t.id,type:t.type,backUrl:"/course/".concat(this.courseId)}}),this.reload();break;case"live":var e=!1;if(new Date>new Date(1e3*t.endTime)){if(t.activity&&"videoGenerated"===t.activity.replayStatus)return void("self"===t.mediaSource?this.setSourceType({sourceType:"video",taskId:t.id}):this.copyPcUrl(t.courseUrl));if(t.activity&&"ungenerated"===t.activity.replayStatus)return void Object(s.a)("暂无回放");e=!0}this.$router.push({name:"live",query:{courseId:this.courseId,taskId:t.id,type:t.type,title:t.title,replay:e}});break;case"testpaper":var i=t.activity.testpaperInfo.testpaperId;this.$router.push({name:"testpaperIntro",query:{testId:i,targetId:t.id}});break;case"homework":this.$router.push({name:"homeworkIntro",query:{courseId:this.courseId,taskId:t.id}});break;case"exercise":this.$router.push({name:"exerciseIntro",query:{courseId:this.courseId,taskId:t.id}});break;default:this.copyPcUrl(t.courseUrl)}else Object(s.a)("敬请期待")},playVedio:function(t){if("self"===t.mediaSource){var e="/course/".concat(this.courseId);this.$route.path===e?this.setSourceType({sourceType:"video",taskId:t.id}):this.$router.push({path:e,query:{sourceType:"video",taskId:t.id}})}else this.copyPcUrl(t.courseUrl)},playAudio:function(t){var e="/course/".concat(this.courseId);this.$route.path===e?this.setSourceType({sourceType:"audio",taskId:t.id}):this.$router.push({path:e,query:{sourceType:"audio",taskId:t.id}})},closeFinishDialog:function(){this.show=!1,this.$emit("closeFinishDialog")}})},d=i("a6c2"),p=Object(d.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-overlay",{attrs:{show:t.show,"z-index":9999}},[i("div",{staticClass:"finish-dialog "},[i("div",{staticClass:"finish-dialog-content clearfix"},[i("div",{staticClass:"finish-dialog-top"},[i("img",{staticClass:"finish-dialog-img",attrs:{src:"static/images/reportDialog.png"}}),i("div",{staticClass:"finish-dialog-top--text"},[t._v(t._s(t.$t("courseLearning.learningCompletion")))])]),i("div",{staticClass:"finish-dialog-close",on:{click:t.closeFinishDialog}},[i("i",{staticClass:"iconfont icon-guanbi"})]),i("div",{staticClass:"progress-bar"},[i("div",{staticClass:"progress-bar__content"},[i("div",{staticClass:"progress-bar__rate",style:{width:t.rate}})]),i("div",{staticClass:"progress-bar__text"},[t._v(t._s(t.rate))])]),i("p",{staticClass:"finish-dialog-text"},[t._v(t._s(t.$t("courseLearning.congratulationsOnCompletion")))]),[i("p",{staticClass:"text-overflow"},[t._v(t._s(t.title))]),i("div",{staticClass:"finish-dialog-btn",on:{click:t.goNextTask}},[t._v(t._s(t.$t("courseLearning.nextLesson")))])]],2)])])}),[],!1,null,null,null);e.a=p.exports},2164:function(t,e,i){"use strict";i("e17f");var s=i("2241");e.a={methods:{copyPcUrl:function(t){var e=this,i="移动端暂不支持此类课程学习。请移步至电脑「".concat(t,"」完成课程。");s.a.alert({title:"暂不支持",message:i,messageAlign:"left",confirmButtonText:"复制链接"}).then((function(){e.$copyText(t).then((function(t){}))}))}}}},"23f2":function(t,e,i){"use strict";i.r(e),i("8e6e"),i("ac6a"),i("456d"),i("6762"),i("2fdb"),i("e7e5");var s=i("d399"),r=(i("96cf"),i("3b8d")),n=i("bd86"),a=i("32e6"),o=i.n(a),c=i("3ce7"),u=i("2f62"),l=i("faa5"),h=i("c8a5"),d=i("07b4"),p=i("7c97");function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){Object(n.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var m={components:{finishDialog:d.a,OutFocusMask:p.a},mixins:[h.a],data:function(){return{finishCondition:void 0,enableFinish:!1,media:"",isPreview:this.$route.query.preview,finishResult:null,finishDialog:!1,courseId:null,taskId:null,type:null,player:null}},computed:v(v(v({},Object(u.e)(["cloudSdkCdn"])),Object(u.e)("course",{details:function(t){return t.details},joinStatus:function(t){return t.joinStatus}})),Object(u.e)({isLoading:function(t){return t.isLoading}})),created:function(){this.courseId=this.$route.query.courseId,this.taskId=this.$route.query.taskId,this.type=this.$route.query.type},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.initData();case 1:case"end":return e.stop()}}),e)})))()},methods:v(v(v({},Object(u.c)(["setCloudAddress"])),Object(u.d)({setNavbarTitle:l.v})),{},{initData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.joinStatus&&t.initReport(),t.enableFinish=!!parseInt(t.details.enableFinish),e.next=4,c.a.getMedia(t.getParams()).catch((function(t){return Object(s.a)(t.message),Promise.reject(t)}));case 4:i=e.sent,["ppt","doc"].includes(t.media)?t.initPlayer(i):t.$refs.text.innerHTML=i.media.content;case 6:case"end":return e.stop()}}),e)})))()},initReport:function(){this.initReportData(this.courseId,this.taskId,this.type),this.finishDialog=!1,this.getFinishCondition()},getFinishCondition:function(){var t=this;this.getCourseData(this.courseId,this.taskId).then((function(e){t.setNavbarTitle(e.title),t.finishCondition=e.activity&&e.activity.finishCondition}))},toToast:function(){var t=this.finishCondition;if(t){var e="";if("time"===t.type){var i=Math.ceil((60*t.data-this.learnedTime)/60);e=i>0?"\n剩余 ".concat(i," 分完成"):"\n恭喜！你已完成该任务"}this.$toast({message:"完成条件：".concat(t.text).concat(e),position:"bottom"})}},getParams:function(){var t=this.$route.query,e=t.courseId,i=t.taskId,s=t.type,r=!this.joinStatus&&this.isPreview;return this.media=s,r?{query:{courseId:e,taskId:i},params:{preview:1,version:"escloud"}}:{query:{courseId:e,taskId:i},params:{version:"escloud"}}},initPlayer:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function i(){var s,r;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(s=t.media,e.cloudSdkCdn){i.next=4;break}return i.next=4,e.setCloudAddress();case 4:r="//".concat(e.cloudSdkCdn,"/js-sdk-v2/sdk-v1.js?")+~~(Date.now()/1e3/60),o()(r,(function(i){if(i)throw i;var r=new window.QiQiuYun.Player({id:"player",resNo:s.resNo,token:s.token,source:{type:t.mediaType,args:s}});e.player=r,r.on("ready",(function(){})),r.on("pagechanged",(function(t){t.page===t.total&&e.finishCondition&&"end"===e.finishCondition.type&&e.reprtData({eventName:"finish"})}))}));case 6:case"end":return i.stop()}}),i)})))()},toLearned:function(){var t=this;this.reprtData({eventName:"finish"}).then((function(e){t.finishResult=e,t.finishDialog=!0}))},reloadPage:function(t){this.courseId=t.courseId,this.taskId=t.taskId,this.type=t.type,this.initData()}})},y=i("a6c2"),g=Object(y.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"web-view"},[i("out-focus-mask",{attrs:{type:t.outFocusMaskType,isShow:t.isShowOutFocusMask,reportType:t.reportType},on:{outFocusMask:t.outFocusMask}}),t.isLoading?i("e-loading"):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.media,expression:"media !== 'text'"}],attrs:{id:"player"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:"text"===t.media,expression:"media === 'text'"}],ref:"text",staticClass:"media-text"}),t.joinStatus?[t.isFinish?i("div",{staticClass:"web-view--btn web-view--activebtn"},[i("i",{staticClass:"iconfont icon-markdone"}),t._v("\n      学过了\n    ")]):t._e(),t.isFinish?t._e():i("div",[t.enableFinish?i("div",{staticClass:"web-view--btn",on:{click:t.toLearned}},[t._v("\n        学过了\n      ")]):t._e(),t.enableFinish?t._e():i("div",{staticClass:"web-view--btn",on:{click:t.toToast}},[t._v("\n        完成条件\n      ")])])]:t._e(),t.finishDialog?i("finishDialog",{attrs:{finishResult:t.finishResult,courseId:t.courseId},on:{reloadPage:t.reloadPage}}):t._e()],2)}),[],!1,null,null,null);e.default=g.exports},"32e6":function(t,e){function i(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function s(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,r){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof e&&(r=e,e={}),e=e||{},r=r||function(){},a.type=e.type||"text/javascript",a.charset=e.charset||"utf8",a.async=!("async"in e)||!!e.async,a.src=t,e.attrs&&function(t,e){for(var i in e)t.setAttribute(i,e[i])}(a,e.attrs),e.text&&(a.text=""+e.text),("onload"in a?i:s)(a,r),a.onload||i(a,r),n.appendChild(a)}},"7c97":function(t,e,i){"use strict";var s={props:{type:{type:String,default:""},isShow:{type:Boolean,default:!1},reportType:{type:String,default:""}},methods:{onKeepLearning:function(t){this.$emit("outFocusMask",t)}}},r=i("a6c2"),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("div",{staticClass:"out-focus-mask"},[i("div",{staticClass:"report-go-back",on:{click:function(e){return t.$router.go(-1)}}},[i("van-icon",{attrs:{name:"arrow-left",size:"25",color:"#43bc60"}})],1),"kick_previous"===t.type?[i("div",{staticClass:"content"},[t._m(0),i("van-button",{attrs:{color:"#43bc60",size:"small"},on:{click:function(e){return t.onKeepLearning("kick_previous")}}},[t._v("\n        继续学习\n      ")])],1)]:t._e(),"reject_current"===t.type?[t._m(1)]:t._e()],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips"},[e("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),e("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"tips"},[e("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),e("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])])}],!1,null,null,null);e.a=n.exports},c8a5:function(t,e,i){"use strict";i("6762"),i("2fdb");var s=i("3ce7"),r=i("faa5");e.a={data:function(){return{reportIntervalTime:null,reportLearnTime:null,reportFinishCondition:null,reportData:{courseId:null,taskId:null},reportResult:null,isFinish:!1,reportType:null,learnTime:0,isShowOutFocusMask:!1,outFocusMaskType:"",sign:"",record:{},absorbed:0,learnedTime:0}},beforeRouteLeave:function(t,e,i){this.sign.length>0&&localStorage.setItem("flowSign",this.sign),i()},beforeDestroy:function(){this.clearReportIntervalTime(),window.removeEventListener("beforeunload",this.onbeforeunloadFlowSign),this.toggleReportMaskHidden("remove")},methods:{initReportData:function(t,e,i){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.clearReportIntervalTime(),this.reportData={courseId:t,taskId:e},this.reportType=i,this.isFinish=!1,this.reportIntervalTime=null,this.reportLearnTime=null,this.reportResult=null,this.learnTime=0,this.reportFinishCondition=null,s&&this.initReportEvent(),this.onbeforeunload()},initReportEvent:function(){this.reprtData(),this.intervalReportData(),this.intervalReportLearnTime()},getCourseData:function(t,e){var i=this,r={courseId:t,taskId:e};return new Promise((function(t,e){s.a.getCourseData({query:r}).then((function(e){i.reportFinishCondition=e.activity.finishCondition,t(e)})).catch((function(t){e(t)}))}))},reprtData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eventName:"doing",ContinuousReport:!1,watchTime:null};if(null!==this.reportData.courseId&&null!==this.reportData.taskId&&(!this.isFinish||t.ContinuousReport))if(""===this.sign){var e={client:"h5"},i=localStorage.getItem("flowSign");i&&(e.lastSign=i,localStorage.removeItem("flowSign")),this.start(t,e)}else this.reportTaskEvent(t)},start:function(t,e){var i=this;s.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:"start"},data:e}).then((function(e){if(i.handleReportResult(e),e.learnControl.allowLearn)i.sign=e.record.flowSign,i.record=e.record,i.reportTaskEvent(t);else{var s=e.learnControl.denyReason;i.reportJudge(s)}}))},reportTaskEvent:function(t){var e=this;if(0!==this.sign.length){var i={client:"h5",sign:this.sign,duration:this.learnTime,status:this.absorbed};if(t.reActive&&(i.reActive=t.reActive),this.sourceType&&"video"===this.sourceType){var r=parseInt(this.nowWatchTime-this.lastWatchTime);this.lastWatchTime=this.nowWatchTime;var n={watchData:{duration:r}};i=Object.assign(i,n)}this.learnTime=0,s.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:t.eventName},data:i}).then((function(t){if(e.handleReportResult(t),e.record=t.record,e.absorbed=0,e.sign=t.record.flowSign,!t.learnControl.allowLearn){var i=t.learnControl.denyReason;e.reportJudge(i)}})).catch((function(t){e.clearReportIntervalTime()}))}},handleReportResult:function(t){this.reportResult=t,this.learnedTime=t.learnedTime,t.taskResult&&"finish"===t.taskResult.status?(this.isFinish=!0,this.$store.commit(r.z,"finish"),this.$store.commit("course/".concat(r.D),t.completionRate)):this.$store.commit(r.z,"start")},intervalReportLearnTime:function(){var t=this;this.reportLearnTime=setInterval((function(){t.checkoutTime(),t.learnTime++}),1e3)},intervalReportData:function(){var t=this,e=60*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*1e3;this.reportIntervalTime=setInterval((function(){t.reprtData({eventName:"doing",ContinuousReport:!0})}),e)},checkoutTime:function(){this.reportFinishCondition&&["time","watchTime"].includes(this.reportFinishCondition.type)&&parseInt(this.learnTime/60,10)>=parseInt(this.reportFinishCondition.data,10)&&this.reprtData({eventName:"finish",ContinuousReport:!0})},clearReportIntervalTime:function(){clearInterval(this.reportIntervalTime),clearInterval(this.reportLearnTime),this.reportIntervalTime=null,this.reportLearnTime=null},reportJudge:function(t){"kick_previous"===t?this.kickEachOther("kick_previous"):"reject_current"===t&&(this.clearReportIntervalTime(),this.kickEachOther("reject_current"))},outFocusMask:function(t){this.absorbed=1,this.isShowOutFocusMask=!1,!this.player||"video"!==this.reportType&&"audio"!==this.reportType||this.player.play(),this.toggleReportMaskHidden("remove"),this.reprtData({eventName:"doing",ContinuousReport:!0,reActive:1})},kickEachOther:function(t){if(this.absorbed=1,"testpaper"!==this.reportType&&"live"!==this.reportType&&"homework"!==this.reportType||"kick_previous"!==t){if(this.isShowOutFocusMask=!0,this.outFocusMaskType=t,"video"===this.reportType||"audio"===this.reportType){if(this.player&&this.player.destory&&"reject_current"===t)return void this.player.destory();this.player&&this.player.pause&&this.player.pause()}this.toggleReportMaskHidden("add")}},ineffectiveLearning:function(t){this.isShowOutFocusMask||(this.absorbed=0,this.isShowOutFocusMask=!0,this.outFocusMaskType=t,this.player&&"video"===this.reportType&&this.player.pause(),this.reprtData({eventName:"doing",ContinuousReport:!0}))},toggleReportMaskHidden:function(t){"video"!==this.reportType&&"audio"!==this.reportType&&("add"===t?document.getElementsByTagName("body")[0].classList.add("report-mask-hidden"):"remove"===t&&document.getElementsByTagName("body")[0].classList.remove("report-mask-hidden"))},initVisibilitychange:function(){document.addEventListener("visibilitychange",this.visibilityState)},visibilityState:function(){"video"===this.reportType&&("hidden"===document.visibilityState?this.ineffectiveLearning("ineffective_learning"):"visible"===document.visibilityState&&this.player.pause())},onbeforeunload:function(){window.addEventListener("beforeunload",this.onbeforeunloadFlowSign)},onbeforeunloadFlowSign:function(){this.sign.length>0&&localStorage.setItem("flowSign",this.sign)}}}}}]);