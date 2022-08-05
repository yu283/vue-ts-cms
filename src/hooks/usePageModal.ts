import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallBackFn = (item?: any) => void

export function usePageModal(
  newCallBack?: CallBackFn,
  editCallBack?: CallBackFn
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const newDataClick = () => {
    defaultInfo.value = {}
    pageModalRef.value.titleValue = '新建'
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCallBack && newCallBack()
  }
  const editDataClick = (item: any) => {
    pageModalRef.value.titleValue = '编辑'
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCallBack && editCallBack(item)
  }
  return [pageModalRef, defaultInfo, newDataClick, editDataClick]
}
