import {
  ElAlert,
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElRadio,
  ElSubMenu,
  ElTabPane,
  ElTabs
} from 'element-plus'
import { App } from 'vue'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElAside,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElSubMenu,
  ElMenuItem
]

export default (app: App): void => {
  for (const component of components) {
    app.component(component.name, component)
  }
}
