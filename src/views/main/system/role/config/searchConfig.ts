import { IForm, IFormItem } from '@/base-ui/form'
const formItems: IFormItem[] = [
  {
    field: 'name',
    type: 'input',
    label: '角色',
    placeholder: '请输入角色'
  },
  {
    field: 'intro',
    type: 'input',
    label: '权限',
    placeholder: '请输入权限'
  },
  {
    field: 'createTime',
    type: 'datepicker',
    label: '创建时间',
    placeholder: '请选择创建时间',
    otherOptions: {
      startPlaceHolder: '开始时间',
      endPlaceHolder: '结束时间',
      type: 'daterange'
    }
  }
]
const labelWidth = '90px'
const itemStyle = {
  padding: '5px 40px'
}
export const searchFormConfig: IForm = {
  labelWidth,
  formItems,
  itemStyle
}
