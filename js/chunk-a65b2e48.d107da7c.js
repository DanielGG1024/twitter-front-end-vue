(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a65b2e48"],{"03d5":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGfSURBVHgB7duBjcIwDIVh5ya6ETICI3QzwgY3AiPcRr5WwlJOoqVNU9tJ3ichJECN9VMEhUIEAAAAAAAA4EygE5g5zlfL5TeE8EOOmM82D3Dn/+7khPls84I3fs880ps4IlKBLyrzvXL7ZBnptfa0cnckxUEib1OPtLHniBtpmhdMXiLtiJPIgodIbuNkA5pFch9HWERqJo7QjNRcHKERqdk44spIzccRV0TqJo6oGam7OKJGpG7jiDORuo8jSiINE0cciTRcHLEnEo8aR+yING4cURgp0UgORko0op2REhkq/U66Fq70mP7w53ernJuflFQcjDNWpMI4Y0TaESexo19LVPGBT8jDReKCw4dhIvGJY6vuI3GFA89uI9WIk22rr0g142Tb7CPSFXGybbcd6co42RptRtKIk63VViTNONmabUSyiJOt7TuSZZxsBp+RPMTJZvEViddPA1aPk830KVKkArVPA148QggTKXut+dh4SCQtvH4acCJjG3uS+WnAiZyoOdvZP7Msz8rycnvOu/iTHPE8GwAAAAAAAMApfy4khCWh5LFdAAAAAElFTkSuQmCC"},"0d3b":function(e,t,r){var a=r("d039"),n=r("b622"),s=r("c430"),i=n("iterator");e.exports=!a((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,a){t["delete"]("b"),r+=a+e})),s&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[i]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},1511:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"window demo"},[r("div",{staticClass:"user"},[r("UserLeftColumn",{attrs:{userId:e.userId,currentUserId:e.currentUserId}}),r("div",{staticClass:"center-column",attrs:{id:"center-column"}},[r("UserHeader",{attrs:{user:e.user}}),r("div",{staticClass:"user-self"},[r("UserInfo",{attrs:{user:e.user,userId:e.userId,currentUserId:e.currentUserId},on:{"after-click-setInfoBtn":e.clickSetModal}}),r("UserTab")],1),r("div",{staticClass:"user-self-switch"},[r("router-view",{staticClass:"scrollbar"})],1)],1),r("Popular")],1),r("UserInfoSetModal",{directives:[{name:"show",rawName:"v-show",value:e.showInfoSetModal,expression:"showInfoSetModal"}],attrs:{showInfoSetModal:e.showInfoSetModal,initialModalUser:e.modalUser},on:{"after-click-close":e.clickSetModal,"after-submit":e.handleAfterSubmit}})],1)},n=[],s=r("1da1"),i=r("5530"),o=(r("96cf"),r("a9e3"),r("b0c0"),r("232c")),c=r("3e69"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-info",attrs:{id:"user-info"}},[r("img",{staticClass:"cover-photo",attrs:{src:e.user.cover,alt:"cover-photo"}}),r("img",{staticClass:"user-avatar",attrs:{src:e.user.avatar,alt:"user-avatar"}}),r("button",{staticClass:"btn-follow",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.clickSetInfoModal.apply(null,arguments)}}},[e._v(" 編輯個人資料 ")]),r("div",{staticClass:"user-description"},[r("div",{staticClass:"user-name"},[e._v(e._s(e.user.name))]),r("div",{staticClass:"user-account"},[e._v("@"+e._s(e.user.account))]),r("div",{staticClass:"user-introduce"},[e._v(" "+e._s(e.user.introduction)+" ")]),r("div",{staticClass:"user-follow"},[r("router-link",{staticClass:"link-btn",attrs:{to:{name:"follower"}}},[r("div",{staticClass:"iFollow"},[r("span",[e._v(e._s(e.user.followingsCount)+"個")]),e._v(" 跟隨中")])]),r("router-link",{staticClass:"link-btn",attrs:{to:{name:"following"}}},[r("div",{staticClass:"follow-me"},[r("span",[e._v(e._s(e.user.followersCount)+"位")]),e._v(" 追隨者")])])],1)])])},l=[],f=r("2fa3"),h={props:{user:{type:Object,reqiured:!0},userId:{type:Number,required:!0},currentUserId:{type:Number,required:!0}},methods:{clickSetInfoModal:function(){this.userId===this.currentUserId?this.$emit("after-click-setInfoBtn"):f["a"].fire({icon:"error",title:"只能編輯自己的個人資料，請返回個人資料頁編輯"})}}},d=h,p=(r("3b2b"),r("2877")),v=Object(p["a"])(d,u,l,!1,null,"00f79aef",null),m=v.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-tabs"}},[r("router-link",{attrs:{to:{name:"tweetList"}}},[r("div",{staticClass:"tab user-tweets",class:{clicked:"tweetList"===this.$route.name}},[e._v("推文")])]),r("router-link",{attrs:{to:{name:"replies"}}},[r("div",{staticClass:"tab user-replies",class:{clicked:"replies"===this.$route.name}},[e._v("推文與回覆")])]),r("router-link",{attrs:{to:{name:"likes"}}},[r("div",{staticClass:"tab user-likes",class:{clicked:"likes"===this.$route.name}},[e._v("喜歡的內容")])])],1)},A=[],b=(r("d455"),{}),w=Object(p["a"])(b,g,A,!1,null,"3d11e54c",null),U=w.exports,C=r("b12b"),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-main"},[a("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"modal-header"},[a("div",{staticClass:"close-icon",on:{click:e.clickClose}},[a("img",{staticClass:"close",attrs:{src:r("98f5"),alt:""}})]),a("div",{staticClass:"title"},[e._v("編輯個人資料")]),a("button",{staticClass:"save-submit"},[e._v("儲存")])]),a("div",{staticClass:"modal-banner"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"banner-container"},[a("img",{staticClass:"banner",attrs:{src:e.modalUser.cover,alt:"cover-photo"}})]),a("div",{staticClass:"banner-btn-group"},[a("label",{attrs:{for:"user-cover"}},[a("input",{staticClass:"form-control-file d-none",attrs:{type:"file",name:"cover",accept:"image/*",id:"user-cover"},on:{change:e.handleCoverChange}}),a("img",{staticClass:"change-btn",attrs:{src:r("f543"),alt:"change-btn"}})]),a("div",{staticClass:"btn",on:{click:e.reset}},[a("img",{staticClass:"change-btn delete-btn",attrs:{src:r("03d5"),alt:"change-btn"}})])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"user-avatar"}},[a("input",{staticClass:"form-control-file d-none",attrs:{type:"file",name:"avatar",accept:"image/*",id:"user-avatar"},on:{change:e.handleAvatarChange}}),e.modalUser.avatar?a("img",{staticClass:"avatar",attrs:{src:e.modalUser.avatar,alt:"user-avatar"}}):e._e(),a("img",{staticClass:"change-btn avatar-change",attrs:{src:r("f543"),alt:"change-btn"}})])])]),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"name"},[a("div",{staticClass:"title"},[e._v("名稱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.modalUser.name,expression:"modalUser.name"}],staticClass:"content",attrs:{type:"text",name:"name"},domProps:{value:e.modalUser.name},on:{input:function(t){t.target.composing||e.$set(e.modalUser,"name",t.target.value)}}}),a("div",{staticClass:"footer"},[e._v("8/50")])]),a("div",{staticClass:"description"},[a("div",{staticClass:"title"},[e._v("自我介紹")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.modalUser.introduction,expression:"modalUser.introduction"}],staticClass:"content",attrs:{name:"introduction",type:"textarea"},domProps:{value:e.modalUser.introduction},on:{input:function(t){t.target.composing||e.$set(e.modalUser,"introduction",t.target.value)}}}),a("div",{staticClass:"footer"},[e._v("0/160")])])])])])])},y=[],R=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("498a"),{name:"UserInfoSetModal",props:{showInfoSetModal:{type:Boolean,required:!0},initialModalUser:{type:Object,default:function(){return{id:-1,name:"",avatar:"",introduction:"",cover:""}}}},data:function(){return{modalUser:{id:-1,name:"",avatar:"",introduction:"",cover:""}}},created:function(){this.modalUser=Object(i["a"])(Object(i["a"])({},this.modalUser),this.initialModalUser)},watch:{initialModalUser:function(e){this.modalUser=Object(i["a"])(Object(i["a"])({},this.modalUser),e)}},methods:{clickClose:function(){this.$emit("after-click-close")},handleAvatarChange:function(e){var t=e.target.files;if(0===t.length)this.modalUser.avatar="";else{var r=window.URL.createObjectURL(t[0]);this.modalUser.avatar=r}},handleCoverChange:function(e){var t=e.target.files;if(0===t.length)this.modalUser.cover="";else{var r=window.URL.createObjectURL(t[0]);this.modalUser.cover=r}},handleSubmit:function(e){var t=this.modalUser.name,r=this.modalUser.introduction;if(0!==t.trim().length)if(t.length>50)f["a"].fire({icon:"error",title:"姓名字數不可超過50字"});else if(r.length>140)f["a"].fire({icon:"error",title:"描述不可超過140字"});else{var a=e.target,n=new FormData(a);this.$emit("after-submit",n)}else f["a"].fire({icon:"error",title:"請輸入姓名"})},reset:function(){this.modalUser.cover=""}}}),I=R,S=(r("5594"),Object(p["a"])(I,k,y,!1,null,"3d95c812",null)),B=S.exports,L=r("2f62"),O=r("4cce"),j={name:"User",components:{UserLeftColumn:o["a"],UserHeader:c["a"],UserInfo:m,UserTab:U,Popular:C["a"],UserInfoSetModal:B},data:function(){return{showInfoSetModal:!1,userId:Number(this.$route.params.id),user:{},currentUserId:-1,modalUser:{id:-1,name:"",avatar:"",cover:"",introduction:""}}},computed:Object(i["a"])({},Object(L["b"])(["currentUser","isAuthenticated"])),created:function(){this.currentUserId=this.currentUser.id,this.fetchUserInfo(this.userId),console.log("userId",this.currentUserId)},beforeRouteUpdate:function(e,t,r){console.log(e,t);var a=e.params.id;this.fetchUserInfo(a),this.userId=Number(a),r()},methods:{fetchUserInfo:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,o,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,O["a"].get({userId:e});case 3:a=r.sent,n=a.data,t.user=n,s=n.id,i=n.name,o=n.avatar,c=n.introduction,u=n.cover,t.modalUser={id:s,name:i,avatar:o,introduction:c,cover:u},r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),f["a"].fire({icon:"error",title:"無法取得個人資料，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},clickSetModal:function(){this.showInfoSetModal=!this.showInfoSetModal},handleAfterSubmit:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,O["a"].update({userId:t.currentUserId,formData:e});case 3:if(a=r.sent,n=a.data,console.log("formData-User",e),console.log("handleSubmit",n),"success"===n.status){r.next=9;break}throw new Error(n.message);case 9:t.showInfoSetModal=!1,t.fetchUserInfo(t.userId),r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](0),console.log("modal-error",r.t0),f["a"].fire({icon:"error",title:"無法更新個人資料，請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))()}}},E=j,x=(r("df88"),Object(p["a"])(E,a,n,!1,null,"5e6bdc76",null));t["default"]=x.exports},2505:function(e,t,r){},2737:function(e,t,r){},"2b3d":function(e,t,r){"use strict";r("3ca3");var a,n=r("23e7"),s=r("83ab"),i=r("0d3b"),o=r("da84"),c=r("37e8"),u=r("6eeb"),l=r("19aa"),f=r("5135"),h=r("60da"),d=r("4df4"),p=r("6547").codeAt,v=r("5fb2"),m=r("577e"),g=r("d44e"),A=r("9861"),b=r("69f3"),w=o.URL,U=A.URLSearchParams,C=A.getState,k=b.set,y=b.getterFor("URL"),R=Math.floor,I=Math.pow,S="Invalid authority",B="Invalid scheme",L="Invalid host",O="Invalid port",j=/[A-Za-z]/,E=/[\d+-.A-Za-z]/,x=/\d/,M=/^0x/i,P=/^[0-7]+$/,q=/^\d+$/,F=/^[\dA-Fa-f]+$/,N=/[\0\t\n\r #%/:<>?@[\\\]^|]/,T=/[\0\t\n\r #/:<>?@[\\\]^|]/,Q=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,J=/[\t\n\r]/g,G=function(e,t){var r,a,n;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return L;if(r=_(t.slice(1,-1)),!r)return L;e.host=r}else if($(e)){if(t=v(t),N.test(t))return L;if(r=H(t),null===r)return L;e.host=r}else{if(T.test(t))return L;for(r="",a=d(t),n=0;n<a.length;n++)r+=z(a[n],V);e.host=r}},H=function(e){var t,r,a,n,s,i,o,c=e.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),t=c.length,t>4)return e;for(r=[],a=0;a<t;a++){if(n=c[a],""==n)return e;if(s=10,n.length>1&&"0"==n.charAt(0)&&(s=M.test(n)?16:8,n=n.slice(8==s?1:2)),""===n)i=0;else{if(!(10==s?q:8==s?P:F).test(n))return e;i=parseInt(n,s)}r.push(i)}for(a=0;a<t;a++)if(i=r[a],a==t-1){if(i>=I(256,5-t))return null}else if(i>255)return null;for(o=r.pop(),a=0;a<r.length;a++)o+=r[a]*I(256,3-a);return o},_=function(e){var t,r,a,n,s,i,o,c=[0,0,0,0,0,0,0,0],u=0,l=null,f=0,h=function(){return e.charAt(f)};if(":"==h()){if(":"!=e.charAt(1))return;f+=2,u++,l=u}while(h()){if(8==u)return;if(":"!=h()){t=r=0;while(r<4&&F.test(h()))t=16*t+parseInt(h(),16),f++,r++;if("."==h()){if(0==r)return;if(f-=r,u>6)return;a=0;while(h()){if(n=null,a>0){if(!("."==h()&&a<4))return;f++}if(!x.test(h()))return;while(x.test(h())){if(s=parseInt(h(),10),null===n)n=s;else{if(0==n)return;n=10*n+s}if(n>255)return;f++}c[u]=256*c[u]+n,a++,2!=a&&4!=a||u++}if(4!=a)return;break}if(":"==h()){if(f++,!h())return}else if(h())return;c[u++]=t}else{if(null!==l)return;f++,u++,l=u}}if(null!==l){i=u-l,u=7;while(0!=u&&i>0)o=c[u],c[u--]=c[l+i-1],c[l+--i]=o}else if(8!=u)return;return c},D=function(e){for(var t=null,r=1,a=null,n=0,s=0;s<8;s++)0!==e[s]?(n>r&&(t=a,r=n),a=null,n=0):(null===a&&(a=s),++n);return n>r&&(t=a,r=n),t},K=function(e){var t,r,a,n;if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=R(e/256);return t.join(".")}if("object"==typeof e){for(t="",a=D(e),r=0;r<8;r++)n&&0===e[r]||(n&&(n=!1),a===r?(t+=r?":":"::",n=!0):(t+=e[r].toString(16),r<7&&(t+=":")));return"["+t+"]"}return e},V={},X=h({},V,{" ":1,'"':1,"<":1,">":1,"`":1}),Z=h({},X,{"#":1,"?":1,"{":1,"}":1}),Y=h({},Z,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),z=function(e,t){var r=p(e,0);return r>32&&r<127&&!f(t,e)?e:encodeURIComponent(e)},W={ftp:21,file:null,http:80,https:443,ws:80,wss:443},$=function(e){return f(W,e.scheme)},ee=function(e){return""!=e.username||""!=e.password},te=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},re=function(e,t){var r;return 2==e.length&&j.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},ae=function(e){var t;return e.length>1&&re(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},ne=function(e){var t=e.path,r=t.length;!r||"file"==e.scheme&&1==r&&re(t[0],!0)||t.pop()},se=function(e){return"."===e||"%2e"===e.toLowerCase()},ie=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},oe={},ce={},ue={},le={},fe={},he={},de={},pe={},ve={},me={},ge={},Ae={},be={},we={},Ue={},Ce={},ke={},ye={},Re={},Ie={},Se={},Be=function(e,t,r,n){var s,i,o,c,u=r||oe,l=0,h="",p=!1,v=!1,m=!1;r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(Q,"")),t=t.replace(J,""),s=d(t);while(l<=s.length){switch(i=s[l],u){case oe:if(!i||!j.test(i)){if(r)return B;u=ue;continue}h+=i.toLowerCase(),u=ce;break;case ce:if(i&&(E.test(i)||"+"==i||"-"==i||"."==i))h+=i.toLowerCase();else{if(":"!=i){if(r)return B;h="",u=ue,l=0;continue}if(r&&($(e)!=f(W,h)||"file"==h&&(ee(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=h,r)return void($(e)&&W[e.scheme]==e.port&&(e.port=null));h="","file"==e.scheme?u=we:$(e)&&n&&n.scheme==e.scheme?u=le:$(e)?u=pe:"/"==s[l+1]?(u=fe,l++):(e.cannotBeABaseURL=!0,e.path.push(""),u=Re)}break;case ue:if(!n||n.cannotBeABaseURL&&"#"!=i)return B;if(n.cannotBeABaseURL&&"#"==i){e.scheme=n.scheme,e.path=n.path.slice(),e.query=n.query,e.fragment="",e.cannotBeABaseURL=!0,u=Se;break}u="file"==n.scheme?we:he;continue;case le:if("/"!=i||"/"!=s[l+1]){u=he;continue}u=ve,l++;break;case fe:if("/"==i){u=me;break}u=ye;continue;case he:if(e.scheme=n.scheme,i==a)e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query=n.query;else if("/"==i||"\\"==i&&$(e))u=de;else if("?"==i)e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query="",u=Ie;else{if("#"!=i){e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.path.pop(),u=ye;continue}e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query=n.query,e.fragment="",u=Se}break;case de:if(!$(e)||"/"!=i&&"\\"!=i){if("/"!=i){e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,u=ye;continue}u=me}else u=ve;break;case pe:if(u=ve,"/"!=i||"/"!=h.charAt(l+1))continue;l++;break;case ve:if("/"!=i&&"\\"!=i){u=me;continue}break;case me:if("@"==i){p&&(h="%40"+h),p=!0,o=d(h);for(var g=0;g<o.length;g++){var A=o[g];if(":"!=A||m){var b=z(A,Y);m?e.password+=b:e.username+=b}else m=!0}h=""}else if(i==a||"/"==i||"?"==i||"#"==i||"\\"==i&&$(e)){if(p&&""==h)return S;l-=d(h).length+1,h="",u=ge}else h+=i;break;case ge:case Ae:if(r&&"file"==e.scheme){u=Ce;continue}if(":"!=i||v){if(i==a||"/"==i||"?"==i||"#"==i||"\\"==i&&$(e)){if($(e)&&""==h)return L;if(r&&""==h&&(ee(e)||null!==e.port))return;if(c=G(e,h),c)return c;if(h="",u=ke,r)return;continue}"["==i?v=!0:"]"==i&&(v=!1),h+=i}else{if(""==h)return L;if(c=G(e,h),c)return c;if(h="",u=be,r==Ae)return}break;case be:if(!x.test(i)){if(i==a||"/"==i||"?"==i||"#"==i||"\\"==i&&$(e)||r){if(""!=h){var w=parseInt(h,10);if(w>65535)return O;e.port=$(e)&&w===W[e.scheme]?null:w,h=""}if(r)return;u=ke;continue}return O}h+=i;break;case we:if(e.scheme="file","/"==i||"\\"==i)u=Ue;else{if(!n||"file"!=n.scheme){u=ye;continue}if(i==a)e.host=n.host,e.path=n.path.slice(),e.query=n.query;else if("?"==i)e.host=n.host,e.path=n.path.slice(),e.query="",u=Ie;else{if("#"!=i){ae(s.slice(l).join(""))||(e.host=n.host,e.path=n.path.slice(),ne(e)),u=ye;continue}e.host=n.host,e.path=n.path.slice(),e.query=n.query,e.fragment="",u=Se}}break;case Ue:if("/"==i||"\\"==i){u=Ce;break}n&&"file"==n.scheme&&!ae(s.slice(l).join(""))&&(re(n.path[0],!0)?e.path.push(n.path[0]):e.host=n.host),u=ye;continue;case Ce:if(i==a||"/"==i||"\\"==i||"?"==i||"#"==i){if(!r&&re(h))u=ye;else if(""==h){if(e.host="",r)return;u=ke}else{if(c=G(e,h),c)return c;if("localhost"==e.host&&(e.host=""),r)return;h="",u=ke}continue}h+=i;break;case ke:if($(e)){if(u=ye,"/"!=i&&"\\"!=i)continue}else if(r||"?"!=i)if(r||"#"!=i){if(i!=a&&(u=ye,"/"!=i))continue}else e.fragment="",u=Se;else e.query="",u=Ie;break;case ye:if(i==a||"/"==i||"\\"==i&&$(e)||!r&&("?"==i||"#"==i)){if(ie(h)?(ne(e),"/"==i||"\\"==i&&$(e)||e.path.push("")):se(h)?"/"==i||"\\"==i&&$(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&re(h)&&(e.host&&(e.host=""),h=h.charAt(0)+":"),e.path.push(h)),h="","file"==e.scheme&&(i==a||"?"==i||"#"==i))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==i?(e.query="",u=Ie):"#"==i&&(e.fragment="",u=Se)}else h+=z(i,Z);break;case Re:"?"==i?(e.query="",u=Ie):"#"==i?(e.fragment="",u=Se):i!=a&&(e.path[0]+=z(i,V));break;case Ie:r||"#"!=i?i!=a&&("'"==i&&$(e)?e.query+="%27":e.query+="#"==i?"%23":z(i,V)):(e.fragment="",u=Se);break;case Se:i!=a&&(e.fragment+=z(i,X));break}l++}},Le=function(e){var t,r,a=l(this,Le,"URL"),n=arguments.length>1?arguments[1]:void 0,i=m(e),o=k(a,{type:"URL"});if(void 0!==n)if(n instanceof Le)t=y(n);else if(r=Be(t={},m(n)),r)throw TypeError(r);if(r=Be(o,i,null,t),r)throw TypeError(r);var c=o.searchParams=new U,u=C(c);u.updateSearchParams(o.query),u.updateURL=function(){o.query=String(c)||null},s||(a.href=je.call(a),a.origin=Ee.call(a),a.protocol=xe.call(a),a.username=Me.call(a),a.password=Pe.call(a),a.host=qe.call(a),a.hostname=Fe.call(a),a.port=Ne.call(a),a.pathname=Te.call(a),a.search=Qe.call(a),a.searchParams=Je.call(a),a.hash=Ge.call(a))},Oe=Le.prototype,je=function(){var e=y(this),t=e.scheme,r=e.username,a=e.password,n=e.host,s=e.port,i=e.path,o=e.query,c=e.fragment,u=t+":";return null!==n?(u+="//",ee(e)&&(u+=r+(a?":"+a:"")+"@"),u+=K(n),null!==s&&(u+=":"+s)):"file"==t&&(u+="//"),u+=e.cannotBeABaseURL?i[0]:i.length?"/"+i.join("/"):"",null!==o&&(u+="?"+o),null!==c&&(u+="#"+c),u},Ee=function(){var e=y(this),t=e.scheme,r=e.port;if("blob"==t)try{return new Le(t.path[0]).origin}catch(a){return"null"}return"file"!=t&&$(e)?t+"://"+K(e.host)+(null!==r?":"+r:""):"null"},xe=function(){return y(this).scheme+":"},Me=function(){return y(this).username},Pe=function(){return y(this).password},qe=function(){var e=y(this),t=e.host,r=e.port;return null===t?"":null===r?K(t):K(t)+":"+r},Fe=function(){var e=y(this).host;return null===e?"":K(e)},Ne=function(){var e=y(this).port;return null===e?"":String(e)},Te=function(){var e=y(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Qe=function(){var e=y(this).query;return e?"?"+e:""},Je=function(){return y(this).searchParams},Ge=function(){var e=y(this).fragment;return e?"#"+e:""},He=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(s&&c(Oe,{href:He(je,(function(e){var t=y(this),r=m(e),a=Be(t,r);if(a)throw TypeError(a);C(t.searchParams).updateSearchParams(t.query)})),origin:He(Ee),protocol:He(xe,(function(e){var t=y(this);Be(t,m(e)+":",oe)})),username:He(Me,(function(e){var t=y(this),r=d(m(e));if(!te(t)){t.username="";for(var a=0;a<r.length;a++)t.username+=z(r[a],Y)}})),password:He(Pe,(function(e){var t=y(this),r=d(m(e));if(!te(t)){t.password="";for(var a=0;a<r.length;a++)t.password+=z(r[a],Y)}})),host:He(qe,(function(e){var t=y(this);t.cannotBeABaseURL||Be(t,m(e),ge)})),hostname:He(Fe,(function(e){var t=y(this);t.cannotBeABaseURL||Be(t,m(e),Ae)})),port:He(Ne,(function(e){var t=y(this);te(t)||(e=m(e),""==e?t.port=null:Be(t,e,be))})),pathname:He(Te,(function(e){var t=y(this);t.cannotBeABaseURL||(t.path=[],Be(t,m(e),ke))})),search:He(Qe,(function(e){var t=y(this);e=m(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Be(t,e,Ie)),C(t.searchParams).updateSearchParams(t.query)})),searchParams:He(Je),hash:He(Ge,(function(e){var t=y(this);e=m(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Be(t,e,Se)):t.fragment=null}))}),u(Oe,"toJSON",(function(){return je.call(this)}),{enumerable:!0}),u(Oe,"toString",(function(){return je.call(this)}),{enumerable:!0}),w){var _e=w.createObjectURL,De=w.revokeObjectURL;_e&&u(Le,"createObjectURL",(function(e){return _e.apply(w,arguments)})),De&&u(Le,"revokeObjectURL",(function(e){return De.apply(w,arguments)}))}g(Le,"URL"),n({global:!0,forced:!i,sham:!s},{URL:Le})},"2e75":function(e,t,r){},"3b2b":function(e,t,r){"use strict";r("2505")},"498a":function(e,t,r){"use strict";var a=r("23e7"),n=r("58a8").trim,s=r("c8d2");a({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},"4df4":function(e,t,r){"use strict";var a=r("0366"),n=r("7b0b"),s=r("9bdd"),i=r("e95a"),o=r("50c4"),c=r("8418"),u=r("9a1f"),l=r("35a1");e.exports=function(e){var t,r,f,h,d,p,v=n(e),m="function"==typeof this?this:Array,g=arguments.length,A=g>1?arguments[1]:void 0,b=void 0!==A,w=l(v),U=0;if(b&&(A=a(A,g>2?arguments[2]:void 0,2)),void 0==w||m==Array&&i(w))for(t=o(v.length),r=new m(t);t>U;U++)p=b?A(v[U],U):v[U],c(r,U,p);else for(h=u(v,w),d=h.next,r=new m;!(f=d.call(h)).done;U++)p=b?s(h,A,[f.value,U],!0):f.value,c(r,U,p);return r.length=U,r}},5594:function(e,t,r){"use strict";r("2737")},"5fb2":function(e,t,r){"use strict";var a=2147483647,n=36,s=1,i=26,o=38,c=700,u=72,l=128,f="-",h=/[^\0-\u007E]/,d=/[.\u3002\uFF0E\uFF61]/g,p="Overflow: input needs wider integers to process",v=n-s,m=Math.floor,g=String.fromCharCode,A=function(e){var t=[],r=0,a=e.length;while(r<a){var n=e.charCodeAt(r++);if(n>=55296&&n<=56319&&r<a){var s=e.charCodeAt(r++);56320==(64512&s)?t.push(((1023&n)<<10)+(1023&s)+65536):(t.push(n),r--)}else t.push(n)}return t},b=function(e){return e+22+75*(e<26)},w=function(e,t,r){var a=0;for(e=r?m(e/c):e>>1,e+=m(e/t);e>v*i>>1;a+=n)e=m(e/v);return m(a+(v+1)*e/(e+o))},U=function(e){var t=[];e=A(e);var r,o,c=e.length,h=l,d=0,v=u;for(r=0;r<e.length;r++)o=e[r],o<128&&t.push(g(o));var U=t.length,C=U;U&&t.push(f);while(C<c){var k=a;for(r=0;r<e.length;r++)o=e[r],o>=h&&o<k&&(k=o);var y=C+1;if(k-h>m((a-d)/y))throw RangeError(p);for(d+=(k-h)*y,h=k,r=0;r<e.length;r++){if(o=e[r],o<h&&++d>a)throw RangeError(p);if(o==h){for(var R=d,I=n;;I+=n){var S=I<=v?s:I>=v+i?i:I-v;if(R<S)break;var B=R-S,L=n-S;t.push(g(b(S+B%L))),R=m(B/L)}t.push(g(b(R))),v=w(d,y,C==U),d=0,++C}}++d,++h}return t.join("")};e.exports=function(e){var t,r,a=[],n=e.toLowerCase().replace(d,".").split(".");for(t=0;t<n.length;t++)r=n[t],a.push(h.test(r)?"xn--"+U(r):r);return a.join(".")}},"8ba7":function(e,t,r){},9861:function(e,t,r){"use strict";r("e260");var a=r("23e7"),n=r("d066"),s=r("0d3b"),i=r("6eeb"),o=r("e2cc"),c=r("d44e"),u=r("9ed3"),l=r("69f3"),f=r("19aa"),h=r("5135"),d=r("0366"),p=r("f5df"),v=r("825a"),m=r("861d"),g=r("577e"),A=r("7c73"),b=r("5c6c"),w=r("9a1f"),U=r("35a1"),C=r("b622"),k=n("fetch"),y=n("Request"),R=y&&y.prototype,I=n("Headers"),S=C("iterator"),B="URLSearchParams",L=B+"Iterator",O=l.set,j=l.getterFor(B),E=l.getterFor(L),x=/\+/g,M=Array(4),P=function(e){return M[e-1]||(M[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},q=function(e){try{return decodeURIComponent(e)}catch(t){return e}},F=function(e){var t=e.replace(x," "),r=4;try{return decodeURIComponent(t)}catch(a){while(r)t=t.replace(P(r--),q);return t}},N=/[!'()~]|%20/g,T={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Q=function(e){return T[e]},J=function(e){return encodeURIComponent(e).replace(N,Q)},G=function(e,t){if(t){var r,a,n=t.split("&"),s=0;while(s<n.length)r=n[s++],r.length&&(a=r.split("="),e.push({key:F(a.shift()),value:F(a.join("="))}))}},H=function(e){this.entries.length=0,G(this.entries,e)},_=function(e,t){if(e<t)throw TypeError("Not enough arguments")},D=u((function(e,t){O(this,{type:L,iterator:w(j(e).entries),kind:t})}),"Iterator",(function(){var e=E(this),t=e.kind,r=e.iterator.next(),a=r.value;return r.done||(r.value="keys"===t?a.key:"values"===t?a.value:[a.key,a.value]),r})),K=function(){f(this,K,B);var e,t,r,a,n,s,i,o,c,u=arguments.length>0?arguments[0]:void 0,l=this,d=[];if(O(l,{type:B,entries:d,updateURL:function(){},updateSearchParams:H}),void 0!==u)if(m(u))if(e=U(u),"function"===typeof e){t=w(u,e),r=t.next;while(!(a=r.call(t)).done){if(n=w(v(a.value)),s=n.next,(i=s.call(n)).done||(o=s.call(n)).done||!s.call(n).done)throw TypeError("Expected sequence with length 2");d.push({key:g(i.value),value:g(o.value)})}}else for(c in u)h(u,c)&&d.push({key:c,value:g(u[c])});else G(d,"string"===typeof u?"?"===u.charAt(0)?u.slice(1):u:g(u))},V=K.prototype;if(o(V,{append:function(e,t){_(arguments.length,2);var r=j(this);r.entries.push({key:g(e),value:g(t)}),r.updateURL()},delete:function(e){_(arguments.length,1);var t=j(this),r=t.entries,a=g(e),n=0;while(n<r.length)r[n].key===a?r.splice(n,1):n++;t.updateURL()},get:function(e){_(arguments.length,1);for(var t=j(this).entries,r=g(e),a=0;a<t.length;a++)if(t[a].key===r)return t[a].value;return null},getAll:function(e){_(arguments.length,1);for(var t=j(this).entries,r=g(e),a=[],n=0;n<t.length;n++)t[n].key===r&&a.push(t[n].value);return a},has:function(e){_(arguments.length,1);var t=j(this).entries,r=g(e),a=0;while(a<t.length)if(t[a++].key===r)return!0;return!1},set:function(e,t){_(arguments.length,1);for(var r,a=j(this),n=a.entries,s=!1,i=g(e),o=g(t),c=0;c<n.length;c++)r=n[c],r.key===i&&(s?n.splice(c--,1):(s=!0,r.value=o));s||n.push({key:i,value:o}),a.updateURL()},sort:function(){var e,t,r,a=j(this),n=a.entries,s=n.slice();for(n.length=0,r=0;r<s.length;r++){for(e=s[r],t=0;t<r;t++)if(n[t].key>e.key){n.splice(t,0,e);break}t===r&&n.push(e)}a.updateURL()},forEach:function(e){var t,r=j(this).entries,a=d(e,arguments.length>1?arguments[1]:void 0,3),n=0;while(n<r.length)t=r[n++],a(t.value,t.key,this)},keys:function(){return new D(this,"keys")},values:function(){return new D(this,"values")},entries:function(){return new D(this,"entries")}},{enumerable:!0}),i(V,S,V.entries),i(V,"toString",(function(){var e,t=j(this).entries,r=[],a=0;while(a<t.length)e=t[a++],r.push(J(e.key)+"="+J(e.value));return r.join("&")}),{enumerable:!0}),c(K,B),a({global:!0,forced:!s},{URLSearchParams:K}),!s&&"function"==typeof I){var X=function(e){if(m(e)){var t,r=e.body;if(p(r)===B)return t=e.headers?new I(e.headers):new I,t.has("content-type")||t.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),A(e,{body:b(0,String(r)),headers:b(0,t)})}return e};if("function"==typeof k&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return k(e,arguments.length>1?X(arguments[1]):{})}}),"function"==typeof y){var Z=function(e){return f(this,Z,"Request"),new y(e,arguments.length>1?X(arguments[1]):{})};R.constructor=Z,Z.prototype=R,a({global:!0,forced:!0},{Request:Z})}}e.exports={URLSearchParams:K,getState:j}},"98f5":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBxdfLEYIwEAbgf6nAEuxMPOjdDijBsx6MldmCHWCCBHmEZDdsxj0AG5Z8M5lkZwD+FOQu7RkHtLja7G3Thm54okCMHQ+/7G0/qqm18Q4FjM+r7yh2szrTFxZBfzBwCdSr4CHUBQ0FJ9Q2ewS+zV72NdSu8JEmuSIeRe8wtBhXwFOoe6TghxtwDroK5+JcNApLcQmahLm4FGXBKby/GwhQNpzAIUVFMBtnoGI4iTNRFxWkQXb6nHeLUkGs7t5psDocf3PxUDbOO06Rc9rPIm6v6QbCaA457ZW2osOQECcNNAcnLVSKkyYqwUkb5eJUAmXhpdAU7nt1gwKoi24O32gW8PxPQgmN4R+H8M/Gca8TfQAAAABJRU5ErkJggg=="},"9bdd":function(e,t,r){var a=r("825a"),n=r("2a62");e.exports=function(e,t,r,s){try{return s?t(a(r)[0],r[1]):t(r)}catch(i){n(e,"throw",i)}}},acb6:function(e,t,r){},b12b:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"popular right-column",attrs:{id:"right-column"}},[e._m(0),e._l(e.topUsers,(function(t){return r("div",{key:t.id,staticClass:"popular-person"},[r("div",{staticClass:"popular-person-detail"},[r("div",{staticClass:"avatar"},[r("img",{attrs:{src:t.avatar,alt:"avatar"}})]),r("div",{staticClass:"popular-account"},[r("div",{staticClass:"name"},[e._v(e._s(t.name))]),r("div",{staticClass:"tag-name"},[e._v("@"+e._s(t.account))])]),t.isFollowed?r("button",{staticClass:"popular-follow-btn isFollowed",on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.removeFollow(t.id)}}},[e._v(" 正在跟隨 ")]):r("button",{staticClass:"popular-follow-btn",on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.addFollow(t.id)}}},[e._v(" 跟隨 ")])])])}))],2)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"popular-header"},[r("div",{staticClass:"popular-header-title"},[e._v("Popular")])])}],s=r("5530"),i=r("1da1"),o=(r("96cf"),r("a9e3"),r("d81d"),r("2fa3")),c=r("4cce"),u=r("7482"),l={data:function(){return{topUsers:[],currentUserId:Number(this.$route.params.id)}},created:function(){this.fetchTopUsers()},methods:{fetchTopUsers:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].getTopUsers();case 3:r=t.sent,a=r.data,e.topUsers=a,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),o["a"].fire({icon:"error",title:"無法取得推文，請稍後再試"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},addFollow:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a='{\n        "id":"'.concat(e,'"\n      }'),n=JSON.parse(a),r.prev=2,r.next=5,u["a"].addFollow({data_JSON:n});case 5:if(i=r.sent,console.log("popular response",i),"success"===a.status){r.next=9;break}throw new Error(a.message);case 9:t.topUsers=t.topUsers.map((function(t){return t.id!==e?t:Object(s["a"])(Object(s["a"])({},t),{},{isFolowed:!0})})),r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](2),console.log(r.t0),o["a"].fire({icon:"error",title:"無法追蹤使用者,請稍後"});case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()}}},f=l,h=(r("d822"),r("2877")),d=Object(h["a"])(f,a,n,!1,null,"cacb631a",null);t["a"]=d.exports},c8d2:function(e,t,r){var a=r("d039"),n=r("5899"),s="​᠎";e.exports=function(e){return a((function(){return!!n[e]()||s[e]()!=s||n[e].name!==e}))}},d455:function(e,t,r){"use strict";r("8ba7")},d822:function(e,t,r){"use strict";r("2e75")},df88:function(e,t,r){"use strict";r("acb6")},f543:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQOSURBVHgB7Zv/VdswEMe/6eP/ZoOaCRomqDtBXycgG9BOQJiAdALCBMAEpBMkTBAzAXSC610tXoJjWfKPk+NUn/fuOQmSbH+R7qSTDUQikUgkMlRG6AkiSvkwYftijmNjwitbZuw323o0Gi1x7LAoY7ZLtheqz4bthi3BsdFSmDKuj0YovpHU/Pe7ZsM2hTKqPohv4JIPM0cx8TdLtmfzWRBf9Blb31TFjP3TFYYG5f7Chgy1GeWO2tXOhG1B1b3wGkOCch9RJcwYDTB1hy0S5c64jBV14FiljYre9AOHjLn4MhZNe43lPBIV7yznStEh3k7anPicLakoVuZU79mJfocCfE2PfEgLP2fGbMjfHvia7tHRRUyoeZjedNlzSq5tTO2uLUEbjDhtJncJlKF8ntUUubcJmkDVztCHGwSCch/XlA1V9PKTivOmKPc3a2wndDae4J4gdslb9PrkUTYtfE9M/RnqQHlYLpJi4FC523hEXajHIaMN38u8cG8vtrIf4M8zjoeii7D6oDoC/ZecoGdMBEmRO8vdjKIEA8kkugKCKr0IZESZsn3DflQpll3y4ZaFWuCQKHHSM3QAt3NBzVOuU3QAlWQFbGWD+SDKJ54STudwJ8HKSNhupA0KmG4NIpC5obKFZRNSaSuUSOoC7YiToDsSBBIpRA+6g784a2M+JGzqk1dVgShP2vuuln9ypDoTk8+edWQl308WkVpGMaqXDViV1F951pWIWMvpH0oUS+E/tF49fytDxFHrRZoCXSIc51BCRSATXRKEQ4azTy6oNlpLDZdjLibdyiLXU+H72NHuV7YFOqYPgSRazeGAy+z5FROxbBuECRTQ8kG2qLL2EceGqbuuec5WhBZocGgJlFl+n1CLiR3XvYB9+KrkjbR8UFbxN3mwQcLyOyfNw+fd7JnyhxF2xXA5ad8lSi20BHJdrM/yQ8qk8CeDAipDjHuDz95Zl2TmnJ2jOZP+hXAsoYSmQBKS66ynfH6zofYInppAZjfCtxe9i26OaFXkis+VITTUMt1h2qj7eMqK/NMcRA0fr6FDSdqbXiRrJN+hNoF/z/nXtva+mXrK1XT/OiL58CZOBmWC7GqYECyp1AztyaQtrbBeJNi+mPlvi0htwr/UPQvplIM+vCD+wqQxTtlu4dej3qLhqdQNvVffy9686QFT+Uzb16ISto87xSRh1vtrUL0/3WEEWOJAic8HOYgCOYgCOYgCOagj0NHkmdHFvdD+IlP2wBMMHCp/ZmBlK18V5h/YLna+i+qP3Ng9H/9gmMg8a4r9HmRdtlhfhzK9ZYXjGlo2Tm3LF6sPMhWG97Jsfdol3Kj6PdEhIz7VuUfn9cYh5cNthu2r2kMmQ+5f572kaiORSCQSCcZfL7A2GDROaQ0AAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-a65b2e48.d107da7c.js.map