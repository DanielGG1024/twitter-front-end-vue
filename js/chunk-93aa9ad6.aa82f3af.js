(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93aa9ad6"],{2889:function(e,t,r){"use strict";r("f66c")},7384:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"window demo"},[r("div",{staticClass:"user"},[r("UserLeftColumn",{attrs:{userId:e.userId,currentUserId:e.currentUserId}}),e.isLoading?r("Spinner",{staticClass:"user-spinner"}):r("div",{staticClass:"center-column",attrs:{id:"center-column"}},[r("UserHeader",{attrs:{user:e.user}}),r("UserFollowTab"),r("div",{attrs:{id:"user-follower-list"}},[r("div",{staticClass:"user-followers"},e._l(e.followers,(function(t){return r("div",{key:t.followerId,staticClass:"follower"},[r("div",{staticClass:"avatar"},[r("div",{staticClass:"avatar-img"},[r("img",{attrs:{src:e._f("emptyImage")(t.avatar),alt:"avatar"}})])]),r("div",{staticClass:"follower-main"},[r("div",{staticClass:"name"},[e._v(e._s(t.name))]),r("div",{staticClass:"tag-name"},[e._v("@"+e._s(t.account))]),r("div",{staticClass:"description scrollbar"},[e._v(" "+e._s(t.introduction)+" ")])]),t.isFollowed?r("button",{staticClass:"follower-btn following",attrs:{disabled:e.isProcessing},on:{click:function(r){return e.removeFollow(t.followerId)}}},[e._v(" 正在跟隨 ")]):r("button",{staticClass:"follower-btn",attrs:{disabled:e.isProcessing},on:{click:function(r){return e.addFollow(t.followerId)}}},[e._v(" 跟隨 ")])])})),0)])],1),r("Popular",{on:{"follow-click":function(t){return e.fetchFollower(e.userId)}}})],1)])},n=[],o=r("1da1"),a=r("5530"),i=(r("96cf"),r("a9e3"),r("d81d"),r("232c")),c=r("3e69"),l=r("3b8f"),u=r("99f5"),d=r("2375"),f=r("4cce"),w=r("7482"),v=r("2fa3"),p=r("2f62"),m=r("2708"),g={mixins:[m["b"],m["a"]],components:{UserLeftColumn:i["a"],UserHeader:c["a"],Popular:l["a"],UserFollowTab:u["a"],Spinner:d["a"]},data:function(){return{isLoading:!0,userId:Number(this.$route.params.id),currentUserId:-1,user:{},followers:[],isProcessing:!1}},created:function(){this.fetchFollower(this.userId),this.fetchUserInfo(this.userId)},computed:Object(a["a"])({},Object(p["b"])(["currentUser","isAuthenticated"])),beforeRouteUpdate:function(e,t,r){console.log(e,t);var s=e.params.id;this.fetchFollower(s),this.userId=Number(s),r()},methods:{fetchFollower:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,f["a"].getUserFollowers({userId:e});case 4:s=r.sent,n=s.data,t.followers=n,t.isLoading=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0),t.isLoading=!1,v["a"].fire({icon:"error",title:"無法取得個人資料，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},fetchUserInfo:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,f["a"].get({userId:e});case 4:s=r.sent,n=s.data,t.user=n,t.isLoading=!1,r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),t.isLoading=!1,v["a"].fire({icon:"error",title:"無法取得個人資料，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},addFollow:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s='{\n        "id":"'.concat(e,'"\n      }'),n=JSON.parse(s),r.prev=2,t.isProcessing=!0,r.next=6,w["a"].addFollow({data_JSON:n});case 6:o=r.sent,console.log("popular response",o),t.fetchFollower(t.userId),t.isProcessing=!1,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](2),t.isProcessing=!1,v["a"].fire({icon:"error",title:"無法追蹤使用者,請稍後"});case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},removeFollow:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e),r.prev=1,t.isProcessing=!0,r.next=5,w["a"].removeFollow({userId:e});case 5:if(s=r.sent,console.log("reponse",s),n=s.data,"success"===n.status){r.next=10;break}throw new Error(n.message);case 10:t.followers=t.followers.map((function(t){return t.id!==e?t:Object(a["a"])(Object(a["a"])({},t),{},{isfollowered:!1})})),t.fetchFollower(t.userId),t.isProcessing=!1,r.next=20;break;case 15:r.prev=15,r.t0=r["catch"](1),t.isProcessing=!1,console.log(r.t0),v["a"].fire({icon:"error",title:"無法取消喜歡,請稍後在試"});case 20:case"end":return r.stop()}}),r,null,[[1,15]])})))()}}},h=g,b=(r("82a9"),r("2877")),I=Object(b["a"])(h,s,n,!1,null,"22214eb1",null);t["default"]=I.exports},"82a9":function(e,t,r){"use strict";r("e5cf")},"99f5":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-follow-tab"}},[r("router-link",{attrs:{to:{name:"follower"}}},[r("div",{staticClass:"follower tab",class:{clicked:"follower"===this.$route.name}},[e._v("跟隨者")])]),r("router-link",{attrs:{to:{name:"following"}}},[r("div",{staticClass:"following tab",class:{clicked:"following"===this.$route.name}},[e._v("正在跟隨")])])],1)},n=[],o=(r("2889"),r("2877")),a={},i=Object(o["a"])(a,s,n,!1,null,"3472e1b4",null);t["a"]=i.exports},d81d:function(e,t,r){"use strict";var s=r("23e7"),n=r("b727").map,o=r("1dde"),a=o("map");s({target:"Array",proto:!0,forced:!a},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e5cf:function(e,t,r){},f66c:function(e,t,r){}}]);
//# sourceMappingURL=chunk-93aa9ad6.aa82f3af.js.map