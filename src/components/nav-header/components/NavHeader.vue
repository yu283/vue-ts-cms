<template>
  <div class="nav-header">
    <el-icon v-show="!isFold" class="fold-menu" @click="handleFoldClick"
      ><DArrowLeft
    /></el-icon>
    <el-icon @click="handleFoldClick" class="fold-menu" v-show="isFold"
      ><DArrowRight
    /></el-icon>
    <div class="content">
      <div>面包屑</div>
      <div>
        <UserInfo></UserInfo>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DArrowRight, DArrowLeft, ArrowDown } from '@element-plus/icons-vue'
import { ref, defineEmits } from 'vue'
import UserInfo from './UserInfo.vue'

const emit = defineEmits(['foldChange'])
let isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
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
