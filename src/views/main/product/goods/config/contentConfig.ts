export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '150' },
    { prop: 'oldPrice', label: '原价', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价', minWidth: '80' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '80', slotName: 'image' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
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
