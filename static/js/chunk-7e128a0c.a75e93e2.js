(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e128a0c"],{"0ae2":function(e,t,n){"use strict";n("74ce")},"4ef5":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",[n("el-col",{attrs:{span:8}},[n("el-input",{staticStyle:{"min-width":"500px"},attrs:{placeholder:"请输入token进行初始化",clearable:!0},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchUser(t)}},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchUser},slot:"append"},[e._v("查询")])],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:8}},[n("span",{staticClass:"middle"},[e._v("当前用户：")]),n("el-avatar",{attrs:{size:50,src:e.userInfo.avatar_url}},[e._v("User")]),n("span",{staticClass:"middle"},[e._v(e._s(e.userInfo.login))])],1)],1),n("el-row",[n("el-col",{attrs:{span:8}},[n("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-check",disabled:e.isSave},on:{click:function(t){return e.saveUser(!0)}}},[e._v("保存配置")]),n("el-button",{attrs:{type:"info",size:"medium",icon:"el-icon-close"},on:{click:function(t){return e.saveUser(!1)}}},[e._v("清除配置")])],1)],1)],1)},o=[],s=(n("e9c4"),n("c9f7")),c={name:"Setting",data:function(){return{token:"",userInfo:{login:"未配置"},isSave:!0}},created:function(){this.token=localStorage.getItem("githubToken");var e=localStorage.getItem("githubUserInfo");this.token&&e?(this.userInfo=JSON.parse(e),this.isSave=!1):this.userInfo={login:"未配置"}},methods:{searchUser:function(){var e=this;Object(s["c"])(this.token).then((function(t){e.userInfo=t,e.isSave=!1}))},saveUser:function(e){e?(localStorage.setItem("githubToken",this.token),localStorage.setItem("githubUserInfo",JSON.stringify(this.userInfo)),this.msgSuccess("保存成功")):(localStorage.removeItem("githubToken"),localStorage.removeItem("githubUserInfo"),this.msgSuccess("清除成功"))}}},a=c,i=(n("0ae2"),n("2877")),u=Object(i["a"])(a,r,o,!1,null,null,null);t["default"]=u.exports},"74ce":function(e,t,n){},c9f7:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return u}));n("99af"),n("ac1f"),n("00b4"),n("d3b7");var r=axios.create({baseURL:"https://api.github.com",timeout:3e4});r.interceptors.request.use((function(e){NProgress.start(),/get/i.test(e.method)&&(e.params=e.params||{},e.params.t=(new Date).getTime());var t=localStorage.getItem("githubToken");return t&&(e.headers.Authorization="token ".concat(t)),e}),(function(e){return console.info(e),Promise.reject(e)})),r.interceptors.response.use((function(e){NProgress.done();var t=e.data;return t}),(function(e){return console.info(e),Message.error(e.message),Promise.reject(e)}));var o=r;function s(e){return o({url:"/user",method:"GET",headers:{Authorization:"token ".concat(e)}})}function c(e){return o({url:"/users/".concat(e,"/repos"),method:"GET"})}function a(e,t,n){return o({url:"/repos/".concat(e,"/").concat(t,"/contents").concat(n),method:"GET"})}function i(e,t,n,r){return o({url:"/repos/".concat(e,"/").concat(t,"/contents/").concat(n),method:"DELETE",data:r})}function u(e,t,n,r,s){return o({url:"/repos/".concat(e,"/").concat(t,"/contents").concat(n,"/").concat(r),method:"PUT",data:s})}},e9c4:function(e,t,n){var r=n("23e7"),o=n("d066"),s=n("d039"),c=o("JSON","stringify"),a=/[\uD800-\uDFFF]/g,i=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,l=function(e,t,n){var r=n.charAt(t-1),o=n.charAt(t+1);return i.test(e)&&!u.test(o)||u.test(e)&&!i.test(r)?"\\u"+e.charCodeAt(0).toString(16):e},f=s((function(){return'"\\udf06\\ud834"'!==c("\udf06\ud834")||'"\\udead"'!==c("\udead")}));c&&r({target:"JSON",stat:!0,forced:f},{stringify:function(e,t,n){var r=c.apply(null,arguments);return"string"==typeof r?r.replace(a,l):r}})}}]);