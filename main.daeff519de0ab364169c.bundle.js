webpackJsonp([1,4],{0:function(t,e,n){t.exports=n("x35b")},"5xMp":function(t,e){t.exports='<h1>\n  {{\'OUTPUT_TAXABLE_INCOME\' | translate}} \n</h1>\n<md-select placeholder="{{\'LABEL_LANGUAGE\' | translate}}" (change)="translate.use(selectedValue)" [(ngModel)]="selectedValue">\n  <md-option *ngFor="let lang of translate.getLangs()" [value]="lang">\n    {{lang}}\n  </md-option>\n</md-select>\n'},Iksp:function(t,e,n){"use strict";function o(t){return new u.a(t,"assets/i18n/",".json")}var r=n("Qbdm"),a=n("3j3K"),c=n("NVOs"),s=n("Fzro"),i=n("8A5H"),u=n("obU/"),f=n("KN8t"),l=n("fYnu"),p=n("YWx4");n.d(e,"a",function(){return g});var d=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},g=function(){function t(){}return t}();g=d([n.i(a.b)({declarations:[p.a],imports:[r.a,c.a,s.a,i.a.forRoot({loader:{provide:i.b,useFactory:o,deps:[s.b]}}),f.a,l.a,l.b,l.c,l.d,l.e,l.f,l.g,l.h],providers:[],bootstrap:[p.a]})],g)},MOVZ:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="MOVZ"},YWx4:function(t,e,n){"use strict";var o=n("3j3K"),r=n("8A5H");n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.translate=t,this.title="app works!",t.addLangs(["en","pt","ru"]),t.setDefaultLang("en"),console.log(t.get("OUTPUT_TAXABLE_INCOME"));var e=t.getBrowserLang();t.use(e.match(/en|pt|ru/)?e:"en")}return t}();s=a([n.i(o.q)({selector:"app-root",template:n("5xMp"),styles:[n("okgc")]}),c("design:paramtypes",["function"==typeof(i=void 0!==r.c&&r.c)&&i||Object])],s);var i},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},okgc:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("3j3K"),r=n("O61y"),a=n("Iksp");n("kZql").a.production&&n.i(o.a)(),n.i(r.a)().bootstrapModule(a.a)}},[0]);