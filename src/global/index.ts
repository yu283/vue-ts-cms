import { App } from 'vue'
import registerElement from '@/global/register-element'
import registerProperties from '@/global/register-properties'

export const globalRegisterApp = (app: App): void => {
  app.use(registerElement)
  app.use(registerProperties)
}
