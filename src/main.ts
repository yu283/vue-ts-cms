import { createApp } from 'vue'

import { globalRegisterApp } from '@/global'

import App from './App.vue'

import router from './router'
import store from './store'

// import './service/axios_demo'
import rhyRequest from './service'

const app = createApp(App)
/*console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)*/
interface DataType {
  data: any
  returnCode: string
  success: boolean
}

/*
rhyRequest
  .get<DataType>({
    url: '/home/multidata',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('方法自己的拦截器')
        return config
      }
    },
    showLoading: true
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
*/

// 注册element-plus
app.use(globalRegisterApp)
app.use(router)
app.use(store)

app.mount('#app')
