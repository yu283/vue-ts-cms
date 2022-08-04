<template>
  <div class="pageSearch">
    <div class="search">
      <RHYForm v-bind="searchFormConfig" v-model="formData">
        <template #header>
          <h1 class="header">高级检索</h1>
        </template>
        <template #footer>
          <div class="btns">
            <el-button type="primary" @click="resetClick"
              ><el-icon><Refresh /></el-icon>重置</el-button
            >
            <el-button type="primary"
              ><el-icon><Search /></el-icon>搜索</el-button
            >
          </div>
        </template>
      </RHYForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import RHYForm from '@/base-ui/form'
import { Refresh, Search } from '@element-plus/icons-vue'

// eslint-disable-next-line no-undef
const props = defineProps<{
  searchFormConfig: any
}>()

const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (let item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)
//重置的处理
const resetClick = () => {
  formData.value = formOriginData
}
</script>

<style scoped>
.header {
  color: gray;
}
.btns {
  padding: 0 50px 20px 0;
}
</style>
