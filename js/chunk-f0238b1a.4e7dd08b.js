(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0238b1a"],{1914:function(e,t,r){"use strict";r("b0b0")},2375:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"spinner"},[r("div",{staticClass:"bouncing-loader"},[r("div"),r("div"),r("div")])])}],n=(r("1914"),r("2877")),i={},o=Object(n["a"])(i,a,s,!1,null,"5040bd38",null);t["a"]=o.exports},2797:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.ReplyModalSwitch,expression:"ReplyModalSwitch"}],staticClass:"modal-background",on:{click:e.clickModalBackground}},[a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-header"},[a("div",{staticClass:"close-icon",on:{click:e.clickClose}},[a("img",{staticClass:"close",attrs:{src:r("98f5"),alt:""}})])]),a("div",{staticClass:"reply"},[a("div",{staticClass:"reply-icon-wrapper"},[a("img",{staticClass:"user-icon",attrs:{src:e.tweet.User.avatar,alt:""}})]),a("div",{staticClass:"txt-wrapper"},[a("div",{staticClass:"txt-info"},[a("span",{staticClass:"user-name"}),a("span",{staticClass:"user-account"},[e._v("＠"+e._s(e.tweet.User.account)+" "),a("span",[e._v("．"+e._s(e._f("fromYear")(e.tweet.createdAt)))])])]),a("div",{staticClass:"txt"},[a("p",[e._v(" "+e._s(e.tweet.description)+" ")])]),a("div",{staticClass:"txt-footer"},[a("span",{staticClass:"txt-footer-reply"},[e._v("回覆給")]),a("span",{staticClass:"footer-account"},[e._v("＠"+e._s(e.tweet.User.account))])])])]),a("div",{staticClass:"modal-txt"},[a("div",{staticClass:"modal-content-post"},[a("div",{staticClass:"modal-main-tweet"},[a("div",{staticClass:"user-icon-wrapper"},[a("img",{staticClass:"user-icosn",attrs:{src:e.currentUser.avatar,alt:""}})]),a("div",{staticClass:"modal-main-tweet-txt"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.teweetContent,expression:"teweetContent"}],staticClass:"modal-textarea",attrs:{placeholder:"有甚麼新鮮事?"},domProps:{value:e.teweetContent},on:{input:function(t){t.target.composing||(e.teweetContent=t.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.contentError,expression:"contentError"}],staticClass:"modal-info"},[e._v(e._s(e.errorContentMessage))])]),a("button",{staticClass:"modal-main-tweet-button",attrs:{disabled:e.isProcessing},on:{click:function(t){return e.handleSubmit(e.tweet.TweetId)}}},[e._v(" 推文 ")])])])])])])])},s=[],n=r("1da1"),i=r("5530"),o=(r("96cf"),r("498a"),r("7482")),c=r("2fa3"),u=r("2f62"),l=r("2708"),A={name:"ReplyModal",mixins:[l["b"]],props:{ReplyModalSwitch:{type:Boolean,required:!0},tweet:{type:Object}},data:function(){return{teweetContent:"",contentError:!1,errorContentMessage:"",isProcessing:!1}},created:function(){console.log("tweet",this.tweet)},computed:Object(i["a"])({},Object(u["b"])(["currentUser","isAuthenticated"])),methods:{clickClose:function(){this.$emit("after-click-close")},clickModalBackground:function(e){var t=e.target;"modal-background"===t.className&&this.$emit("after-click-background")},handleSubmit:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=t.teweetContent,0!==a.trim().length){r.next=7;break}return t.contentError=!0,t.errorContentMessage="內容不可以空白",r.abrupt("return");case 7:if(!(a.length>140)){r.next=11;break}return t.contentError=!0,t.errorContentMessage="字數不可超過140字",r.abrupt("return");case 11:t.contentError=!1,t.errorContentMessage="";case 13:return r.prev=13,s='{\n          "comment":"'.concat(a,'"\n        }'),n=JSON.parse(s),r.next=18,o["a"].postTweetReply({tweetId:e,data_JSON:n});case 18:if(i=r.sent,console.log("Page ReplyModal response:",i),"success"===i.data.status){r.next=22;break}throw new Error;case 22:t.$emit("after-tweetReply-post"),t.teweetContent="",t.isProcessing=!0,c["a"].fire({icon:"success",title:"發送成功!"}),r.next=32;break;case 28:r.prev=28,r.t0=r["catch"](13),c["a"].fire({icon:"error",title:"無法回復,請稍後"}),t.isProcessing=!1;case 32:case"end":return r.stop()}}),r,null,[[13,28]])})))()}}},d=A,f=(r("b88e"),r("2877")),p=Object(f["a"])(d,a,s,!1,null,"1ba090f0",null);t["a"]=p.exports},"2f06":function(e,t,r){},4167:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMISURBVHgB7ZlRbtpAEEBn1pCvKuUGsRXyH05QOEHpX1WllKgHSDlB4ARJT1BCoqp/5QZxT9D8B4T56W/9HcDTWacIYq/N2hjiSDwJIYb1emY8s7szBtixY8eLBpMMHpn1EhReHfNl8lPyhUQOzCa25fxwEkzFc703oVisAqG5kHq2NbixIQFaBkjFRWH/jAC+8M+SehTZRHBlDa+7sXOVT6oIeM63rkYMcRGp700mHR2nrDRgfNj4RAiXEKl4YEKkrjcxWpbTdZflvhOM1xeE1NSZBwgcAuqsckisAeNy45y93oakyJvPHmpzD8pwQWPvlu9mQkJYwfbBoNeJ+V/N+KhxxiFxCWnxjRAVjghAY/93GuUXU1HLGlwrdVEa4HussDeCtaE+EriE2IT1cGn6UFHlREE1WhhFGToZgHVKtM5FUsJC8Rt/10J3CAqy8372EHi14DIrgoOk9yGvkKgHRSEDOF6PIacgwpugTCjG5dYAUOj2xICR2TQh5/yxPh8s/xbwwgmtQk65kc0KuiHMQe+JzuEnwDso5Bc3KAgbgHw8zi10F5SEl1HAX5BTVLopktizIbeEdVOeVDiR/4Lm+X9rcG6aw54VFAv1WPgKOQMF2iq5eh+YivR1wIbwJqgsapQGPJaDZENOQMQu6+So/ovciWlqnEJOiPK+JNIAaTGXlM+eC3Hel8SfhWaiDYrdb2vwyhPnfUmsATIXuA3SgmfCb6vEeF+iVbE65Y8/ZX0LW0SGzsH91co81DpO+wm9zUOeRujM0e4ZjI4+HCMVbmHzOzS3UERlVejM0S5orPvvd0Sbzwci71RXeUmiikz2KfmYofVo0yDntoY3/STXpGo7jcqNNl+YafvFV37Qa0NCUvfNsjQirfKStRp/WRgR17jVYe3O5ejwpI4gLlJ0n11uFb5L+kYmSCatV9lPQsNL0P/ntzm8tyRZbaLIpnf8H42Qcv3jwRohEyRTAyR+d8/w2tzHfAuLTc/1qzwulIKvntYlcwOWkS/0AD0XJntO1orv2LHjkX833CXiXlBIlQAAAABJRU5ErkJggg=="},"498a":function(e,t,r){"use strict";var a=r("23e7"),s=r("58a8").trim,n=r("c8d2");a({target:"String",proto:!0,forced:n("trim")},{trim:function(){return s(this)}})},"4cce":function(e,t,r){"use strict";var a=r("2fa3"),s=function(){return localStorage.getItem("token")};t["a"]={getCurrentUser:function(){return a["b"].get("/get-current-user",{headers:{Authorization:"Bearer ".concat(s())}})},get:function(e){var t=e.userId;return a["b"].get("/users/".concat(t),{headers:{Authorization:"Bearer ".concat(s())}})},update:function(e){var t=e.userId,r=e.formData;return a["b"].put("/users/".concat(t),r,{headers:{Authorization:"Bearer ".concat(s())}})},getTopUsers:function(){return a["b"].get("users/top",{headers:{Authorization:"Bearer ".concat(s())}})},getUserTweets:function(e){var t=e.userId;return a["b"].get("/users/".concat(t,"/tweets"),{headers:{Authorization:"Bearer ".concat(s())}})},getUserReplies:function(e){var t=e.userId;return a["b"].get("/users/".concat(t,"/replied_tweets"),{headers:{Authorization:"Bearer ".concat(s())}})},getUserLikes:function(e){var t=e.userId;return a["b"].get("/users/".concat(t,"/likes"),{headers:{Authorization:"Bearer ".concat(s())}})},getUserFollowers:function(e){var t=e.userId;return a["b"].get("/users/".concat(t,"/followers"),{headers:{Authorization:"Bearer ".concat(s())}})},getUserFollowings:function(e){var t=e.userId;return a["b"].get("/users/".concat(t,"/followings"),{headers:{Authorization:"Bearer ".concat(s())}})}}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("1d80"),s=r("577e"),n=r("5899"),i="["+n+"]",o=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),u=function(e){return function(t){var r=s(a(t));return 1&e&&(r=r.replace(o,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5a59":function(e,t,r){"use strict";r("71c2")},7156:function(e,t,r){var a=r("861d"),s=r("d2bb");e.exports=function(e,t,r){var n,i;return s&&"function"==typeof(n=t.constructor)&&n!==r&&a(i=n.prototype)&&i!==r.prototype&&s(e,i),e}},"71c2":function(e,t,r){},7482:function(e,t,r){"use strict";var a=r("2fa3"),s=function(){return localStorage.getItem("token")};t["a"]={postTweet:function(e){var t=e.data_JSON;return a["b"].post("tweets",t,{headers:{Authorization:"Bearer ".concat(s())}})},postTweetReply:function(e){var t=e.tweetId,r=e.data_JSON;return a["b"].post("tweets/".concat(t,"/replies"),r,{headers:{Authorization:"Bearer ".concat(s())}})},getTweets:function(){return a["b"].get("tweets",{headers:{Authorization:"Bearer ".concat(s())}})},getTweet:function(e){var t=e.tweetId;return a["b"].get("tweets/".concat(t),{headers:{Authorization:"Bearer ".concat(s())}})},getTweetReplies:function(e){var t=e.tweetId;return a["b"].get("tweets/".concat(t,"/replies"),{headers:{Authorization:"Bearer ".concat(s())}})},addLike:function(e){var t=e.tweetId;return a["b"].post("tweets/".concat(t,"/like"),null,{headers:{Authorization:"Bearer ".concat(s())}})},removeLike:function(e){var t=e.tweetId;return a["b"].post("tweets/".concat(t,"/unlike"),null,{headers:{Authorization:"Bearer ".concat(s())}})},addFollow:function(e){var t=e.data_JSON;return a["b"].post("followships",t,{headers:{Authorization:"Bearer ".concat(s())}})},removeFollow:function(e){var t=e.userId;return a["b"].delete("followships/".concat(t),{headers:{Authorization:"Bearer ".concat(s())}})},getTopUser:function(){return a["b"].get("users/top",{headers:{Authorization:"Bearer ".concat(s())}})}}},"7db0":function(e,t,r){"use strict";var a=r("23e7"),s=r("b727").find,n=r("44d2"),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a({target:"Array",proto:!0,forced:o},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),n(i)},"98f5":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBxdfLEYIwEAbgf6nAEuxMPOjdDijBsx6MldmCHWCCBHmEZDdsxj0AG5Z8M5lkZwD+FOQu7RkHtLja7G3Thm54okCMHQ+/7G0/qqm18Q4FjM+r7yh2szrTFxZBfzBwCdSr4CHUBQ0FJ9Q2ewS+zV72NdSu8JEmuSIeRe8wtBhXwFOoe6TghxtwDroK5+JcNApLcQmahLm4FGXBKby/GwhQNpzAIUVFMBtnoGI4iTNRFxWkQXb6nHeLUkGs7t5psDocf3PxUDbOO06Rc9rPIm6v6QbCaA457ZW2osOQECcNNAcnLVSKkyYqwUkb5eJUAmXhpdAU7nt1gwKoi24O32gW8PxPQgmN4R+H8M/Gca8TfQAAAABJRU5ErkJggg=="},a9e3:function(e,t,r){"use strict";var a=r("83ab"),s=r("da84"),n=r("94ca"),i=r("6eeb"),o=r("5135"),c=r("c6b6"),u=r("7156"),l=r("d9b5"),A=r("c04e"),d=r("d039"),f=r("7c73"),p=r("241c").f,g=r("06cf").f,w=r("9bf2").f,v=r("58a8").trim,h="Number",m=s[h],k=m.prototype,b=c(f(k))==h,C=function(e){if(l(e))throw TypeError("Cannot convert a Symbol value to a number");var t,r,a,s,n,i,o,c,u=A(e,"number");if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+u}for(n=u.slice(2),i=n.length,o=0;o<i;o++)if(c=n.charCodeAt(o),c<48||c>s)return NaN;return parseInt(n,a)}return+u};if(n(h,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var R,I=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof I&&(b?d((function(){k.valueOf.call(r)})):c(r)!=h)?u(new m(C(t)),r,I):C(t)},U=a?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;U.length>E;E++)o(m,R=U[E])&&!o(I,R)&&w(I,R,g(m,R));I.prototype=k,k.constructor=I,i(s,h,I)}},b0b0:function(e,t,r){},b4af:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgBvVbNThNRFD7nTmdqDIvyBuUJKBvjxtgm7i1LV9ZYjTtKolgwpG0IUnBB2RHAMOzcgTtXtiSuTd+A8Qnsks4wczznTqeWOrQV0C+Z3Dt35n7fOXfOzwD8J+DwQqFUTSnTzCcUzsp9QPDjQrkndr3qxBHI+wnLKhiIswTU8ck//bi1ejJS6OXSWj5A45AXUzE22V63u2g3qp1IwEpaFQIoxeg7bGFt/8M7+w+h4tJGBZGqEamPwamCwEFSeQT1mK1NC4HXdefgTjJlEh3zfYavDiHtUBC0Q0IjjwhP9Zywure1XOsLiSeExnG4yZ8/qK+2Bs17Vd5I+wEToyaWZ+Jxhje373bdXKPnZYQXb9YzoLAp7zFfTviUPCBMbIeO0OKwiGC3vux4rpsDArE62xNx4kQEfGRtMTikNA71WHy9lkXDEPXW/uZKDkZAe0Z0JnMD3ZndKwKk79nb98KbFa8UKJXVXhF8hjEQz9jEZ3KNE7nEGRiZRLQYEHVgAuzXf0fSWCHwHQ4OmaUU/EMQqX6aKE5IRyaG0hF1q1AIaRlRgaPYsXa4HFaC2wQiPtQTH9o6jzg6fvKQ4mSctmPC9ToocIRyUp9JGuxtrsyEeUS0I6NlmSW4JSSIFiAkP5JBC124XgN0VcAFqWFwQ4g3CJjXAsqz+0JyXD2vUmYyuQ03hElQAV0baSfKt354i1dsBS9S4TnXPrgmuM4VhEO+jYH6pDQutYlimcsR6XLU8dCdsyfI/kGEAQBN7Q1Xj8HkvpSwUlAD6B0hWc2/+V6DItxuasMVBOM2RcWQN7W9rpcbF/JikJm0ZE+GG2HrIKY4x5Ygzqf5sCVgxkyazUK5moZRnvREpD9Nyd4YIIyy0mKCsNk5/M1yw9+swA3OVOpYH9cVTXCsUCTG/wWHfBw6CqPWrNet5EKAVELdReFo6twtNUYc8UihCMXyepVFKjJn0U5vowQK5x/UDrZWGuM4DJgA3799bd178OiIK/00/3jcZ5FzlvrEXfbJ3ubql0k4fgFTX2blSSTp7wAAAABJRU5ErkJggg=="},b74f:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgBtVZdbtpAEJ6xCUHlofQGzglKbuDcoDlBjQSobwGpBUQU4YgWKH0IvFUQqXCC5gbhBqEnqG9QPwb8M51d44gSI0xwPwm87C7z7czszGeEHTAqZi4DkHNTqha1nnI96/vAtHbZwW3G0+njC0LS+acO8TADn6bjb5eTWETFj20d1dQPANJWUxZ/5rzVjjJAvI+N5HmYe9rv0zkTzrcSFWvdFiKZq6UJoTu97V3NIAaKjbYOvmogwnv5bwWMUbc5fUZU+vTFAAXZE7ABqTruRYdgJ2HtcwVRuRFjQu8sPKgkMhpd7YjgXoQLyTsf9a/u4ACUGnxokoe2nMXydDIwbUUsMEkryAlODiURENFgD4QdLZ0+qog5ZbWmiy8VF9eQEMgnaYsQg5xxbvKcmwcez8Zfm2eQIEq1zgMnJ8/he6P46GurM/yChEEA0mYqo+YVIkXefyKw4T8izBHw/c9BwmCbr5+IVFn1cvotJA0CTTzcR28u66hU7/zhR04kTdx5SABBbdJvHs75kp3K0BHRUDzTx5kWJISgNhkY2JZE7tIZIKBF4FfK3O/gQJRr7Xd8fIPDZWUfHdkA1nudqCduQ5BDQnO5XAxfEkaD7aTYDopujlQIe+Y/3VuQoaL8pEAiLF6ekedOuUnaquPYuwSuVO9dcFRMQcIqcD3qXZrh2jM9+sBJdH0yw3a/gcjuIYXyON3iApV9jWuyettvDtb3RCpsSOiBr/MVzRNffQz6ocVEJ+v71oVS5MRHrxClYVuJNsElQOtEm14w0TC7cMzBlrym4AUIvVjl0mYNK+ySFwX2RLneuUFVvQ/0S7nLLpYncTRsX480ESqRCyCvOuo3Y4vk3h6JXLxied5XieN7xMXHNWLFfSvaxF+amCCyjEpAPQAAAABJRU5ErkJggg=="},b88e:function(e,t,r){"use strict";r("2f06")},c03c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"self-like-list"}},[e.isLoading?a("Spinner"):e._l(e.likes,(function(t){return a("div",{key:t.index,staticClass:"like"},[a("router-link",{attrs:{to:{name:"user",params:{id:t.User.id}}}},[a("div",{staticClass:"avatar"},[a("div",{staticClass:"avatar-img"},[a("img",{attrs:{src:e._f("emptyImage")(t.User.avatar),alt:""}})])])]),a("div",{staticClass:"like-main"},[a("router-link",{attrs:{to:{name:"Reply",params:{id:t.TweetId}}}},[a("div",{staticClass:"like-user-info"},[a("div",{staticClass:"name"},[e._v(e._s(t.User.name))]),a("div",{staticClass:"account"},[e._v(" @"+e._s(t.User.account)),a("span",[e._v("‧"+e._s(e._f("fromNow")(t.createdAt)))])])]),a("div",{staticClass:"like-content scrollbar"},[e._v(" "+e._s(t.description)+" ")])]),a("div",{staticClass:"like-status"},[a("div",{staticClass:"replies state"},[a("img",{staticClass:"replies-img",attrs:{src:r("b74f"),alt:"chat-icon"},on:{click:function(r){return e.clickChatBtn(t.TweetId)}}}),a("div",{staticClass:"replies-count count"},[e._v(e._s(t.RepliesCount))])]),a("div",{staticClass:"likes state"},[t.isliked?a("img",{staticClass:"likes-img",attrs:{src:r("4167"),alt:"heart-icon",disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.removeLike(t)}}}):a("img",{staticClass:"likes-img",attrs:{src:r("b4af"),alt:"heart-icon",disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.addLike(t)}}}),a("div",{staticClass:"likes-count count"},[e._v(e._s(t.LikesCount))])])])],1)],1)})),a("ReplyModal",{attrs:{ReplyModalSwitch:e.ReplyModal,tweet:e.tweet},on:{"after-click-background":e.afterClickClose,"after-click-close":e.afterClickClose,"after-tweetReply-post":e.afterTweetReplyPost}})],2)},s=[],n=r("1da1"),i=(r("96cf"),r("a9e3"),r("7db0"),r("2375")),o=r("2797"),c=r("2708"),u=r("4cce"),l=r("2fa3"),A=r("7482"),d={mixins:[c["b"],c["a"]],components:{ReplyModal:o["a"],Spinner:i["a"]},data:function(){return{likes:[],tweet:{},ReplyModal:!1,userId:Number(this.$route.params.id),isProcessing:!1,isLoading:!0}},created:function(){this.fetchUserLikes(this.userId)},beforeRouteUpdate:function(e,t,r){console.log(e,t);var a=e.params.id;this.fetchUserLikes(a),r()},methods:{fetchUserLikes:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,u["a"].getUserLikes({userId:e});case 4:a=r.sent,s=a.data,console.log("fetchUserLikes",s),t.likes=s,console.log("likes",t.likes),t.isLoading=!1,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),t.isLoading=!1,l["a"].fire({icon:"error",title:"無法取得推文，請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()},addLike:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("like",e),r.prev=1,t.isProcessing=!0,a=e.TweetId,r.next=6,A["a"].addLike({tweetId:a});case 6:if(s=r.sent,n=s.data,console.log("add data",n),"success"===n.status){r.next=11;break}throw new Error(n.message);case 11:e.LikesCount+=1,e.isliked=!0,t.isProcessing=!1,r.next=21;break;case 16:r.prev=16,r.t0=r["catch"](1),t.isProcessing=!1,console.log(r.t0),l["a"].fire({icon:"error",title:"無法喜歡,請稍後在試"});case 21:case"end":return r.stop()}}),r,null,[[1,16]])})))()},removeLike:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("like",e),r.prev=1,t.isProcessing=!0,a=e.TweetId,r.next=6,A["a"].removeLike({tweetId:a});case 6:if(s=r.sent,console.log("delete reponse",s),n=s.data,"success"===n.status){r.next=11;break}throw new Error(n.message);case 11:e.isliked=!1,e.LikesCount-=1,t.isProcessing=!1,r.next=21;break;case 16:r.prev=16,r.t0=r["catch"](1),t.isProcessing=!1,console.log(r.t0),l["a"].fire({icon:"error",title:"無法取消喜歡,請稍後在試"});case 21:case"end":return r.stop()}}),r,null,[[1,16]])})))()},clickChatBtn:function(e){this.ReplyModal=!0;var t=this.likes.find((function(t){return t.TweetId===e}));this.tweet=t,console.log("clickBtn tweet",this.tweet),console.log("clickBtn modalTweet",t)},afterClickClose:function(){this.ReplyModal=!1},afterTweetReplyPost:function(){this.ReplyModal=!1,this.$emit("after-tweetReply-post"),this.fetchUserLikes(this.userId)}}},f=d,p=(r("5a59"),r("2877")),g=Object(p["a"])(f,a,s,!1,null,"529c3bc2",null);t["default"]=g.exports},c8d2:function(e,t,r){var a=r("d039"),s=r("5899"),n="​᠎";e.exports=function(e){return a((function(){return!!s[e]()||n[e]()!=n||s[e].name!==e}))}}}]);
//# sourceMappingURL=chunk-f0238b1a.4e7dd08b.js.map