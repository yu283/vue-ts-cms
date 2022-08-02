import { createApp } from 'vue'
import { globalRegisterApp } from '@/global'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store, { setupStore } from './store'

const app = createApp(App)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

setupStore()
// 注册element-plus
app.use(globalRegisterApp)
app.use(router)
app.use(store)

app.mount('#app')
