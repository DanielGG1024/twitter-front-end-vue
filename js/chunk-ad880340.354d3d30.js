(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad880340"],{"107c":function(r,e,t){var a=t("d039"),n=t("da84"),s=n.RegExp;r.exports=a((function(){var r=s("(?<a>b)","g");return"b"!==r.exec("b").groups.a||"bc"!=="b".replace(r,"$<a>c")}))},"129f":function(r,e){r.exports=Object.is||function(r,e){return r===e?0!==r||1/r===1/e:r!=r&&e!=e}},"14c3":function(r,e,t){var a=t("c6b6"),n=t("9263");r.exports=function(r,e){var t=r.exec;if("function"===typeof t){var s=t.call(r,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==a(r))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(r,e)}},"18e3":function(r,e,t){},"498a":function(r,e,t){"use strict";var a=t("23e7"),n=t("58a8").trim,s=t("c8d2");a({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},5899:function(r,e){r.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(r,e,t){var a=t("1d80"),n=t("577e"),s=t("5899"),o="["+s+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(r){return function(e){var t=n(a(e));return 1&r&&(t=t.replace(i,"")),2&r&&(t=t.replace(c,"")),t}};r.exports={start:u(1),end:u(2),trim:u(3)}},7696:function(r,e,t){"use strict";var a=t("2fa3");e["a"]={logIn:function(r){var e=r.email,t=r.password;return a["b"].post("users/login",{email:e,password:t})},regist:function(r){var e=r.data_JSON;return a["b"].post("users",e)}}},"841c":function(r,e,t){"use strict";var a=t("d784"),n=t("825a"),s=t("1d80"),o=t("129f"),i=t("577e"),c=t("14c3");a("search",(function(r,e,t){return[function(e){var t=s(this),a=void 0==e?void 0:e[r];return void 0!==a?a.call(e,t):new RegExp(e)[r](i(t))},function(r){var a=n(this),s=i(r),u=t(e,a,s);if(u.done)return u.value;var l=a.lastIndex;o(l,0)||(a.lastIndex=0);var d=c(a,s);return o(a.lastIndex,l)||(a.lastIndex=l),null===d?-1:d.index}]}))},"879c":function(r,e,t){"use strict";t.r(e);var a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"regist"},[r._m(0),t("div",{staticClass:"regist-form"},[t("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),r.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"input-txt",class:{error:r.accountError}},[t("label",{attrs:{for:"account"}},[r._v("帳號 ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:r.account,expression:"account"}],attrs:{type:"text",name:"account",id:"account"},domProps:{value:r.account},on:{focus:r.addFocus,blur:r.removeFocus,input:function(e){e.target.composing||(r.account=e.target.value)}}})]),t("div",{staticClass:"input-wrapper-info"},[t("div",{directives:[{name:"show",rawName:"v-show",value:r.accountError,expression:"accountError"}],staticClass:"error-info"},[r._v("帳號不能為空")])])]),t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"input-txt",class:{error:r.nameError}},[t("label",{attrs:{for:"name"}},[r._v("名稱 ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:r.name,expression:"name"}],attrs:{maxlength:"50",type:"text",name:"name",id:"name"},domProps:{value:r.name},on:{focus:r.addFocus,blur:r.removeFocus,keyup:r.keyupNameWords,input:function(e){e.target.composing||(r.name=e.target.value)}}})]),t("div",{staticClass:"input-wrapper-info"},[t("div",{directives:[{name:"show",rawName:"v-show",value:r.nameError,expression:"nameError"}],staticClass:"error-info"},[r._v("名稱不能為空")]),t("div",{staticClass:"amount"},[r._v(r._s(r.nameWords)+"/50")])])]),t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"input-txt",class:{error:r.emailError}},[t("label",{attrs:{for:"email"}},[r._v("Email ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:r.email,expression:"email"}],attrs:{type:"text",name:"email",id:"email"},domProps:{value:r.email},on:{focus:r.addFocus,blur:r.removeFocus,input:function(e){e.target.composing||(r.email=e.target.value)}}})]),t("div",{staticClass:"input-wrapper-info"},[t("div",{directives:[{name:"show",rawName:"v-show",value:r.emailError,expression:"emailError"}],staticClass:"error-info"},[r._v(r._s(r.error.email))])])]),t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"input-txt",class:{error:r.passwordError}},[t("label",{attrs:{for:"password"}},[r._v("密碼 ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:r.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password"},domProps:{value:r.password},on:{focus:r.addFocus,blur:r.removeFocus,input:function(e){e.target.composing||(r.password=e.target.value)}}})]),t("div",{staticClass:"input-wrapper-info"},[t("div",{directives:[{name:"show",rawName:"v-show",value:r.passwordError,expression:"passwordError"}],staticClass:"error-info"},[r._v("密碼不能為空")])])]),t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"input-txt",class:{error:r.confirPasswordError}},[t("label",{attrs:{for:"confirPassword"}},[r._v("密碼確認 ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:r.confirPassword,expression:"confirPassword"}],attrs:{type:"password",name:"confirPassword",id:"confirPassword"},domProps:{value:r.confirPassword},on:{focus:r.addFocus,blur:r.removeFocus,input:function(e){e.target.composing||(r.confirPassword=e.target.value)}}})]),t("div",{staticClass:"input-wrapper-info"},[t("div",{directives:[{name:"show",rawName:"v-show",value:r.confirPasswordError,expression:"confirPasswordError"}],staticClass:"error-info"},[r._v(" 密碼不能為空 ")])])]),r._m(1)]),t("div",{staticClass:"cancel-wrapper"},[t("router-link",{staticClass:"cancel",attrs:{to:"/login"}},[r._v("取消")])],1)])])},n=[function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"logo-wrapper"},[a("img",{staticClass:"logo",attrs:{src:t("a896"),alt:""}})]),a("h2",{staticClass:"header-title"},[r._v("建立你的帳號")])])},function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"button-wrapper"},[t("button",{staticClass:"form-submit-btn",attrs:{type:"submit"}},[r._v("註冊")])])}],s=t("1da1"),o=(t("96cf"),t("b0c0"),t("498a"),t("ac1f"),t("841c"),t("99af"),t("7696")),i=t("2fa3"),c={data:function(){return{account:"",name:"",email:"",password:"",confirPassword:"",nameWords:"0",accountError:!1,nameError:!1,emailError:!1,passwordError:!1,confirPasswordError:!1,error:{email:""}}},methods:{addFocus:function(r){var e=r.target;e.parentNode.classList.add("focus")},removeFocus:function(r){var e=r.target;e.parentNode.classList.remove("focus")},keyupNameWords:function(){var r=this.name.length;this.nameWords=r},handleSubmit:function(){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a,n,s,c,u,l,d,p,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.account.trim(),a=r.name.trim(),n=r.email.trim(),s=r.password.trim(),c=r.confirPassword.trim(),u=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,r.accountError=""===t,r.nameError=""===a,""===n?(r.emailError=!0,r.error.email="email不能為空"):-1===n.search(u)?(r.emailError=!0,r.error.email="email規格不符"):r.emailError=!1,r.passwordError=""===s,r.confirPasswordError=""===c,!(r.accountError||r.nameError||r.emailError||r.passwordError||r.confirPasswordError)){e.next=13;break}return e.abrupt("return");case 13:return e.prev=13,l='{\n          "account":"'.concat(r.account,'",\n          "name":"').concat(r.name,'",\n          "email":"').concat(r.email,'",\n          "password":"').concat(r.password,'",\n          "checkPassword":"').concat(r.confirPassword,'"\n        }'),d=JSON.parse(l),console.log("data_JSON regist",d),e.next=19,o["a"].regist({data_JSON:d});case 19:if(p=e.sent,console.log(p),200===p.status){e.next=23;break}throw new Error;case 23:return i["a"].fire({icon:"success",title:"註冊成功!"}),e.next=26,o["a"].logIn({email:r.email,password:r.password});case 26:f=e.sent;try{localStorage.setItem("token",f.data.token),r.$store.commit("setCurrentUser",f.data.user),r.$router.push("/main")}catch(v){i["a"].fire({icon:"error",title:"無法轉入主頁,請稍後"})}e.next=34;break;case 30:e.prev=30,e.t0=e["catch"](13),console.log("error.message:",e.t0.message),"Request failed with status code 409"===e.t0.message?i["a"].fire({icon:"warning",title:"account 或 Email已重覆註冊"}):"Request failed with status code 401"===e.t0.message?i["a"].fire({icon:"warning",title:"密碼與密碼確認不符!"}):i["a"].fire({icon:"error",title:"無法註冊帳號,請稍後"});case 34:case"end":return e.stop()}}),e,null,[[13,30]])})))()}}},u=c,l=(t("e629"),t("2877")),d=Object(l["a"])(u,a,n,!1,null,"7dfd2e5c",null);e["default"]=d.exports},9263:function(r,e,t){"use strict";var a=t("577e"),n=t("ad6d"),s=t("9f7f"),o=t("5692"),i=t("7c73"),c=t("69f3").get,u=t("fce3"),l=t("107c"),d=RegExp.prototype.exec,p=o("native-string-replace",String.prototype.replace),f=d,v=function(){var r=/a/,e=/b*/g;return d.call(r,"a"),d.call(e,"a"),0!==r.lastIndex||0!==e.lastIndex}(),m=s.UNSUPPORTED_Y||s.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],x=v||w||m||u||l;x&&(f=function(r){var e,t,s,o,u,l,x,E=this,g=c(E),h=a(r),b=g.raw;if(b)return b.lastIndex=E.lastIndex,e=f.call(b,h),E.lastIndex=b.lastIndex,e;var A=g.groups,C=m&&E.sticky,I=n.call(E),R=E.source,y=0,Q=h;if(C&&(I=I.replace("y",""),-1===I.indexOf("g")&&(I+="g"),Q=h.slice(E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==h.charAt(E.lastIndex-1))&&(R="(?: "+R+")",Q=" "+Q,y++),t=new RegExp("^(?:"+R+")",I)),w&&(t=new RegExp("^"+R+"$(?!\\s)",I)),v&&(s=E.lastIndex),o=d.call(C?t:E,Q),C?o?(o.input=o.input.slice(y),o[0]=o[0].slice(y),o.index=E.lastIndex,E.lastIndex+=o[0].length):E.lastIndex=0:v&&o&&(E.lastIndex=E.global?o.index+o[0].length:s),w&&o&&o.length>1&&p.call(o[0],t,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&A)for(o.groups=l=i(null),u=0;u<A.length;u++)x=A[u],l[x[0]]=o[x[1]];return o}),r.exports=f},"99af":function(r,e,t){"use strict";var a=t("23e7"),n=t("d039"),s=t("e8b5"),o=t("861d"),i=t("7b0b"),c=t("50c4"),u=t("8418"),l=t("65f0"),d=t("1dde"),p=t("b622"),f=t("2d00"),v=p("isConcatSpreadable"),m=9007199254740991,w="Maximum allowed index exceeded",x=f>=51||!n((function(){var r=[];return r[v]=!1,r.concat()[0]!==r})),E=d("concat"),g=function(r){if(!o(r))return!1;var e=r[v];return void 0!==e?!!e:s(r)},h=!x||!E;a({target:"Array",proto:!0,forced:h},{concat:function(r){var e,t,a,n,s,o=i(this),d=l(o,0),p=0;for(e=-1,a=arguments.length;e<a;e++)if(s=-1===e?o:arguments[e],g(s)){if(n=c(s.length),p+n>m)throw TypeError(w);for(t=0;t<n;t++,p++)t in s&&u(d,p,s[t])}else{if(p>=m)throw TypeError(w);u(d,p++,s)}return d.length=p,d}})},"9f7f":function(r,e,t){var a=t("d039"),n=t("da84"),s=n.RegExp;e.UNSUPPORTED_Y=a((function(){var r=s("a","y");return r.lastIndex=2,null!=r.exec("abcd")})),e.BROKEN_CARET=a((function(){var r=s("^r","gy");return r.lastIndex=2,null!=r.exec("str")}))},a896:function(r,e){r.exports="data:image/png;base64,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"},ac1f:function(r,e,t){"use strict";var a=t("23e7"),n=t("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(r,e,t){"use strict";var a=t("825a");r.exports=function(){var r=a(this),e="";return r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.sticky&&(e+="y"),e}},c8d2:function(r,e,t){var a=t("d039"),n=t("5899"),s="​᠎";r.exports=function(r){return a((function(){return!!n[r]()||s[r]()!=s||n[r].name!==r}))}},d784:function(r,e,t){"use strict";t("ac1f");var a=t("6eeb"),n=t("9263"),s=t("d039"),o=t("b622"),i=t("9112"),c=o("species"),u=RegExp.prototype;r.exports=function(r,e,t,l){var d=o(r),p=!s((function(){var e={};return e[d]=function(){return 7},7!=""[r](e)})),f=p&&!s((function(){var e=!1,t=/a/;return"split"===r&&(t={},t.constructor={},t.constructor[c]=function(){return t},t.flags="",t[d]=/./[d]),t.exec=function(){return e=!0,null},t[d](""),!e}));if(!p||!f||t){var v=/./[d],m=e(d,""[r],(function(r,e,t,a,s){var o=e.exec;return o===n||o===u.exec?p&&!s?{done:!0,value:v.call(e,t,a)}:{done:!0,value:r.call(t,e,a)}:{done:!1}}));a(String.prototype,r,m[0]),a(u,d,m[1])}l&&i(u[d],"sham",!0)}},e629:function(r,e,t){"use strict";t("18e3")},fce3:function(r,e,t){var a=t("d039"),n=t("da84"),s=n.RegExp;r.exports=a((function(){var r=s(".","s");return!(r.dotAll&&r.exec("\n")&&"s"===r.flags)}))}}]);
//# sourceMappingURL=chunk-ad880340.354d3d30.js.map