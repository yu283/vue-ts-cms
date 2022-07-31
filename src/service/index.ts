import RHYRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from '@/service/request/config'

const rhyRequest = new RHYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('requestInterceptor')
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('requestInterceptorCatch')
      return error
    },
    responseInterceptor: (result) => {
      console.log('responseInterceptor')
      return result
    },
    responseInterceptorCatch: (error) => {
      console.log('responseInterceptorCatch')
      return error
    }
  }
})

export default rhyRequest
