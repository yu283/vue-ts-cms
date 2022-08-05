<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent
      page-name="role"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="newDataClick"
      @editBtnClick="editDataClick"
    ></PageContent>
    <PageModal
      :defaultInfo="defaultInfo"
      pageName="role"
      :modalConfig="modalConfig"
      :otherInfo="otherInfo"
      ref="pageModalRef"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="checkChange"
        />
      </div>
    </PageModal>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { contentTableConfig } from '@/views/main/system/role/config/contentConfig'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/searchConfig'
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'
import { computed, ref, nextTick } from 'vue'
import { getMenuLeafKeys } from '@/utils/mapMenus'
import { ElTree } from 'element-plus'
//处理pageModal的hook 这里要拿到回显的数据
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (item: any) => {
  const leafKeys = getMenuLeafKeys(item.menuList)
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(leafKeys, false)
  })
}
const [pageModalRef, defaultInfo, newDataClick, editDataClick] = usePageModal(
  undefined,
  editCallback
)

const store = useStore()
const menus = computed(() => store.state.entireMenu)
//权限的逻辑处理
const otherInfo = ref({})
const checkChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 45px;
}
</style>
