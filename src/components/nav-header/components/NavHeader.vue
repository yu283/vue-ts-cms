<template>
  <div class="nav-header">
    <el-icon v-show="!isFold" class="fold-menu" @click="handleFoldClick"
      ><DArrowLeft
    /></el-icon>
    <el-icon @click="handleFoldClick" class="fold-menu" v-show="isFold"
      ><DArrowRight
    /></el-icon>
    <div class="content">
      <div>
        <RHYBreadCrumb :breadcrumbs="breadcrumbs"></RHYBreadCrumb>
      </div>
      <div>
        <UserInfo></UserInfo>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DArrowRight, DArrowLeft, ArrowDown } from '@element-plus/icons-vue'
import { ref, defineEmits, computed } from 'vue'
import UserInfo from './UserInfo.vue'
import RHYBreadCrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/mapMenus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

const emit = defineEmits(['foldChange'])
let isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
//面包屑的数据
const store = useStore()
const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const route = useRoute()
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
