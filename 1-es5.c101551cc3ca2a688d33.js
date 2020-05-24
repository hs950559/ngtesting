function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{n2S4:function(t,e,o){"use strict";o.r(e),o.d(e,"BooksModule",(function(){return A}));var r=o("ofXK"),n=o("1+r1"),i=o("tyNb"),a=o("0IaG");function c(){var t=new a.c;return t.disableClose=!0,t.autoFocus=!0,t.width="400px",t}var b,s,u=o("3Pt+"),l=o("fXoL"),d=o("tk/3"),f="https://hkauthapi.herokuapp.com/books/",h=((s=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"getAll",value:function(){return this.http.get(f)}},{key:"getOne",value:function(t){return this.http.get("".concat(f).concat(t))}},{key:"add",value:function(t){return this.http.post("".concat(f),t)}},{key:"update",value:function(t){return this.http.put("".concat(f,"/").concat(t._id),t)}},{key:"delete",value:function(t){return this.http.delete(f+t)}},{key:"getBookByAuthor",value:function(t){var e=(new d.c).set("author",t);return this.http.get(f,{params:e})}}]),t}()).\u0275fac=function(t){return new(t||s)(l.Yb(d.a))},s.\u0275prov=l.Kb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),p=((b=function(){function t(e,o,r,n){_classCallCheck(this,t),this.fb=e,this.dialogRef=o,this.bookService=n,this.book=r.book,this.mode=r.mode}return _createClass(t,[{key:"ngOnInit",value:function(){this.dialogTitle="create"===this.mode?"Add Book":"Update Book";var t={name:["",u.n.required],author:[""],price:[""],publishedDate:[new Date]};"update"===this.mode?(this.bookForm=this.fb.group(t),this.bookForm.patchValue(Object.assign({},this.book))):"create"===this.mode&&(this.bookForm=this.fb.group(Object.assign({},t)))}},{key:"onClose",value:function(){this.dialogRef.close()}},{key:"onSave",value:function(){var t=this,e=Object.assign(Object.assign({},this.book),this.bookForm.value);"update"===this.mode?this.bookService.update(e).subscribe((function(e){t.dialogRef.close(e)})):"create"===this.mode&&this.bookService.add(e).subscribe((function(e){t.dialogRef.close(e)}))}}]),t}()).\u0275fac=function(t){return new(t||b)(l.Ob(u.c),l.Ob(a.e),l.Ob(a.a),l.Ob(h))},b.\u0275cmp=l.Ib({type:b,selectors:[["app-edit-book-dialog"]],decls:29,vars:2,consts:[[3,"formGroup","ngSubmit"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","name","name","name","placeholder","Name","formControlName","name",1,"form-control"],[1,"invalid-feedback"],["type","text","name","author","placeholder","Author","formControlName","author",1,"form-control"],["type","text","name","price","placeholder","Price","formControlName","price",1,"form-control"],["type","text","name","publishedDate","placeholder","Published Date","formControlName","publishedDate","readonly","",1,"form-control"],[1,"btn","btn-warning","mr-2",3,"click"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(t,e){1&t&&(l.Ub(0,"form",0),l.cc("ngSubmit",(function(){return e.onSave()})),l.Ub(1,"div",1),l.Ub(2,"label",2),l.zc(3,"Name"),l.Tb(),l.Pb(4,"input",3),l.Ub(5,"div",4),l.zc(6," Please provide a valid city. "),l.Tb(),l.Tb(),l.Ub(7,"div",1),l.Ub(8,"label",2),l.zc(9,"Author"),l.Tb(),l.Pb(10,"input",5),l.Ub(11,"div",4),l.zc(12," Please provide a valid city. "),l.Tb(),l.Tb(),l.Ub(13,"div",1),l.Ub(14,"label",2),l.zc(15,"Price"),l.Tb(),l.Pb(16,"input",6),l.Ub(17,"div",4),l.zc(18," Please provide a valid city. "),l.Tb(),l.Tb(),l.Ub(19,"div",1),l.Ub(20,"label",2),l.zc(21,"Published Date"),l.Tb(),l.Pb(22,"input",7),l.Ub(23,"div",4),l.zc(24," Please provide a valid city. "),l.Tb(),l.Tb(),l.Ub(25,"button",8),l.cc("click",(function(){return e.onClose()})),l.zc(26," Close "),l.Tb(),l.Ub(27,"button",9),l.zc(28," Submit "),l.Tb(),l.Tb()),2&t&&(l.mc("formGroup",e.bookForm),l.Cb(27),l.mc("disabled",null==e.bookForm?null:e.bookForm.invalid))},directives:[u.o,u.k,u.e,u.b,u.j,u.d],styles:[""]}),b),k=function(t){return["/books",t]};function m(t,e){if(1&t){var o=l.Vb();l.Ub(0,"tr"),l.Ub(1,"td"),l.zc(2),l.Tb(),l.Ub(3,"td"),l.Ub(4,"a",8),l.zc(5),l.Tb(),l.Tb(),l.Ub(6,"td"),l.zc(7),l.Tb(),l.Ub(8,"td"),l.zc(9),l.Tb(),l.Ub(10,"td"),l.zc(11),l.Tb(),l.Ub(12,"td"),l.Ub(13,"button",9),l.cc("click",(function(){l.sc(o);var t=e.$implicit;return l.fc().editBook(t)})),l.Pb(14,"i",10),l.Tb(),l.Ub(15,"button",11),l.cc("click",(function(){l.sc(o);var t=e.$implicit;return l.fc().removeBook(t)})),l.Pb(16,"i",12),l.Tb(),l.Tb(),l.Tb()}if(2&t){var r=e.$implicit;l.Cb(2),l.Ac(r._id),l.Cb(2),l.mc("routerLink",l.oc(6,k,r._id)),l.Cb(1),l.Ac(r.name),l.Cb(2),l.Ac(r.author),l.Cb(2),l.Ac(r.price),l.Cb(2),l.Ac(r.publishedDate)}}function v(t,e){if(1&t&&(l.Sb(0),l.Ub(1,"div",1),l.Ub(2,"h1",2),l.Ub(3,"em"),l.zc(4),l.Tb(),l.Tb(),l.Ub(5,"pre"),l.zc(6),l.gc(7,"json"),l.Tb(),l.Tb(),l.Rb()),2&t){var o=e.ngIf;l.Cb(4),l.Ac(o.name),l.Cb(2),l.Ac(l.hc(7,2,o))}}var y,g,T,C,U=[{path:"",component:(g=function(){function t(e,o){_classCallCheck(this,t),this.dialog=e,this.bookService=o}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.booksSubscription=this.bookService.getAll().subscribe((function(e){t.books=e})),this.getBookByAuthor()}},{key:"removeBook",value:function(t){var e=this;this.bookService.delete(t._id).subscribe((function(){e.books=e.books.filter((function(e){return e._id!==t._id}))}))}},{key:"editBook",value:function(t){var e=this,o=c();o.data={dialogTitle:"Edit Book",book:t,mode:"update"},this.dialog.open(p,o).afterClosed().subscribe((function(t){t&&(e.books=e.books.map((function(e){return e._id===t._id?t:e})))}))}},{key:"addBook",value:function(){var t=this,e=c();e.data={dialogTitle:"Create Book",mode:"create"},this.dialog.open(p,e).afterClosed().subscribe((function(e){e&&(t.books=[e].concat(_toConsumableArray(t.books)))}))}},{key:"getBookByAuthor",value:function(){this.bookService.getBookByAuthor("Hemant").subscribe((function(t){console.log("books",t)}))}}]),t}(),g.\u0275fac=function(t){return new(t||g)(l.Ob(a.b),l.Ob(h))},g.\u0275cmp=l.Ib({type:g,selectors:[["app-books"]],decls:22,vars:1,consts:[[1,"header","d-flex","justify-content-between"],[1,"h1"],[1,"btn","btn-info",3,"click"],[1,"ti-plus"],[1,"table","table-bordered"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"ti-pencil"],[1,"btn","btn-danger",3,"click"],[1,"ti-trash"]],template:function(t,e){1&t&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.zc(2,"All Books"),l.Tb(),l.Ub(3,"button",2),l.cc("click",(function(){return e.addBook()})),l.Pb(4,"i",3),l.Tb(),l.Tb(),l.Ub(5,"table",4),l.Ub(6,"thead",5),l.Ub(7,"tr"),l.Ub(8,"th",6),l.zc(9,"#"),l.Tb(),l.Ub(10,"th",6),l.zc(11,"Name"),l.Tb(),l.Ub(12,"th",6),l.zc(13,"Author"),l.Tb(),l.Ub(14,"th",6),l.zc(15,"Price"),l.Tb(),l.Ub(16,"th",6),l.zc(17,"Published Date"),l.Tb(),l.Ub(18,"th",6),l.zc(19,"Actions"),l.Tb(),l.Tb(),l.Tb(),l.Ub(20,"tbody"),l.yc(21,m,17,8,"tr",7),l.Tb(),l.Tb()),2&t&&(l.Cb(21),l.mc("ngForOf",e.books))},directives:[r.k,i.g],styles:[""]}),g)},{path:":bookId",component:(y=function(){function t(e,o){_classCallCheck(this,t),this.route=e,this.bookService=o}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this.route.snapshot.paramMap.get("bookId");this.book$=this.bookService.getOne(t)}}]),t}(),y.\u0275fac=function(t){return new(t||y)(l.Ob(i.a),l.Ob(h))},y.\u0275cmp=l.Ib({type:y,selectors:[["app-book"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"card","card-body"],[1,"text-center"]],template:function(t,e){1&t&&(l.yc(0,v,8,4,"ng-container",0),l.gc(1,"async")),2&t&&l.mc("ngIf",l.hc(1,1,e.book$))},directives:[r.l],pipes:[r.b,r.f],styles:[""]}),y)}],_=((C=function t(){_classCallCheck(this,t)}).\u0275mod=l.Mb({type:C}),C.\u0275inj=l.Lb({factory:function(t){return new(t||C)},imports:[[i.h.forChild(U)],i.h]}),C),A=((T=function t(){_classCallCheck(this,t)}).\u0275mod=l.Mb({type:T}),T.\u0275inj=l.Lb({factory:function(t){return new(t||T)},providers:[],imports:[[r.c,n.a,u.f,u.m,_],u.m]}),T)}}]);