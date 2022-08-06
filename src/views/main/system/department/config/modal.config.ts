import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导',
      placeholder: '请输入领导姓名'
    },
    {
      field: 'parentId',
      type: 'input',
      label: '父级部门编号',
      placeholder: '请输入父级部门编号'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
