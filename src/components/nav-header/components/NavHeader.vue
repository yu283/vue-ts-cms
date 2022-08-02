<template>
  <div class="nav-header">
    <el-icon v-show="!isFold" class="fold-menu" @click="handleFoldClick"
      ><DArrowLeft
    /></el-icon>
    <el-icon @click="handleFoldClick" class="fold-menu" v-show="isFold"
      ><DArrowRight
    /></el-icon>
  </div>
</template>

<script lang="ts" setup>
import { DArrowRight, DArrowLeft } from '@element-plus/icons-vue'
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['foldChange'])
let isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
