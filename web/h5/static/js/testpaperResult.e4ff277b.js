(window.webpackJsonp=window.webpackJsonp||[]).push([["testpaperResult"],{"7c97":function(t,e,i){"use strict";var r={props:{type:{type:String,default:""},isShow:{type:Boolean,default:!1},reportType:{type:String,default:""}},methods:{onKeepLearning:function(t){this.$emit("outFocusMask",t)}}},s=i("a6c2"),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("div",{staticClass:"out-focus-mask"},[i("div",{staticClass:"report-go-back",on:{click:function(e){return t.$router.go(-1)}}},[i("van-icon",{attrs:{name:"arrow-left",size:"25",color:"#43bc60"}})],1),"kick_previous"===t.type?[i("div",{staticClass:"content"},[t._m(0),i("van-button",{attrs:{color:"#43bc60",size:"small"},on:{click:function(e){return t.onKeepLearning("kick_previous")}}},[t._v("\n        继续学习\n      ")])],1)]:t._e(),"reject_current"===t.type?[t._m(1)]:t._e()],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips"},[e("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),e("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"tips"},[e("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),e("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])])}],!1,null,null,null);e.a=a.exports},a730:function(t,e,i){"use strict";i.r(e),i("8e6e"),i("456d"),i("e17f");var r=i("2241"),s=(i("e7e5"),i("d399")),a=(i("a481"),i("c5f6"),i("ac6a"),i("96cf"),i("3b8d")),n=i("bd86"),o=i("3ce7"),u=i("2f62"),c=i("faa5"),l=i("b7cf"),d=i("c8a5"),h=i("0d25");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){Object(n.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={name:"TestpaperResult",components:{OutFocusMask:i("7c97").a},mixins:[l.a,d.a],data:function(){return{enable_facein:"",isReadOver:!1,resultId:null,again:0,result:{},calHeight:null,subjectList:{},question_type_seq:[],targetId:null,doTimes:null,redoInterval:null,remainTime:null,timeMeter:null,testpaperTitle:null,obj:{single_choice:"courseLearning.singleChoice",choice:"courseLearning.choice",essay:"courseLearning.essay",uncertain_choice:"courseLearning.uncertainChoice",determine:"courseLearning.determine",fill:"courseLearning.fill",material:"courseLearning.material"},color:{right:"green",none:"brown",wrong:"orange",partRight:"orange",noAnswer:"gray"},resultShow:!1}},computed:m(m({},Object(u.e)({isLoading:function(t){return t.isLoading},user:function(t){return t.user},selectedPlanId:function(t){return t.course.selectedPlanId}})),{},{usedTime:function(){var t=parseInt(this.result.usedTime)||0;return t<=60?1:Math.round(t/60)}}),watch:{doTimes:function(){this.calSubjectHeight()}},mounted:function(){this.initReport(),this.getTestpaperResult()},beforeRouteEnter:function(t,e,i){document.getElementById("app").style.background="#f6f6f6",i()},beforeRouteLeave:function(t,e,i){document.getElementById("app").style.background="",i()},beforeDestroy:function(){this.clearTime()},methods:m(m(m({},Object(u.d)({setNavbarTitle:c.v})),Object(u.c)("course",["handExamdo"])),{},{getTestpaperResult:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.testpaperResult({query:{resultId:t.$route.query.resultId}}).then((function(e){t.result=e.testpaperResult,t.question_type_seq=e.testpaper.metas.question_type_seq,t.isReadOver="finished"===t.result.status,t.resultShow=e.resultShow,t.getSubjectList(e.items),t.calSubjectHeight(),t.reprtData({eventName:"doing"}),t.canDoing(t.result,t.user.id).then((function(){t.startTestpaper("KeepDoing")})).catch((function(e){var i=e.answer,r=e.endTime;t.submitExam(i,r)}))}));case 2:t.getInfo();case 3:case"end":return e.stop()}}),e)})))()},initReport:function(){this.initReportData(this.selectedPlanId,this.$route.query.targetId,"testpaper")},judgeTime:function(){var t=this,e=this.redoInterval,i=0;if(0!=e){var r=60*parseInt(e)*1e3,s=(new Date).getTime(),a=1e3*parseInt(this.result.checkedTime)+r;this.again=s>=a,this.again||(this.timeMeter=setInterval((function(){i=i++,t.remainTime=Object(h.getdateTimeDown)(a,i),""==t.remainTime&&(t.again=!0,t.clearTime())}),1e3))}else this.again=!0},getSubjectList:function(t){var e=this,i=function(i){var r=[];t[i].forEach((function(t){"material"===i?t.subs.forEach((function(t){e.getStatus(t,r)})):e.getStatus(t,r)})),e.subjectList[i]=r};for(var r in t)i(r)},calSubjectHeight:function(){var t=this;this.$nextTick((function(){var e=t.$refs.data.offsetHeight+t.$refs.tag.offsetHeight+46,i=document.documentElement.clientHeight-e-(t.$refs.footer.offsetHeight||0);t.calHeight="".concat(i,"px")}))},getStatus:function(t,e){var i={};i.seq=t.seq,t.testResult?i.status=t.testResult.status:i.status="noAnswer",e.push(i)},submitExam:function(t,e){var i=this;e=e||(new Date).getTime();var r={answer:t,resultId:this.result.id,userId:this.user.id,beginTime:Number(this.result.beginTime),endTime:e};this.handExamdo(r).then((function(t){i.$router.replace({name:"testpaperResult",query:{resultId:i.$route.query.resultId,testId:i.$route.query.testId,targetId:i.$route.query.targetId}})})).catch((function(t){s.a.fail(t.message)}))},clearTime:function(){clearInterval(this.timeMeter),this.timeMeter=null},startTestpaper:function(){1===this.enable_facein?r.a.alert({title:"",confirmButtonText:"知道了",message:"本场考试已开启云监考，暂不支持在移动端答题，请前往PC端进行答题。"}).then((function(){})):this.goDoTestpaper()},goDoTestpaper:function(){this.$router.replace({name:"testpaperDo",query:{testId:this.result.testId,targetId:this.targetId,title:this.testpaperTitle,action:"redo"},params:{KeepDoing:!0}})},getInfo:function(){var t=this;this.testId=this.$route.query.testId,this.targetId=this.$route.query.targetId,o.a.testpaperIntro({params:{targetId:this.targetId,targetType:"task"},query:{testId:this.testId}}).then((function(e){t.testpaperTitle=e.task.title,t.setNavbarTitle(e.task.title),t.doTimes=Number(e.task.activity.testpaperInfo.doTimes),t.redoInterval=Number(e.task.activity.testpaperInfo.redoInterval),t.enable_facein=e.task.enable_facein,t.judgeTime()}))},viewAnalysis:function(){this.$router.push({name:"testpaperAnalysis",query:{resultId:this.$route.query.resultId,title:this.testpaperTitle,targetId:this.$route.query.targetId}})}})},v=i("a6c2"),g=Object(v.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"testResults"},[i("out-focus-mask",{attrs:{type:t.outFocusMaskType,isShow:t.isShowOutFocusMask,reportType:t.reportType},on:{outFocusMask:t.outFocusMask}}),t.isLoading?i("e-loading"):t._e(),t.result?i("div",{ref:"data",staticClass:"result-data"},[i("div",{staticClass:"result-data__item"},[t._v("\n      "+t._s(t.$t("courseLearning.thisScore"))+"\n      "),t.isReadOver?i("div",{staticClass:"result-data__bottom data-number-orange data-medium"},[i("span",{staticClass:"data-number"},[t._v(t._s(t.result.score))]),t._v(t._s(t.$t("courseLearning.branch"))+"\n      ")]):i("div",{staticClass:"result-data__bottom data-text-blue"},[t._v(t._s(t.$t("courseLearning.toBeReviewed")))])]),i("div",{staticClass:"result-data__item"},[t._v("\n      "+t._s(t.$t("courseLearning.correctRate"))+"\n      "),t.isReadOver?i("div",{staticClass:"result-data__bottom data-number-green data-medium"},[i("span",{staticClass:"data-number"},[t._v(t._s(t.result.rightRate))]),t._v("%\n      ")]):i("div",{staticClass:"result-data__bottom data-text-blue"},[t._v(t._s(t.$t("courseLearning.toBeReviewed")))])]),i("div",{staticClass:"result-data__item"},[t._v("\n      "+t._s(t.$t("courseLearning.timeSpentOnTheQuestion"))+"\n      "),i("div",{staticClass:"result-data__bottom data-number-gray data-medium"},[i("span",{staticClass:"data-number"},[t._v(t._s(t.usedTime))]),t._v(t._s(t.$t("courseLearning.minutes"))+"\n      ")])])]):t._e(),i("div",{ref:"tag",staticClass:"result-tag"},[i("div",{staticClass:"result-tag-item clearfix"},[i("div",{staticClass:"result-tag-item__circle circle-green"}),t._v("\n      "+t._s(t.$t("courseLearning.right"))+"\n    ")]),i("div",{staticClass:"result-tag-item clearfix"},[i("div",{staticClass:"result-tag-item__circle circle-orange"}),t._v("\n      "+t._s(t.$t("courseLearning.wrong"))+"\n    ")]),i("div",{staticClass:"result-tag-item clearfix"},[i("div",{staticClass:"result-tag-item__circle circle-gray"}),t._v("\n      "+t._s(t.$t("courseLearning.unanswered"))+"\n    ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isReadOver,expression:"!isReadOver"}],staticClass:"result-tag-item clearfix"},[i("div",{staticClass:"result-tag-item__circle circle-brown"}),t._v("\n      "+t._s(t.$t("courseLearning.toBeReviewed"))+"\n    ")])]),i("div",{staticClass:"result-subject",style:{height:t.calHeight}},[t._l(t.question_type_seq,(function(e,r){return i("van-panel",{key:r,staticClass:"result-panel",attrs:{title:t.$t(t.obj[e])}},[i("ul",{staticClass:"result-list"},t._l(t.subjectList[e],(function(e,r){return i("li",{key:r,class:["result-list__item testpaper-number","circle-"+t.color[e.status]]},[t._v("\n          "+t._s(e.seq)+"\n        ")])})),0)])})),i("div",{ref:"footer",staticClass:"result-footer"},[t.resultShow?i("van-button",{staticClass:"result-footer__btn",style:{marginRight:t.isReadOver&&!t.doTimes?"2vw":0},attrs:{type:"primary"},on:{click:function(e){return t.viewAnalysis()}}},[t._v(t._s(t.$t("courseLearning.viewParsed")))]):t._e(),t.again&&t.isReadOver&&0==t.doTimes?i("van-button",{staticClass:"result-footer__btn",attrs:{type:"primary"},on:{click:function(e){return t.startTestpaper()}}},[t._v(t._s(t.$t("courseLearning.takeTheTestAgain")))]):t._e(),!t.again&&t.remainTime&&t.isReadOver&&0==t.doTimes?i("van-button",{staticClass:"result-footer__btn",staticStyle:{"line-height":"21px"},attrs:{type:"primary",disabled:""}},[t._v(t._s(t.$t("courseLearning.takeTheTestAgainAfter",{time:t.remainTime})))]):t._e()],1)],2)],1)}),[],!1,null,null,null);e.default=g.exports},b7cf:function(t,e,i){"use strict";i("c5f6"),i("e17f");var r=i("2241");i("456d"),i("ac6a"),e.a={methods:{canDoing:function(t,e){return new Promise((function(i,s){if(t&&"doing"===t.status){var a="".concat(e,"-").concat(t.id),n=JSON.parse(localStorage.getItem(a));n=n?Object.keys(n).forEach((function(t){n[t]=n[t].filter((function(t){return""!==t}))})):{},r.a.confirm({title:"提示",cancelButtonText:"放弃考试",confirmButtonText:"继续考试",message:"您有未完成的考试，是否继续？"}).then((function(){if(Number(t.limitedTime)>0){var e=Math.ceil(((new Date).getTime()-1e3*t.beginTime)/1e3/60);if(Number(e)>Number(t.limitedTime)){var r=Number(1e3*t.beginTime)+Number(60*t.limitedTime*1e3);return void s({answer:n,endTime:r})}}i()})).catch((function(){s({answer:n,endTime:null})}))}}))}}}},c8a5:function(t,e,i){"use strict";i("6762"),i("2fdb");var r=i("3ce7"),s=i("faa5");e.a={data:function(){return{reportIntervalTime:null,reportLearnTime:null,reportFinishCondition:null,reportData:{courseId:null,taskId:null},reportResult:null,isFinish:!1,reportType:null,learnTime:0,isShowOutFocusMask:!1,outFocusMaskType:"",sign:"",record:{},absorbed:0,learnedTime:0}},beforeRouteLeave:function(t,e,i){this.sign.length>0&&localStorage.setItem("flowSign",this.sign),i()},beforeDestroy:function(){this.clearReportIntervalTime(),window.removeEventListener("beforeunload",this.onbeforeunloadFlowSign),this.toggleReportMaskHidden("remove")},methods:{initReportData:function(t,e,i){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.clearReportIntervalTime(),this.reportData={courseId:t,taskId:e},this.reportType=i,this.isFinish=!1,this.reportIntervalTime=null,this.reportLearnTime=null,this.reportResult=null,this.learnTime=0,this.reportFinishCondition=null,r&&this.initReportEvent(),this.onbeforeunload()},initReportEvent:function(){this.reprtData(),this.intervalReportData(),this.intervalReportLearnTime()},getCourseData:function(t,e){var i=this,s={courseId:t,taskId:e};return new Promise((function(t,e){r.a.getCourseData({query:s}).then((function(e){i.reportFinishCondition=e.activity.finishCondition,t(e)})).catch((function(t){e(t)}))}))},reprtData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eventName:"doing",ContinuousReport:!1,watchTime:null};if(null!==this.reportData.courseId&&null!==this.reportData.taskId&&(!this.isFinish||t.ContinuousReport))if(""===this.sign){var e={client:"h5"},i=localStorage.getItem("flowSign");i&&(e.lastSign=i,localStorage.removeItem("flowSign")),this.start(t,e)}else this.reportTaskEvent(t)},start:function(t,e){var i=this;r.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:"start"},data:e}).then((function(e){if(i.handleReportResult(e),e.learnControl.allowLearn)i.sign=e.record.flowSign,i.record=e.record,i.reportTaskEvent(t);else{var r=e.learnControl.denyReason;i.reportJudge(r)}}))},reportTaskEvent:function(t){var e=this;if(0!==this.sign.length){var i={client:"h5",sign:this.sign,duration:this.learnTime,status:this.absorbed};if(t.reActive&&(i.reActive=t.reActive),this.sourceType&&"video"===this.sourceType){var s=parseInt(this.nowWatchTime-this.lastWatchTime);this.lastWatchTime=this.nowWatchTime;var a={watchData:{duration:s}};i=Object.assign(i,a)}this.learnTime=0,r.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:t.eventName},data:i}).then((function(t){if(e.handleReportResult(t),e.record=t.record,e.absorbed=0,e.sign=t.record.flowSign,!t.learnControl.allowLearn){var i=t.learnControl.denyReason;e.reportJudge(i)}})).catch((function(t){e.clearReportIntervalTime()}))}},handleReportResult:function(t){this.reportResult=t,this.learnedTime=t.learnedTime,t.taskResult&&"finish"===t.taskResult.status?(this.isFinish=!0,this.$store.commit(s.z,"finish"),this.$store.commit("course/".concat(s.D),t.completionRate)):this.$store.commit(s.z,"start")},intervalReportLearnTime:function(){var t=this;this.reportLearnTime=setInterval((function(){t.checkoutTime(),t.learnTime++}),1e3)},intervalReportData:function(){var t=this,e=60*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*1e3;this.reportIntervalTime=setInterval((function(){t.reprtData({eventName:"doing",ContinuousReport:!0})}),e)},checkoutTime:function(){this.reportFinishCondition&&["time","watchTime"].includes(this.reportFinishCondition.type)&&parseInt(this.learnTime/60,10)>=parseInt(this.reportFinishCondition.data,10)&&this.reprtData({eventName:"finish",ContinuousReport:!0})},clearReportIntervalTime:function(){clearInterval(this.reportIntervalTime),clearInterval(this.reportLearnTime),this.reportIntervalTime=null,this.reportLearnTime=null},reportJudge:function(t){"kick_previous"===t?this.kickEachOther("kick_previous"):"reject_current"===t&&(this.clearReportIntervalTime(),this.kickEachOther("reject_current"))},outFocusMask:function(t){this.absorbed=1,this.isShowOutFocusMask=!1,!this.player||"video"!==this.reportType&&"audio"!==this.reportType||this.player.play(),this.toggleReportMaskHidden("remove"),this.reprtData({eventName:"doing",ContinuousReport:!0,reActive:1})},kickEachOther:function(t){if(this.absorbed=1,"testpaper"!==this.reportType&&"live"!==this.reportType&&"homework"!==this.reportType||"kick_previous"!==t){if(this.isShowOutFocusMask=!0,this.outFocusMaskType=t,"video"===this.reportType||"audio"===this.reportType){if(this.player&&this.player.destory&&"reject_current"===t)return void this.player.destory();this.player&&this.player.pause&&this.player.pause()}this.toggleReportMaskHidden("add")}},ineffectiveLearning:function(t){this.isShowOutFocusMask||(this.absorbed=0,this.isShowOutFocusMask=!0,this.outFocusMaskType=t,this.player&&"video"===this.reportType&&this.player.pause(),this.reprtData({eventName:"doing",ContinuousReport:!0}))},toggleReportMaskHidden:function(t){"video"!==this.reportType&&"audio"!==this.reportType&&("add"===t?document.getElementsByTagName("body")[0].classList.add("report-mask-hidden"):"remove"===t&&document.getElementsByTagName("body")[0].classList.remove("report-mask-hidden"))},initVisibilitychange:function(){document.addEventListener("visibilitychange",this.visibilityState)},visibilityState:function(){"video"===this.reportType&&("hidden"===document.visibilityState?this.ineffectiveLearning("ineffective_learning"):"visible"===document.visibilityState&&this.player.pause())},onbeforeunload:function(){window.addEventListener("beforeunload",this.onbeforeunloadFlowSign)},onbeforeunloadFlowSign:function(){this.sign.length>0&&localStorage.setItem("flowSign",this.sign)}}}}}]);