<template>
  <div class="user">
    <PageSearch
      @queryBtnClick="queryClick"
      @resetBtnClick="resetClick"
      :searchFormConfig="searchFormConfig"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      :pageName="pageName"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="newDataClick"
      @editBtnClick="editDataClick"
    ></PageContent>
    <PageModal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :pageName="pageName"
      :modalConfig="modalConfigRef"
    ></PageModal>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import { searchFormConfig } from '@/views/main/system/user/config/search.config'
import { contentTableConfig } from '@/views/main/system/user/config/contentConfig'
import { modalConfig } from './config/modal.config'
import PageContent from '@/components/page-content'
import { useSearch } from '@/hooks/useSearch'
import PageModal from '@/components/page-modal'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'
import { computed } from 'vue'

const pageName = 'users'
const [pageContentRef, queryClick, resetClick] = useSearch()
//pageModal相关的逻辑
/*处理密码的逻辑*/
const newCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = false
}
const editCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = true
}
//动态添加部门和角色列表
const store = useStore()
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === 'departmentId'
  )
  departmentItem!.options = store.state.entireDepartment.map((item) => {
    return { title: item.name, value: item.id }
  })
  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
  roleItem!.options = store.state.entireRole.map((item) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})
//调用hook获取公共的变量和函数
const [pageModalRef, defaultInfo, newDataClick, editDataClick] = usePageModal(
  newCallBack,
  editCallBack
)
</script>

<style scoped lang="less"></style>
