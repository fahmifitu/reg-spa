(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{24:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(3),s=n.n(i);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e,n,o,r,i,s){try{var a=t[i](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(o,r)}function l(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===c(t)&&(n=t,t=""),n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){a(t,e,n[e])})}return t}({url:t,title:e,width:600,height:720},n);var o=void 0!==window.screenLeft?window.screenLeft:window.screen.left,r=void 0!==window.screenTop?window.screenTop:window.screen.top,i=window.innerWidth||document.documentElement.clientWidth||window.screen.width,s=window.innerHeight||document.documentElement.clientHeight||window.screen.height;n.left=i/2-n.width/2+o,n.top=s/2-n.height/2+r;var u=Object.keys(n).reduce(function(t,e){return t.push("".concat(e,"=").concat(n[e])),t},[]).join(","),l=window.open(t,e,u);return window.focus&&l.focus(),l}var m={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t,e=(t=r.a.mark(function t(){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=l("",this.$t("login")),t.next=3,this.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 3:n=t.sent,e.location.href=n;case 5:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function s(t){u(i,o,r,s,a,"next",t)}function a(t){u(i,o,r,s,a,"throw",t)}s(void 0)})});return function(){return e.apply(this,arguments)}}(),onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}},d=n(1);function f(t,e,n,o,r,i,s){try{var a=t[i](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(o,r)}var h={middleware:"guest",components:{LoginWithGithub:Object(d.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return this.githubAuth?e("button",{staticClass:"btn btn-dark ml-auto",attrs:{type:"button"},on:{click:this.login}},[this._v("\n  "+this._s(this.$t("login_with"))+"\n  "),e("fa",{attrs:{icon:["fab","github"]}})],1):this._e()},[],!1,null,null,null).exports},metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new s.a({email:"",password:""}),remember:!1}},methods:{login:function(){var t,e=(t=r.a.mark(function t(){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/login");case 2:return e=t.sent,n=e.data,this.$store.dispatch("auth/saveToken",{token:n.token,remember:this.remember}),t.next=7,this.$store.dispatch("auth/fetchUser");case 7:this.$router.push({name:"home"});case 8:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function s(t){f(i,o,r,s,a,"next",t)}function a(t){f(i,o,r,s,a,"throw",t)}s(void 0)})});return function(){return e.apply(this,arguments)}}()}},p=Object(d.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 m-auto"},[n("card",{attrs:{title:t.$t("login")}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)},keydown:function(e){return t.form.onKeydown(e)}}},[n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),n("div",{staticClass:"form-group row"},[n("div",{staticClass:"col-md-3"}),t._v(" "),n("div",{staticClass:"col-md-7 d-flex"},[n("checkbox",{attrs:{name:"remember"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("\n              "+t._s(t.$t("remember_me"))+"\n            ")]),t._v(" "),n("router-link",{staticClass:"small ml-auto my-auto",attrs:{to:{name:"password.request"}}},[t._v("\n              "+t._s(t.$t("forgot_password"))+"\n            ")])],1)]),t._v(" "),n("div",{staticClass:"form-group row"},[n("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[n("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")]),t._v(" "),n("login-with-github")],1)])])])],1)])},[],!1,null,null,null);e.default=p.exports}}]);