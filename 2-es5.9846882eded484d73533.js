function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{g7DB:function(e,n,t){"use strict";t.r(n),t.d(n,"LoginModule",(function(){return b}));var o,i,r,a=t("ofXK"),c=t("3Pt+"),l=t("fXoL"),m=((o=function(){function e(n){_classCallCheck(this,e),this.form=n.group({name:["",c.n.required],email:[""]})}return _createClass(e,[{key:"login",value:function(){console.log("Submitted ",this.form)}},{key:"name",get:function(){return this.form.get("name")}}]),e}()).\u0275fac=function(e){return new(e||o)(l.Ob(c.c))},o.\u0275cmp=l.Ib({type:o,selectors:[["app-login"]],decls:13,vars:3,consts:[[3,"formGroup","submit"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","name","name","name","formControlName","name",1,"form-control"],[1,"invalid-feedback"],["for","email"],["type","email","id","email","name","email","formControlName","email",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(e,n){1&e&&(l.Ub(0,"form",0),l.cc("submit",(function(){return n.login()})),l.Ub(1,"div",1),l.Ub(2,"label",2),l.zc(3,"Name"),l.Tb(),l.Pb(4,"input",3),l.Ub(5,"div",4),l.zc(6," Please provide a valid city. "),l.Tb(),l.Tb(),l.Ub(7,"div",1),l.Ub(8,"label",5),l.zc(9,"Email address"),l.Tb(),l.Pb(10,"input",6),l.Tb(),l.Ub(11,"button",7),l.zc(12,"Submit"),l.Tb(),l.Tb()),2&e&&(l.mc("formGroup",n.form),l.Cb(4),l.Fb("is-invalid",n.name.dirty&&n.name.invalid))},directives:[c.o,c.k,c.e,c.b,c.j,c.d],styles:[""]}),o),s=t("tyNb"),u=[{path:"",component:m}],f=((r=function e(){_classCallCheck(this,e)}).\u0275mod=l.Mb({type:r}),r.\u0275inj=l.Lb({factory:function(e){return new(e||r)},imports:[[s.h.forChild(u)],s.h]}),r),b=((i=function e(){_classCallCheck(this,e)}).\u0275mod=l.Mb({type:i}),i.\u0275inj=l.Lb({factory:function(e){return new(e||i)},imports:[[a.c,f,c.m]]}),i)}}]);