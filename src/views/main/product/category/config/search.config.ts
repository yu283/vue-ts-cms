import { IForm, IFormItem } from '@/base-ui/form'
const formItems: IFormItem[] = [
  {
    field: 'id',
    type: 'input',
    label: '商品编号',
    placeholder: '请输入商品编号'
  },
  {
    field: 'name',
    type: 'input',
    label: '商品名称',
    placeholder: '请输入商品名称'
  },
  {
    field: 'createAt',
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
