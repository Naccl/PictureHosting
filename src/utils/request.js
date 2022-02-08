import axios from 'axios'
import {Message} from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const request = axios.create({
	baseURL: 'https://api.github.com',
	//对于较大的文件，可能需要更多的超时时间
	timeout: 30000,
})

// request interceptor
request.interceptors.request.use(config => {
		NProgress.start()
		if (/get/i.test(config.method)) {
			//get请求添加时间戳防止响应缓存
			config.params = config.params || {}
			config.params.t = new Date().getTime()
		}
		const token = localStorage.getItem('githubToken')
		if (token) {
			config.headers.Authorization = `token ${token}`
		}
		return config
	},
	error => {
		console.info(error)
		return Promise.reject(error)
	}
)

// response interceptor
request.interceptors.response.use(response => {
		NProgress.done()
		const res = response.data
		return res
	},
	error => {
		console.info(error)
		Message.error(error.message)
		return Promise.reject(error)
	}
)

export default request