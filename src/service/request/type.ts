import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RHYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (result: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface RHYRequestConfig extends AxiosRequestConfig {
  interceptors?: RHYRequestInterceptors
  showLoading?: boolean
}
