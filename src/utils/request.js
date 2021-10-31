import axios from 'axios'
import {Message} from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const request = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 5000
})

// request interceptor
request.interceptors.request.use(config => {
		NProgress.start()
		return config
	},
	error => {
		console.log(error)
		return Promise.reject(error)
	}
)

// response interceptor
request.interceptors.response.use(response => {
		NProgress.done()
		const res = response.data
		if (res.code !== 200) {
			Message({
				message: res.msg || 'Error',
				type: 'error',
				duration: 5000
			})
			return Promise.reject(new Error(res.message || 'Error'))
		}
		return res
	},
	error => {
		console.error(error)
		Message({
			message: error.message,
			type: 'error',
			duration: 5000
		})
		return Promise.reject(error)
	}
)

export default request