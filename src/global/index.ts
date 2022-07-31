import { App } from 'vue'
import registerElement from '@/global/register-element'

export const globalRegisterApp = (app: App): void => {
  app.use(registerElement)
}
