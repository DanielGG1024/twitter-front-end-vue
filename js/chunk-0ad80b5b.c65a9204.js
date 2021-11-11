(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ad80b5b"],{"4cce":function(e,t,r){"use strict";var s=r("2fa3"),a=function(){return localStorage.getItem("token")};t["a"]={getCurrentUser:function(){return s["b"].get("/get-current-user",{headers:{Authorization:"Bearer ".concat(a())}})},get:function(e){var t=e.userId;return s["b"].get("/users/".concat(t),{headers:{Authorization:"Bearer ".concat(a())}})},update:function(e){var t=e.userId,r=e.formData;return s["b"].put("/users/".concat(t),r,{headers:{Authorization:"Bearer ".concat(a())}})},getTopUsers:function(){return s["b"].get("users/top",{headers:{Authorization:"Bearer ".concat(a())}})},getUserTweets:function(e){var t=e.userId;return s["b"].get("/users/".concat(t,"/tweets"),{headers:{Authorization:"Bearer ".concat(a())}})},getUserReplies:function(e){var t=e.userId;return s["b"].get("/users/".concat(t,"/replied_tweets"),{headers:{Authorization:"Bearer ".concat(a())}})},getUserLikes:function(e){var t=e.userId;return s["b"].get("/users/".concat(t,"/likes"),{headers:{Authorization:"Bearer ".concat(a())}})},getUserFollowers:function(e){var t=e.userId;return s["b"].get("/users/".concat(t,"/followers"),{headers:{Authorization:"Bearer ".concat(a())}})},getUserFollowings:function(e){var t=e.userId;return s["b"].get("/users/".concat(t,"/followings"),{headers:{Authorization:"Bearer ".concat(a())}})}}},9398:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"tweet-list"}},[e.isLoading?s("Spinner"):e._l(e.tweets,(function(t){return s("div",{key:t.id,staticClass:"tweet"},[s("router-link",{attrs:{to:{name:"user",params:{id:t.user.id}}}},[s("div",{staticClass:"tweet-avatar"},[s("img",{attrs:{src:e._f("emptyImage")(t.user.avatar),alt:"tweet-avatar"}})])]),s("div",{staticClass:"tweet-main"},[s("router-link",{attrs:{to:{name:"Reply",params:{id:t.id}}}},[s("div",{staticClass:"tweet-user-info"},[s("div",{staticClass:"name"},[e._v(e._s(t.user.name))]),s("div",{staticClass:"account"},[e._v(" @"+e._s(t.user.account)),s("span",[e._v("‧"+e._s(e._f("fromNow")(t.updatedAt)))])])]),s("div",{staticClass:"tweet-content scrollbar"},[e._v(" "+e._s(t.description)+" ")])]),s("div",{staticClass:"tweet-status"},[s("div",{staticClass:"replies state"},[s("img",{attrs:{src:r("b74f"),alt:"chat-icon"},on:{click:function(r){return e.clickChatBtn(t.TweetId)}}}),s("div",{staticClass:"replies-count count"},[e._v(e._s(t.replyCount))])]),s("div",{staticClass:"likes state"},[t.isLiked?s("button",{attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.removeLike(t)}}},[s("img",{staticClass:"likes-img",attrs:{src:r("4167"),alt:"heart-icon"}})]):s("button",{attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.addLike(t)}}},[s("img",{staticClass:"likes-img",attrs:{src:r("b4af"),alt:"heart-icon"}})]),s("div",{staticClass:"likes-count count"},[e._v(e._s(t.likeCount))])])])],1)],1)})),s("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.noLength,expression:"noLength === true"}],staticClass:"noLength"},[e._v(" 目前尚未發表貼文 ")]),s("ReplyModal",{attrs:{ReplyModalSwitch:e.ReplyModal,tweet:e.tweet},on:{"after-click-background":e.afterClickClose,"after-click-close":e.afterClickClose,"after-tweetReply-post":e.afterTweetReplyPost}})],2)},a=[],n=r("1da1"),i=r("5530"),o=(r("96cf"),r("a9e3"),r("7db0"),r("2375")),c=r("2797"),u=r("4cce"),l=r("7482"),d=r("2708"),f=r("2fa3"),h=r("2f62"),p={mixins:[d["b"],d["a"]],components:{ReplyModal:c["a"],Spinner:o["a"]},props:{initialNewTweet:{type:Boolean,required:!0}},data:function(){return{tweets:[],tweet:{User:{avatar:""}},ReplyModal:!1,userId:Number(this.$route.params.id),isProcessing:!1,isLoading:!0,noLength:!1}},watch:{initialNewTweet:{handler:function(){this.fetchUserTweets(this.userId)}}},computed:Object(i["a"])({},Object(h["b"])(["currentUser","isAuthenticated"])),created:function(){var e=this.$route.params.id;this.fetchUserTweets(e)},beforeRouteUpdate:function(e,t,r){var s=e.params.id;this.fetchUserTweets(s),r()},methods:{fetchUserTweets:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,u["a"].getUserTweets({userId:e});case 4:s=r.sent,a=s.data,t.tweets=a,t.isLoading=!1,0===t.tweets.length&&(t.noLength=!0),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),t.isLoading=!1,f["a"].fire({icon:"error",title:"無法取得推文，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},clickChatBtn:function(e){this.ReplyModal=!0;var t=this.tweets.find((function(t){return t.TweetId===e})),r=t.id,s=t.likeCount,a=t.replyCount,n=t.updatedAt,i=t.user;this.tweet={TweetId:r,LikesCount:s,RepliesCount:a,createdAt:n,User:i},console.log("tweet",this.tweet)},afterClickClose:function(){this.ReplyModal=!1},afterTweetReplyPost:function(){this.ReplyModal=!1,console.log(this.tweet)},addLike:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,s=e.id,r.next=5,l["a"].addLike({tweetId:s});case 5:if(a=r.sent,n=a.data,"success"===n.status){r.next=9;break}throw new Error(n.message);case 9:e.likeCount+=1,e.isLiked=!0,t.isProcessing=!1,r.next=19;break;case 14:r.prev=14,r.t0=r["catch"](0),t.isProcessing=!1,console.log(r.t0),f["a"].fire({icon:"error",title:"無法喜歡,請稍後在試"});case 19:case"end":return r.stop()}}),r,null,[[0,14]])})))()},removeLike:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,s=e.id,r.next=5,l["a"].removeLike({tweetId:s});case 5:if(a=r.sent,n=a.data,"success"===n.status){r.next=9;break}throw new Error(n.message);case 9:e.isLiked=!1,e.likeCount-=1,t.isProcessing=!1,r.next=19;break;case 14:r.prev=14,r.t0=r["catch"](0),t.isProcessing=!1,console.log(r.t0),f["a"].fire({icon:"error",title:"無法取消喜歡,請稍後在試"});case 19:case"end":return r.stop()}}),r,null,[[0,14]])})))()}}},w=p,g=(r("b29df"),r("2877")),v=Object(g["a"])(w,s,a,!1,null,"6aacde84",null);t["default"]=v.exports},b29df:function(e,t,r){"use strict";r("f4cf")},f4cf:function(e,t,r){}}]);
//# sourceMappingURL=chunk-0ad80b5b.c65a9204.js.map