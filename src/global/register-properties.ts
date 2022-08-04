import { App } from 'vue'
import { formatUTCString } from '@/utils/dateFormat'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return formatUTCString(value)
    }
  }
}
