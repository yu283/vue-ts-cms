import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RHYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (result: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface RHYRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: RHYRequestInterceptors<T>
  showLoading?: boolean
}
