(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7403c1c"],{1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),a=n("1d80"),c=n("4840"),s=n("8aa5"),l=n("50c4"),u=n("14c3"),h=n("9263"),f=n("d039"),p=[].push,v=Math.min,d=4294967295,g=!f((function(){return!RegExp(d,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),o=void 0===n?d:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);var c,s,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,f+"g");while(c=h.call(g,r)){if(s=g.lastIndex,s>v&&(u.push(r.slice(v,c.index)),c.length>1&&c.index<r.length&&p.apply(u,c.slice(1)),l=c[0].length,v=s,u.length>=o))break;g.lastIndex===c.index&&g.lastIndex++}return v===r.length?!l&&g.test("")||u.push(""):u.push(r.slice(v)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var h=o(t),f=String(this),p=c(h,RegExp),m=h.unicode,y=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),x=new p(g?h:"^(?:"+h.source+")",y),w=void 0===i?d:i>>>0;if(0===w)return[];if(0===f.length)return null===u(x,f)?[f]:[];var b=0,S=0,E=[];while(S<f.length){x.lastIndex=g?S:0;var R,_=u(x,g?f:f.slice(S));if(null===_||(R=v(l(x.lastIndex+(g?0:S)),f.length))===b)S=s(f,S,m);else{if(E.push(f.slice(b,S)),E.length===w)return E;for(var L=1;L<=_.length-1;L++)if(E.push(_[L]),E.length===w)return E;S=b=R}}return E.push(f.slice(b)),E}]}),!g)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("d039"),a=n("ad6d"),c="toString",s=RegExp.prototype,l=s[c],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),h=l.name!=c;(u||h)&&r(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?a.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},3408:function(t,e,n){},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),o=n("7b0b"),a=n("50c4"),c=n("a691"),s=n("1d80"),l=n("8aa5"),u=n("14c3"),h=Math.max,f=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,d=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,x=m?"$":"$0";return[function(n,r){var i=s(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!m&&y||"string"===typeof r&&-1===r.indexOf(x)){var o=n(e,t,this,r);if(o.done)return o.value}var s=i(t),p=String(this),v="function"===typeof r;v||(r=String(r));var d=s.global;if(d){var b=s.unicode;s.lastIndex=0}var S=[];while(1){var E=u(s,p);if(null===E)break;if(S.push(E),!d)break;var R=String(E[0]);""===R&&(s.lastIndex=l(p,a(s.lastIndex),b))}for(var _="",L=0,P=0;P<S.length;P++){E=S[P];for(var I=String(E[0]),k=h(f(c(E.index),p.length),0),C=[],j=1;j<E.length;j++)C.push(g(E[j]));var T=E.groups;if(v){var D=[I].concat(C,k,p);void 0!==T&&D.push(T);var O=String(r.apply(void 0,D))}else O=w(I,p,k,C,T,r);k>=L&&(_+=p.slice(L,k)+O,L=k+I.length)}return _+p.slice(L)}];function w(t,n,r,i,a,c){var s=r+t.length,l=i.length,u=d;return void 0!==a&&(a=o(a),u=v),e.call(c,u,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return e;if(u>l){var h=p(u/10);return 0===h?e:h<=l?void 0===i[h-1]?o.charAt(1):i[h-1]+o.charAt(1):e}c=i[u-1]}return void 0===c?"":c}))}}))},"557f":function(t,e,n){"use strict";n("3408")},"841c":function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),o=n("1d80"),a=n("129f"),c=n("14c3");r("search",1,(function(t,e,n){return[function(e){var n=o(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var o=i(t),s=String(this),l=o.lastIndex;a(l,0)||(o.lastIndex=0);var u=c(o,s);return a(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]}))},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=w;var h="suspendedStart",f="suspendedYield",p="executing",v="completed",d={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(T([])));y&&y!==r&&i.call(y,a)&&(g=y);var x=R.prototype=S.prototype=Object.create(g);E.prototype=x.constructor=R,R.constructor=E,R[s]=E.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,R):(t.__proto__=R,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},u.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[c]=function(){return this},u.AsyncIterator=L,u.async=function(t,e,n,r){var i=new L(w(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),x[s]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=T,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}}}function w(t,e,n,r){var i=e&&e.prototype instanceof S?e:S,o=Object.create(i.prototype),a=new j(r||[]);return o._invoke=P(t,n,a),o}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function S(){}function E(){}function R(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(n,r,o,a){var c=b(t[n],t,r);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(l).then((function(t){s.value=t,o(s)}),a)}a(c.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function P(t,e,n){var r=h;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return D()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=I(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=b(t,e,n);if("normal"===s.type){if(r=n.done?v:f,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}function I(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,I(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:D}}function D(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},a15b:function(t,e,n){"use strict";var r=n("23e7"),i=n("44ad"),o=n("fc6a"),a=n("a640"),c=[].join,s=i!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:s||!l},{join:function(t){return c.call(o(this),void 0===t?",":t)}})},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),a=n("9263"),c=n("9112"),s=o("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),h=o("replace"),f=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,h){var v=o(t),d=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=d&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!d||!g||"replace"===t&&(!l||!u||f)||"split"===t&&!p){var m=/./[v],y=n(v,""[t],(function(t,e,n,r,i){return e.exec===a?d&&!i?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=y[0],w=y[1];r(String.prototype,t,x),r(RegExp.prototype,v,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}h&&c(RegExp.prototype[v],"sham",!0)}},dcdb:function(t,e,n){"use strict";n("e71f")},e71f:function(t,e,n){},f74b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-select",{staticStyle:{"min-width":"300px"},attrs:{placeholder:"请选择仓库",filterable:!0},on:{change:t.changeRepos},model:{value:t.activeRepos,callback:function(e){t.activeRepos=e},expression:"activeRepos"}},t._l(t.reposList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1),n("el-cascader",{key:t.resourceShow,staticStyle:{"min-width":"450px"},attrs:{placeholder:"请选择目录",options:t.pathArr,props:t.pathProps,disabled:!t.activeRepos},model:{value:t.activePath,callback:function(e){t.activePath=e},expression:"activePath"}}),n("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-search",disabled:!t.activeRepos},on:{click:t.search}},[t._v("查询")]),n("el-switch",{attrs:{"active-text":"CDN","inactive-text":"源站",disabled:!t.activeRepos},model:{value:t.isCDN,callback:function(e){t.isCDN=e},expression:"isCDN"}}),n("el-button",{staticClass:"right-item",attrs:{type:"primary",size:"medium",icon:"el-icon-upload",disabled:!t.activeRepos},on:{click:function(e){t.isDrawerShow=!t.isDrawerShow}}},[t._v("上传")])],1),t.hintShow1?n("el-alert",{attrs:{title:"只显示<img>标签支持的 apng,avif,bmp,gif,ico,cur,jpg,jpeg,jfif,pjpeg,pjp,png,svg,tif,tiff,webp 格式的图片，见 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img",type:"warning","show-icon":"","close-text":"不再提示"},on:{close:function(e){return t.noDisplay(1)}}}):t._e(),t.hintShow2?n("el-alert",{attrs:{title:"仅支持获取1000个文件内的目录，超出则将请求失败",type:"warning","show-icon":"","close-text":"不再提示"},on:{close:function(e){return t.noDisplay(2)}}}):t._e(),t.hintShow3?n("el-alert",{attrs:{title:"不可上传同名文件，否则将收到422错误码，如需替换，请先删除原文件",type:"warning","show-icon":"","close-text":"不再提示"},on:{close:function(e){return t.noDisplay(3)}}}):t._e(),n("el-row",{directives:[{name:"viewer",rawName:"v-viewer"}]},t._l(t.fileList,(function(e,r){return n("div",{key:r,staticClass:"image-container"},[n("el-image",{attrs:{src:t.imgUrl(e),fit:"scale-down"}}),n("div",{staticClass:"image-content"},[n("div",{staticClass:"info"},[n("span",[t._v(t._s(e.name))])]),n("div",{staticClass:"icons"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"复制CDN链接",placement:"bottom"}},[n("i",{staticClass:"icon el-icon-link",on:{click:function(n){return t.copy(1,e)}}})]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"复制MD格式",placement:"bottom"}},[n("SvgIcon",{attrs:{"icon-class":"markdown","class-name":"icon"},on:{click:function(n){return t.copy(2,e)}}})],1),n("i",{staticClass:"icon el-icon-delete",on:{click:function(n){return t.delFile(e)}}})],1)])],1)})),0),n("el-drawer",{attrs:{title:"上传文件",visible:t.isDrawerShow,direction:"rtl",size:"40%",wrapperClosable:!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.isDrawerShow=e}}},[n("el-row",[n("el-radio",{attrs:{label:"1"},model:{value:t.nameType,callback:function(e){t.nameType=e},expression:"nameType"}},[t._v("使用源文件名")]),n("el-radio",{attrs:{label:"2"},model:{value:t.nameType,callback:function(e){t.nameType=e},expression:"nameType"}},[t._v("使用UUID文件名")]),n("el-button",{directives:[{name:"throttle",rawName:"v-throttle",value:[t.submitUpload,"click",3e3],expression:"[submitUpload,`click`,3000]"}],attrs:{size:"small",type:"primary",icon:"el-icon-upload"}},[t._v("确定上传")])],1),n("el-row",[t._v(" 当前目录："+t._s(t.realPath)+" ")]),n("el-row",[n("el-switch",{attrs:{"active-text":"自定义目录"},model:{value:t.isCustomPath,callback:function(e){t.isCustomPath=e},expression:"isCustomPath"}}),n("el-input",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"例：oldFolder/newFolder/",disabled:!t.isCustomPath,size:"medium"},model:{value:t.customPath,callback:function(e){t.customPath=e},expression:"customPath"}})],1),n("el-upload",{ref:"uploadRef",attrs:{action:"","http-request":t.upload,drag:"",multiple:"","file-list":t.uploadList,"list-type":"picture","auto-upload":!1}},[n("i",{staticClass:"el-icon-upload"}),n("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),n("em",[t._v("点击上传")])])])],1)],1)},i=[];n("d3b7");function o(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,s,"next",t)}function s(t){o(a,r,i,c,s,"throw",t)}c(void 0)}))}}n("96cf"),n("a15b"),n("99af"),n("159b"),n("b0c0"),n("ac1f"),n("841c"),n("1276");var c=n("c00a"),s=n("c9f7"),l=n("61f7");n("5319"),n("25f0");function u(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)}))}function h(t){var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.remove()}var f=[],p=null;function v(){if(0===f.length)return clearInterval(p),void(p=null);var t=f.shift();t(),0===f.length&&(clearInterval(p),p=null)}function d(t,e){f.push(t),p||(v(),p=setInterval(v,e))}var g={name:"Manage",components:{SvgIcon:c["a"]},data:function(){var t=this;return{reposList:[],pathArr:[{value:"",label:"根目录"}],activeRepos:"",activePath:[""],pathProps:{lazy:!0,checkStrictly:!0,lazyLoad:function(){var e=a(regeneratorRuntime.mark((function e(n,r){var i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=n.path.join("/"),o=[],e.next=4,t.getReposContents(o,i);case 4:r(o);case 5:case"end":return e.stop()}}),e)})));function n(t,n){return e.apply(this,arguments)}return n}()},hintShow1:!0,hintShow2:!0,hintShow3:!0,fileList:[],resourceShow:0,isDrawerShow:!1,nameType:"1",uploadList:[],isCDN:!0,isCustomPath:!1,customPath:""}},computed:{realPath:function(){return this.isCustomPath?"/".concat(this.userInfo.login,"/").concat(this.activeRepos,"/").concat(this.customPath):"/".concat(this.userInfo.login,"/").concat(this.activeRepos).concat(this.activePath.join("/"),"/")}},created:function(){this.hintShow1=!localStorage.getItem("hintShow1"),this.hintShow2=!localStorage.getItem("hintShow2"),this.hintShow3=!localStorage.getItem("hintShow3");var t=localStorage.getItem("githubToken"),e=localStorage.getItem("githubUserInfo");t&&e?(this.userInfo=JSON.parse(e),this.getRepos()):(this.msgError("请先配置Token"),this.$router.push("/pictureHosting/setting"))},methods:{getRepos:function(){var t=this;Object(s["d"])(this.userInfo.login).then((function(e){t.reposList=e}))},changeRepos:function(){this.resourceShow++,this.activePath=[""],this.fileList=[]},getReposContents:function(t,e){var n=this;return a(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(s["b"])(n.userInfo.login,n.activeRepos,e).then((function(e){e.forEach((function(e){"dir"===e.type&&t.push({value:e.name,label:e.name,leaf:!1})}))}));case 2:case"end":return r.stop()}}),r)})))()},search:function(){var t=this;this.fileList=[];var e=this.activePath.join("/");Object(s["b"])(this.userInfo.login,this.activeRepos,e).then((function(e){e.forEach((function(e){"file"===e.type&&Object(l["b"])(e.name)&&t.fileList.push(e)}))}))},noDisplay:function(t){localStorage.setItem("hintShow".concat(t),"1")},imgUrl:function(t){return this.isCDN?"https://fastly.jsdelivr.net/gh/".concat(this.userInfo.login,"/").concat(this.activeRepos,"/").concat(t.path):t.download_url},copy:function(t,e){var n="https://fastly.jsdelivr.net/gh/".concat(this.userInfo.login,"/").concat(this.activeRepos,"/").concat(e.path),r=n;2==t&&(r="![".concat(e.name,"](").concat(n,")")),h(r),this.msgSuccess("复制成功")},delFile:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n={message:"Delete file via PictureHosting",sha:t.sha};Object(s["a"])(e.userInfo.login,e.activeRepos,t.path,n).then((function(){e.msgSuccess("删除成功"),e.search()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},submitUpload:function(){this.uploadList=this.$refs.uploadRef.uploadFiles,this.uploadList.length?this.$refs.uploadRef.submit():this.msgError("请先选择文件")},upload:function(t){var e=this,n=new FileReader;n.readAsDataURL(t.file),n.onload=function(){var r=n.result.split(",")[1],i=t.file.name;"2"===e.nameType&&(i=u()+i.substr(i.lastIndexOf("."))),d((function(){return e.push2Github(t,i,r)}),1e3)}},push2Github:function(t,e,n){var r=this,i={message:"Add files via PictureHosting",content:n},o=this.activePath.join("/");this.isCustomPath&&("/"===this.customPath?o="":(o=this.customPath,"/"!==o.charAt(0)&&(o="/"+o),"/"===o.charAt(o.length-1)&&(o=o.substring(0,o.length-1)))),Object(s["e"])(this.userInfo.login,this.activeRepos,o,e,i).then((function(){r.msgSuccess("上传成功"),t.onSuccess()}))}}},m=g,y=(n("557f"),n("dcdb"),n("2877")),x=Object(y["a"])(m,r,i,!1,null,"577fb9cd",null);e["default"]=x.exports}}]);