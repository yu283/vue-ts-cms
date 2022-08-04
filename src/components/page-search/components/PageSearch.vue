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
            <el-button type="primary" @click="queryClick"
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

// eslint-disable-next-line no-undef
const emit = defineEmits<{
  (e: 'resetBtnClick'): void
  (e: 'queryBtnClick', formData: any): void
}>()

const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (let item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)
//重置的处理
const resetClick = () => {
  for (const key in formOriginData) {
    //递归里面的键 使得下一层的浅拷贝可以监测到值的修改
    formData.value[`${key}`] = formOriginData[key]
  }
  // formData.value = formOriginData
  emit('resetBtnClick')
}
//搜索的处理
const queryClick = () => {
  emit('queryBtnClick', formData.value)
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
