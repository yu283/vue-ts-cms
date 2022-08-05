<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="titleValue"
      width="30%"
      center
      destroy-on-close
    >
      <RHYForm v-bind="modalConfig" v-model="formData"></RHYForm>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import RHYForm from '@/base-ui/form'
import { defineProps, ref, withDefaults, defineExpose, watch } from 'vue'
import { useStore } from 'vuex'
const props = withDefaults(
  defineProps<{
    modalConfig: any
    defaultInfo?: any
    pageName: string
    otherInfo?: any
  }>(),
  {
    defaultInfo: {},
    otherInfo: {}
  }
)

let titleValue = ref('新建')
const dialogVisible = ref(false)
const formData = ref<any>({})
const store = useStore()
//确定按钮的逻辑
const confirmClick = () => {
  dialogVisible.value = false
  if (titleValue.value === '新建') {
    console.log('新建用户')
    //  新建
    store.dispatch('system/createPageAction', {
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    })
  } else {
    console.log('编辑用户')
    //  编辑
    store.dispatch('system/editPageAction', {
      pageName: props.pageName,
      editData: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    })
  }
}
watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)
defineExpose({
  dialogVisible,
  formData,
  titleValue
})
</script>

<style scoped></style>
