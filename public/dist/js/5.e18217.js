(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{35:function(t,e,r){"use strict";r.r(e);var s=r(0),a=r.n(s),o=r(3),n=r(13),i=r.n(n),l=(r(9),r(6)),m=r.n(l);function c(t,e,r,s,a,o,n){try{var i=t[o](n),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(s,a)}function f(t){return function(){var e=this,r=arguments;return new Promise(function(s,a){var o=t.apply(e,r);function n(t){c(o,s,a,n,i,"next",t)}function i(t){c(o,s,a,n,i,"throw",t)}n(void 0)})}}var d={middleware:"guest",metaInfo:function(){return{title:this.$t("register")}},data:function(){return{sent:!1,form:new o.Form({name:"",national_id:"",phone:"",city:"",address:"",passport_no:"",employer:"",email:"",bank:"",branch:"",password:"",password_confirmation:"",verify_code:"",date_of_birth:""}),mustVerifyPhone:!1}},created:function(){var t=this;this.form.busy=!0,m.a.get("/api/guest").then(function(e){var r=e.data;t.form=new o.Form(r),null==t.form.name?t.mustVerifyPhone=!1:t.mustVerifyPhone=!0,t.form.busy=!1})},methods:{back:function(){this.sent=!1,this.form.verify_code="",this.mustVerifyPhone=!1},resend:function(){var t=f(a.a.mark(function t(){var e,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.sent=!1,this.form.verify_code="",t.next=4,this.form.post("/api/resend");case 4:e=t.sent,1==(r=e.data).valid&&1==r.verify&&setTimeout(function(){this.sent=!0},1e3),0==r.valid&&0==r.verify&&(i.a.fire({type:"error",title:"خطأ في عملية التسجيل!",text:"ارجو اعادة المحاولة"}),this.back()),this.sent=r.sent;case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),verify:function(){var t=f(a.a.mark(function t(){var e,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/register");case 2:e=t.sent,0==(r=e.data).verified&&i.a.fire({type:"error",title:"خطأ في التفعيل!",text:"ارجو التأكد من رمز التفعيل."}),1==r.verified&&1==r.registered&&i.a.fire({type:"success",title:"تم عملية التسجيل بنجاح!",text:"سيتم التواصل معك قريبا.",timer:4e3,onClose:function(){location.reload()}});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),register:function(){var t=f(a.a.mark(function t(){var e,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/validate-registration",{phone:this.form.phone});case 2:e=t.sent,1==(r=e.data).valid&&1==r.verify&&(this.mustVerifyPhone=!0),this.sent=r.sent;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},v=r(1),p=Object(v.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-10 m-auto"},[t.sent?r("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v("\n      "+t._s(t.$t("verify_phone_number"))+"\n    ")]):t._e(),t._v(" "),t.mustVerifyPhone?r("card",{attrs:{title:"2. التفعيل",subtitle:"الرجاء ادخال رمز التفعيل",loading:t.form.busy}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.verify(e)},keydown:function(e){return t.form.onKeydown(e)}}},[r("div",{staticClass:"form-group row justify-content-center"},[r("div",{staticClass:"col-md-10"},[r("label",[t._v(t._s(t.$t("phone")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"},{name:"mask",rawName:"v-mask",value:"(##)###-####",expression:"'(##)###-####'"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phone")},staticStyle:{"text-align":"end"},attrs:{dir:"ltr",type:"text",name:"phone",placeholder:"(91)999-9999"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"phone"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row justify-content-center"},[r("div",{staticClass:"col-md-10"},[r("label",[t._v(t._s(t.$t("verify_code")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.verify_code,expression:"form.verify_code"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("verify_code")},attrs:{type:"text",name:"verify_code"},domProps:{value:t.form.verify_code},on:{input:function(e){e.target.composing||t.$set(t.form,"verify_code",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"verify_code"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row justify-content-center mt-4"},[r("div",{staticClass:"col-md-10 d-flex justify-content-between"},[r("div",[r("a",{staticClass:"btn btn-lg btn-outline-light",on:{click:function(e){return e.preventDefault(),t.back(e)}}},[t._v("\n              عودة\n              ")]),t._v(" "),r("a",{staticClass:"btn btn-lg btn-light",on:{click:function(e){return e.preventDefault(),t.resend(e)}}},[t._v("\n              اعادة ارسال\n              ")])]),t._v(" "),r("v-button",{attrs:{loading:t.form.busy,type:"success"}},[t._v("\n              تأكيد\n            ")])],1)])])]):r("card",{attrs:{title:"1. التسجيل",subtitle:"الرجاء ادخل البيانات المطلوبة",loading:t.form.busy}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)},keydown:function(e){return t.form.onKeydown(e)}}},[r("div",{staticClass:"form-group row justify-content-center"},[r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.$t("name")))]),t._v(" "),r("span",{staticClass:"text-danger text-small"},[t._v("*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.$t("date_of_birth")))]),t._v(" "),r("span",{staticClass:"text-danger text-small"},[t._v("*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date_of_birth,expression:"form.date_of_birth"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("date_of_birth")},attrs:{type:"date",name:"date_of_birth"},domProps:{value:t.form.date_of_birth},on:{input:function(e){e.target.composing||t.$set(t.form,"date_of_birth",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"date_of_birth"}})],1)])]),t._v(" "),r("div",{staticClass:"form-group row justify-content-center"},[r("div",{staticClass:"col-md-10"},[r("label",[t._v(t._s(t.$t("national_id")))]),t._v(" "),r("span",{staticClass:"text-danger text-small"},[t._v("*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.national_id,expression:"form.national_id"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("national_id")},attrs:{type:"text",name:"national_id"},domProps:{value:t.form.national_id},on:{input:function(e){e.target.composing||t.$set(t.form,"national_id",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"national_id"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row justify-content-center"},[r("div",{staticClass:"col-md-10"},[r("label",[t._v(t._s(t.$t("passport_no")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.passport_no,expression:"form.passport_no"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("passport_no")},attrs:{type:"text",name:"passport_no"},domProps:{value:t.form.passport_no},on:{input:function(e){e.target.composing||t.$set(t.form,"passport_no",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"passport_no"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row justify-content-center"},[r("div",{staticClass:"col-md-10"},[r("label",[t._v(t._s(t.$t("employer")))]),t._v(" "),r("span",{staticClass:"text-danger text-small"},[t._v("*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.employer,expression:"form.employer"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("employer")},attrs:{type:"text",name:"employer"},domProps:{value:t.form.employer},on:{input:function(e){e.target.composing||t.$set(t.form,"employer",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"employer"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row justify-content-center"},[r("div",{staticClass:"col-md-10"},[r("label",[t._v(t._s(t.$t("email")))]),t._v(" "),r("span",{staticClass:"text-danger text-small"},[t._v("*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row justify-content-center"},[r("div",{staticClass:"col-md-10"},[r("label",[t._v(t._s(t.$t("phone")))]),t._v(" "),r("span",{staticClass:"text-danger text-small"},[t._v("*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"},{name:"mask",rawName:"v-mask",value:"(##)###-####",expression:"'(##)###-####'"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phone")},staticStyle:{"text-align":"end"},attrs:{dir:"ltr",type:"text",name:"phone",placeholder:"(91)999-9999"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"phone"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row justify-content-center"},[r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.$t("branch")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.branch,expression:"form.branch"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("branch")},attrs:{type:"text",name:"branch"},domProps:{value:t.form.branch},on:{input:function(e){e.target.composing||t.$set(t.form,"branch",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"branch"}})],1)]),t._v(" "),r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.$t("bank")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.bank,expression:"form.bank"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("bank")},attrs:{type:"text",name:"bank"},domProps:{value:t.form.bank},on:{input:function(e){e.target.composing||t.$set(t.form,"bank",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"bank"}})],1)])]),t._v(" "),r("div",{staticClass:"form-group row justify-content-center"},[r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.$t("city")))]),t._v(" "),r("span",{staticClass:"text-danger text-small"},[t._v("*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.city,expression:"form.city"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("city")},attrs:{type:"text",name:"city"},domProps:{value:t.form.city},on:{input:function(e){e.target.composing||t.$set(t.form,"city",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"city"}})],1)]),t._v(" "),r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.$t("address")))]),t._v(" "),r("span",{staticClass:"text-danger text-small"},[t._v("*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",name:"address"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"address"}})],1)])]),t._v(" "),r("div",{staticClass:"form-group row justify-content-center"},[r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.$t("password")))]),t._v(" "),r("span",{staticClass:"text-danger text-small"},[t._v("*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.$t("confirm_password")))]),t._v(" "),r("span",{staticClass:"text-danger text-small"},[t._v("*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"password_confirmation"}})],1)])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-10 offset-md-1 d-flex"},[r("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("register"))+"\n            ")])],1)])])])],1)])},[],!1,null,null,null);e.default=p.exports}}]);