import { IForm, IFormItem } from '@/base-ui/form'
const formItems: IFormItem[] = [
  {
    type: 'input',
    label: 'id',
    placeholder: '请输入id'
  },
  {
    type: 'input',
    label: '用户名',
    placeholder: '请输入用户名'
  },
  {
    type: 'password',
    label: '密码',
    placeholder: '请输入密码'
  },
  {
    type: 'select',
    label: '爱好',
    placeholder: '请选择你的爱好',
    options: [
      { title: '篮球', value: 'basketball' },
      { title: '足球', value: 'football' }
    ]
  },
  {
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
