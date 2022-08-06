export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'title', label: '标题', minWidth: '100' },
    { prop: 'content', label: '内容', minWidth: '500' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '150',
      slotName: 'handle'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
