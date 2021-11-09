import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import getPageTitle from '@/utils/get-page-title'

Vue.use(VueRouter)

const routes = [
	{
		path: '/404',
		component: () => import('@/views/404'),
		meta: {title: '404 NOT FOUND'},
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
		path: '/pictureHosting',
		component: Layout,
		redirect: '/pictureHosting/setting',
		name: 'PictureHosting',
		meta: {title: '图床', icon: 'el-icon-picture'},
		children: [
			{
				path: 'setting',
				name: 'Setting',
				component: () => import('@/views/Setting'),
				meta: {title: '配置', icon: 'el-icon-setting'}
			},
			{
				path: 'manage',
				name: 'Manage',
				component: () => import('@/views/Manage'),
				meta: {title: '管理', icon: 'el-icon-folder-opened'}
			},
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

router.beforeEach( (to, from, next) => {
	document.title = getPageTitle(to.meta.title)
	next()
})

export default router