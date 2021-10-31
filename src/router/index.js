import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		component: () => import('@/views/login/index'),
		hidden: true
	},
	{
		path: '/404',
		component: () => import('@/views/404'),
		hidden: true
	},
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: () => import('@/views/dashboard/index'),
				meta: {title: 'Dashboard', icon: 'dashboard'}
			}
		]
	},
	{
		path: '/example',
		component: Layout,
		redirect: '/example/table',
		name: 'Example',
		meta: {title: 'Example', icon: 'el-icon-s-help'},
		children: [
			{
				path: 'tree',
				name: 'Tree',
				component: () => import('@/views/tree/index'),
				meta: {title: 'Tree', icon: 'tree'}
			},
			{
				path: 'tree',
				name: 'Tree',
				component: () => import('@/views/tree/index'),
				meta: {title: 'Tree', icon: 'tree'}
			}
		]
	},

	// 404 page must be placed at the end !!!
	{path: '*', redirect: '/404', hidden: true}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach(async (to, from, next) => {
	NProgress.start()
	document.title = getPageTitle(to.meta.title)
	next()
})

router.afterEach(() => {
	NProgress.done()
})


export default router