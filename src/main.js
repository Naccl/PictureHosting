import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// A modern alternative to CSS resets
import 'normalize.css/normalize.css'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// global css
import '@/styles/index.scss'
// icon
import '@/icons'
//v-viewer
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
// directive
import './utils/directive'

Vue.use(ElementUI)
Vue.use(Viewer)

Vue.prototype.msgSuccess = function (msg) {
	this.$message.success(msg)
}

Vue.prototype.msgError = function (msg) {
	this.$message.error(msg)
}

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')