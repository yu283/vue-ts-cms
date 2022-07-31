import { App } from 'vue'
import registerElement from '@/global/register-element'
export const registerApp = (app: App): void => {
  registerElement(app)
}
