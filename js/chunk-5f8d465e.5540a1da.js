(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f8d465e"],{2797:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.ReplyModalSwitch,expression:"ReplyModalSwitch"}],staticClass:"modal-background",on:{click:t.clickModalBackground}},[a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-header"},[a("div",{staticClass:"close-icon",on:{click:t.clickClose}},[a("img",{staticClass:"close",attrs:{src:r("98f5"),alt:""}})])]),a("div",{staticClass:"reply"},[a("div",{staticClass:"reply-icon-wrapper"},[a("img",{staticClass:"user-icon",attrs:{src:t.tweet.User.avatar,alt:""}})]),a("div",{staticClass:"txt-wrapper"},[a("div",{staticClass:"txt-info"},[a("span",{staticClass:"user-name"}),a("span",{staticClass:"user-account"},[t._v("＠"+t._s(t.tweet.User.account)+" "),a("span",[t._v("．"+t._s(t._f("fromYear")(t.tweet.createdAt)))])])]),a("div",{staticClass:"txt"},[a("p",[t._v(" "+t._s(t.tweet.description)+" ")])]),a("div",{staticClass:"txt-footer"},[a("span",{staticClass:"txt-footer-reply"},[t._v("回覆給")]),a("span",{staticClass:"footer-account"},[t._v("＠"+t._s(t.tweet.User.account))])])])]),a("div",{staticClass:"modal-txt"},[a("div",{staticClass:"modal-content-post"},[a("div",{staticClass:"modal-main-tweet"},[a("div",{staticClass:"user-icon-wrapper"},[a("img",{staticClass:"user-icosn",attrs:{src:t.currentUser.avatar,alt:""}})]),a("div",{staticClass:"modal-main-tweet-txt"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.teweetContent,expression:"teweetContent"}],staticClass:"modal-textarea",attrs:{placeholder:"有甚麼新鮮事?"},domProps:{value:t.teweetContent},on:{input:function(e){e.target.composing||(t.teweetContent=e.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.contentError,expression:"contentError"}],staticClass:"modal-info"},[t._v(t._s(t.errorContentMessage))])]),a("button",{staticClass:"modal-main-tweet-button",on:{click:function(e){return t.handleSubmit(t.tweet.TweetId)}}},[t._v(" 推文 ")])])])])])])])},n=[],s=r("1da1"),o=r("5530"),c=(r("96cf"),r("498a"),r("7482")),i=r("2fa3"),u=r("2f62"),l=r("2708"),d={name:"ReplyModal",mixins:[l["a"]],props:{ReplyModalSwitch:{type:Boolean,required:!0},tweet:{type:Object}},data:function(){return{teweetContent:"",contentError:!1,errorContentMessage:""}},created:function(){console.log("tweet",this.tweet)},computed:Object(o["a"])({},Object(u["b"])(["currentUser","isAuthenticated"])),methods:{clickClose:function(){this.$emit("after-click-close")},clickModalBackground:function(t){var e=t.target;"modal-background"===e.className&&this.$emit("after-click-background")},handleSubmit:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.teweetContent,0!==a.trim().length){r.next=7;break}return e.contentError=!0,e.errorContentMessage="內容不可以空白",r.abrupt("return");case 7:if(!(a.length>140)){r.next=11;break}return e.contentError=!0,e.errorContentMessage="字數不可超過140字",r.abrupt("return");case 11:e.contentError=!1,e.errorContentMessage="";case 13:return r.prev=13,n='{\n          "comment":"'.concat(a,'"\n        }'),s=JSON.parse(n),r.next=18,c["a"].postTweetReply({tweetId:t,data_JSON:s});case 18:if(o=r.sent,console.log("Page ReplyModal response:",o),"success"===o.data.status){r.next=22;break}throw new Error;case 22:e.$emit("after-tweetReply-post"),e.teweetContent="",i["a"].fire({icon:"success",title:"發送成功!"}),r.next=30;break;case 27:r.prev=27,r.t0=r["catch"](13),i["a"].fire({icon:"error",title:"無法回復,請稍後"});case 30:case"end":return r.stop()}}),r,null,[[13,27]])})))()}}},A=d,f=(r("917e"),r("2877")),w=Object(f["a"])(A,a,n,!1,null,"77665934",null);e["a"]=w.exports},"498a":function(t,e,r){"use strict";var a=r("23e7"),n=r("58a8").trim,s=r("c8d2");a({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},"4b18":function(t,e,r){},"4cce":function(t,e,r){"use strict";var a=r("2fa3"),n=function(){return localStorage.getItem("token")};e["a"]={getCurrentUser:function(){return a["b"].get("/get-current-user",{headers:{Authorization:"Bearer ".concat(n())}})},get:function(t){var e=t.userId;return a["b"].get("/users/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(t){var e=t.userId,r=t.formData;return a["b"].put("/users/".concat(e),r,{headers:{Authorization:"Bearer ".concat(n())}})},getTopUsers:function(){return a["b"].get("users/top",{headers:{Authorization:"Bearer ".concat(n())}})},getUserTweets:function(t){var e=t.userId;return a["b"].get("/users/".concat(e,"/tweets"),{headers:{Authorization:"Bearer ".concat(n())}})},getUserReplies:function(t){var e=t.userId;return a["b"].get("/users/".concat(e,"/replied_tweets"),{headers:{Authorization:"Bearer ".concat(n())}})},getUserLikes:function(t){var e=t.userId;return a["b"].get("/users/".concat(e,"/likes"),{headers:{Authorization:"Bearer ".concat(n())}})},getUserFollowers:function(t){var e=t.userId;return a["b"].get("/users/".concat(e,"/followers"),{headers:{Authorization:"Bearer ".concat(n())}})},getUserFollowings:function(t){var e=t.userId;return a["b"].get("/users/".concat(e,"/followings"),{headers:{Authorization:"Bearer ".concat(n())}})}}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),n=r("577e"),s=r("5899"),o="["+s+"]",c=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),u=function(t){return function(e){var r=n(a(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(i,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,r){var a=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var s,o;return n&&"function"==typeof(s=e.constructor)&&s!==r&&a(o=s.prototype)&&o!==r.prototype&&n(t,o),t}},7482:function(t,e,r){"use strict";var a=r("2fa3"),n=function(){return localStorage.getItem("token")};e["a"]={postTweet:function(t){var e=t.data_JSON;return a["b"].post("tweets",e,{headers:{Authorization:"Bearer ".concat(n())}})},postTweetReply:function(t){var e=t.tweetId,r=t.data_JSON;return a["b"].post("tweets/".concat(e,"/replies"),r,{headers:{Authorization:"Bearer ".concat(n())}})},getTweets:function(){return a["b"].get("tweets",{headers:{Authorization:"Bearer ".concat(n())}})},getTweet:function(t){var e=t.tweetId;return a["b"].get("tweets/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},getTweetReplies:function(t){var e=t.tweetId;return a["b"].get("tweets/".concat(e,"/replies"),{headers:{Authorization:"Bearer ".concat(n())}})},addLike:function(t){var e=t.tweetId;return a["b"].post("tweets/".concat(e,"/like"),null,{headers:{Authorization:"Bearer ".concat(n())}})},removeLike:function(t){var e=t.tweetId;return a["b"].post("tweets/".concat(e,"/unlike"),null,{headers:{Authorization:"Bearer ".concat(n())}})},addFollow:function(t){var e=t.data_JSON;return a["b"].post("followships",e,{headers:{Authorization:"Bearer ".concat(n())}})},removeFollow:function(t){var e=t.userId;return a["b"].delete("followships/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},getTopUser:function(){return a["b"].get("users/top",{headers:{Authorization:"Bearer ".concat(n())}})}}},"7db0":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").find,s=r("44d2"),o="find",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},"917e":function(t,e,r){"use strict";r("4b18")},9398:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"tweet-list"}},[t._l(t.tweets,(function(e){return a("div",{key:e.id,staticClass:"tweet"},[a("router-link",{attrs:{to:{name:"user",params:{id:e.user.id}}}},[a("div",{staticClass:"tweet-avatar"},[a("img",{attrs:{src:e.user.avatar,alt:"tweet-avatar"}})])]),a("div",{staticClass:"tweet-main"},[a("router-link",{attrs:{to:{name:"Reply",params:{id:e.id}}}},[a("div",{staticClass:"tweet-user-info"},[a("div",{staticClass:"name"},[t._v(t._s(e.user.name))]),a("div",{staticClass:"account"},[t._v(" @"+t._s(e.user.account)),a("span",[t._v("‧"+t._s(t._f("fromNow")(e.updatedAt)))])])]),a("div",{staticClass:"tweet-content scrollbar"},[t._v(" "+t._s(e.description)+" ")])]),a("div",{staticClass:"tweet-status"},[a("div",{staticClass:"replies state"},[a("img",{attrs:{src:r("b74f"),alt:"chat-icon"},on:{click:function(r){return t.clickChatBtn(e.TweetId)}}}),a("div",{staticClass:"replies-count count"},[t._v(t._s(e.replyCount))])]),a("div",{staticClass:"likes state"},[a("img",{attrs:{src:r("b4af"),alt:"heart-icon"}}),a("div",{staticClass:"likes-count count"},[t._v(t._s(e.likeCount))])])])],1)],1)})),a("ReplyModal",{attrs:{ReplyModalSwitch:t.ReplyModal,tweet:t.tweet},on:{"after-click-background":t.afterClickClose,"after-click-close":t.afterClickClose,"after-tweetReply-post":t.afterTweetReplyPost}})],2)},n=[],s=r("1da1"),o=r("5530"),c=(r("96cf"),r("a9e3"),r("7db0"),r("2797")),i=r("2708"),u=r("4cce"),l=r("2fa3"),d=r("2f62"),A={mixins:[i["a"]],components:{ReplyModal:c["a"]},data:function(){return{tweets:[],tweet:{},ReplyModal:!1,userId:Number(this.$route.params.id)}},computed:Object(o["a"])({},Object(d["b"])(["currentUser","isAuthenticated"])),created:function(){var t=this.$route.params.id;this.fetchUserTweets(t)},beforeRouteUpdate:function(t,e,r){var a=t.params.id;this.fetchUserTweets(a),r()},methods:{fetchUserTweets:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].getUserTweets({userId:t});case 3:a=r.sent,n=a.data,console.log("this",n),e.tweets=n,r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),l["a"].fire({icon:"error",title:"無法取得推文，請稍後再試"});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},clickChatBtn:function(t){this.ReplyModal=!0;var e=this.tweets.find((function(e){return e.TweetId===t})),r=e.id,a=e.likeCount,n=e.replyCount,s=e.updatedAt,o=e.user;this.tweet={TweetId:r,LikesCount:a,RepliesCount:n,createdAt:s,User:o},console.log("clickBtn tweet",this.tweet),console.log("clickBtn tweets",this.tweet)},afterClickClose:function(){this.ReplyModal=!1},afterTweetReplyPost:function(){this.ReplyModal=!1,this.$emit("after-tweetReply-post"),this.fetchUserTweets(this.userId)}}},f=A,w=(r("b2fa"),r("2877")),p=Object(w["a"])(f,a,n,!1,null,"34ed92ee",null);e["default"]=p.exports},"98f5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBxdfLEYIwEAbgf6nAEuxMPOjdDijBsx6MldmCHWCCBHmEZDdsxj0AG5Z8M5lkZwD+FOQu7RkHtLja7G3Thm54okCMHQ+/7G0/qqm18Q4FjM+r7yh2szrTFxZBfzBwCdSr4CHUBQ0FJ9Q2ewS+zV72NdSu8JEmuSIeRe8wtBhXwFOoe6TghxtwDroK5+JcNApLcQmahLm4FGXBKby/GwhQNpzAIUVFMBtnoGI4iTNRFxWkQXb6nHeLUkGs7t5psDocf3PxUDbOO06Rc9rPIm6v6QbCaA457ZW2osOQECcNNAcnLVSKkyYqwUkb5eJUAmXhpdAU7nt1gwKoi24O32gW8PxPQgmN4R+H8M/Gca8TfQAAAABJRU5ErkJggg=="},a9e3:function(t,e,r){"use strict";var a=r("83ab"),n=r("da84"),s=r("94ca"),o=r("6eeb"),c=r("5135"),i=r("c6b6"),u=r("7156"),l=r("d9b5"),d=r("c04e"),A=r("d039"),f=r("7c73"),w=r("241c").f,p=r("06cf").f,v=r("9bf2").f,h=r("58a8").trim,g="Number",m=n[g],C=m.prototype,b=i(f(C))==g,k=function(t){if(l(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,a,n,s,o,c,i,u=d(t,"number");if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+u}for(s=u.slice(2),o=s.length,c=0;c<o;c++)if(i=s.charCodeAt(c),i<48||i>n)return NaN;return parseInt(s,a)}return+u};if(s(g,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var U,I=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof I&&(b?A((function(){C.valueOf.call(r)})):i(r)!=g)?u(new m(k(e)),r,I):k(e)},B=a?w(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;B.length>E;E++)c(m,U=B[E])&&!c(I,U)&&v(I,U,p(m,U));I.prototype=C,C.constructor=I,o(n,g,I)}},b2fa:function(t,e,r){"use strict";r("f306")},b4af:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgBvVbNThNRFD7nTmdqDIvyBuUJKBvjxtgm7i1LV9ZYjTtKolgwpG0IUnBB2RHAMOzcgTtXtiSuTd+A8Qnsks4wczznTqeWOrQV0C+Z3Dt35n7fOXfOzwD8J+DwQqFUTSnTzCcUzsp9QPDjQrkndr3qxBHI+wnLKhiIswTU8ck//bi1ejJS6OXSWj5A45AXUzE22V63u2g3qp1IwEpaFQIoxeg7bGFt/8M7+w+h4tJGBZGqEamPwamCwEFSeQT1mK1NC4HXdefgTjJlEh3zfYavDiHtUBC0Q0IjjwhP9Zywure1XOsLiSeExnG4yZ8/qK+2Bs17Vd5I+wEToyaWZ+Jxhje373bdXKPnZYQXb9YzoLAp7zFfTviUPCBMbIeO0OKwiGC3vux4rpsDArE62xNx4kQEfGRtMTikNA71WHy9lkXDEPXW/uZKDkZAe0Z0JnMD3ZndKwKk79nb98KbFa8UKJXVXhF8hjEQz9jEZ3KNE7nEGRiZRLQYEHVgAuzXf0fSWCHwHQ4OmaUU/EMQqX6aKE5IRyaG0hF1q1AIaRlRgaPYsXa4HFaC2wQiPtQTH9o6jzg6fvKQ4mSctmPC9ToocIRyUp9JGuxtrsyEeUS0I6NlmSW4JSSIFiAkP5JBC124XgN0VcAFqWFwQ4g3CJjXAsqz+0JyXD2vUmYyuQ03hElQAV0baSfKt354i1dsBS9S4TnXPrgmuM4VhEO+jYH6pDQutYlimcsR6XLU8dCdsyfI/kGEAQBN7Q1Xj8HkvpSwUlAD6B0hWc2/+V6DItxuasMVBOM2RcWQN7W9rpcbF/JikJm0ZE+GG2HrIKY4x5Ygzqf5sCVgxkyazUK5moZRnvREpD9Nyd4YIIyy0mKCsNk5/M1yw9+swA3OVOpYH9cVTXCsUCTG/wWHfBw6CqPWrNet5EKAVELdReFo6twtNUYc8UihCMXyepVFKjJn0U5vowQK5x/UDrZWGuM4DJgA3799bd178OiIK/00/3jcZ5FzlvrEXfbJ3ubql0k4fgFTX2blSSTp7wAAAABJRU5ErkJggg=="},b74f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgBtVZdbtpAEJ6xCUHlofQGzglKbuDcoDlBjQSobwGpBUQU4YgWKH0IvFUQqXCC5gbhBqEnqG9QPwb8M51d44gSI0xwPwm87C7z7czszGeEHTAqZi4DkHNTqha1nnI96/vAtHbZwW3G0+njC0LS+acO8TADn6bjb5eTWETFj20d1dQPANJWUxZ/5rzVjjJAvI+N5HmYe9rv0zkTzrcSFWvdFiKZq6UJoTu97V3NIAaKjbYOvmogwnv5bwWMUbc5fUZU+vTFAAXZE7ABqTruRYdgJ2HtcwVRuRFjQu8sPKgkMhpd7YjgXoQLyTsf9a/u4ACUGnxokoe2nMXydDIwbUUsMEkryAlODiURENFgD4QdLZ0+qog5ZbWmiy8VF9eQEMgnaYsQg5xxbvKcmwcez8Zfm2eQIEq1zgMnJ8/he6P46GurM/yChEEA0mYqo+YVIkXefyKw4T8izBHw/c9BwmCbr5+IVFn1cvotJA0CTTzcR28u66hU7/zhR04kTdx5SABBbdJvHs75kp3K0BHRUDzTx5kWJISgNhkY2JZE7tIZIKBF4FfK3O/gQJRr7Xd8fIPDZWUfHdkA1nudqCduQ5BDQnO5XAxfEkaD7aTYDopujlQIe+Y/3VuQoaL8pEAiLF6ekedOuUnaquPYuwSuVO9dcFRMQcIqcD3qXZrh2jM9+sBJdH0yw3a/gcjuIYXyON3iApV9jWuyettvDtb3RCpsSOiBr/MVzRNffQz6ocVEJ+v71oVS5MRHrxClYVuJNsElQOtEm14w0TC7cMzBlrym4AUIvVjl0mYNK+ySFwX2RLneuUFVvQ/0S7nLLpYncTRsX480ESqRCyCvOuo3Y4vk3h6JXLxied5XieN7xMXHNWLFfSvaxF+amCCyjEpAPQAAAABJRU5ErkJggg=="},c8d2:function(t,e,r){var a=r("d039"),n=r("5899"),s="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||s[t]()!=s||n[t].name!==t}))}},f306:function(t,e,r){}}]);
//# sourceMappingURL=chunk-5f8d465e.5540a1da.js.map