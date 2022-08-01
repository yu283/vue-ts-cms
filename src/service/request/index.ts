import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { RHYRequestInterceptors, RHYRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import 'element-plus/lib/components/loading/style/css'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

const DEFAULT_LOADING = true

class RHYRequest {
  instance: AxiosInstance
  interceptors?: RHYRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: RHYRequestConfig) {
    //创建axios实例
    this.instance = axios.create(config)
    //保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    //使用拦截器
    //每个实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    //  所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据',
            background: 'rgba(114,199,234,50%)'
          })
        }
        return config
      },
      (error) => {
        return error
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        //将loading移除
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败')
        } else {
          return data
        }
      },
      (error) => {
        if (error.reponse.status === 404) {
          this.loading?.close()
          console.log(404)
        }
        return error
      }
    )
  }

  request<T>(config: RHYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      //判断是否显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          //单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          //设置为true 不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          //将结果返回出去
          resolve(res)
        })
        .catch((error) => {
          this.showLoading = DEFAULT_LOADING
          return error
        })
    })
  }

  get<T>(config: RHYRequestConfig<T>): Promise<T> {
    return this.request<T>({
      method: 'GET',
      ...config
    })
  }
  post<T>(config: RHYRequestConfig<T>): Promise<T> {
    return this.request<T>({
      method: 'POST',
      ...config
    })
  }

  delete<T>(config: RHYRequestConfig<T>): Promise<T> {
    return this.request<T>({
      method: 'DELETE',
      ...config
    })
  }

  patch<T>(config: RHYRequestConfig<T>): Promise<T> {
    return this.request<T>({
      method: 'PATCH',
      ...config
    })
  }
}

export default RHYRequest
