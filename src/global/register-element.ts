import {
  ElAlert,
  ElAside,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
} from 'element-plus'
import { App } from 'vue'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElAside
]

export default (app: App): void => {
  for (const component of components) {
    app.component(component.name, component)
  }
}
