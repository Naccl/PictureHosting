import axios from 'axios'
import {Message} from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const request = axios.create({
	baseURL: 'https://api.github.com',
	timeout: 10000
})

// request interceptor
request.interceptors.request.use(config => {
		NProgress.start()
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