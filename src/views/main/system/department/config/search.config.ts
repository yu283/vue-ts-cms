import { IForm, IFormItem } from '@/base-ui/form'
const formItems: IFormItem[] = [
  {
    field: 'id',
    type: 'input',
    label: '部门编号',
    placeholder: '请输入部门id'
  },
  {
    field: 'name',
    type: 'input',
    label: '部门名称',
    placeholder: '请输入部门编号'
  },
  {
    field: 'leader',
    type: 'input',
    label: '部门领导',
    placeholder: '请输入领导姓名'
  },
  {
    field: 'parentId',
    type: 'input',
    label: '父级部门编号',
    placeholder: '请输入父级部门编号'
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
