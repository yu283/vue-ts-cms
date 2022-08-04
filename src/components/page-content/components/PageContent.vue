<template>
  <div class="page-content">
    <RHYTable
      :listData="dataList"
      :listCount="dataCount"
      @selectionChange="selectionChange"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!--        header中的插槽-->
      <template #header-handler>
        <el-button v-if="isCreate" type="primary" plain>新建</el-button>
        <!--          <el-button :icon="Refresh" type="primary" plain>刷新</el-button>-->
      </template>
      <!--        列中的插槽-->
      <template #status="scope">
        <el-button
          size="small"
          plain
          disabled
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable === 1 ? '可用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handle>
        <div class="handle-btns">
          <el-button size="small" :icon="Edit" v-if="isUpdate" type="primary"
            >编辑</el-button
          >
          <el-button size="small" :icon="Delete" v-if="isDelete" type="danger"
            >删除</el-button
          >
        </div>
      </template>
      <!--      在pageContent中动态插入其他的动态插槽-->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </RHYTable>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  defineExpose,
  defineProps,
  ref,
  watch,
  withDefaults
} from 'vue'
import { Edit, Delete, Refresh } from '@element-plus/icons-vue'
import RHYTable from '@/base-ui/table'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/usePermission'

const props = withDefaults(
  defineProps<{
    contentTableConfig: any
    pageName: string
  }>(),
  {
    contentTableConfig: {}
  }
)
//获取操作的权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')

//双向绑定pageInfo
const pageInfo = ref({
  currentPage: 0,
  pageSize: 10
})
watch(pageInfo, () => {
  getPageData()
})
//选择改变
const selectionChange = (value: any) => {
  // console.log(value)
}
/*VUEX*/
const store = useStore()
//发送网络请求
const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset:
        pageInfo.value.currentPage >= 0
          ? pageInfo.value.currentPage * pageInfo.value.pageSize
          : 0,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()
//从Vuex中获取数据
const dataList = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
const dataCount = computed(() =>
  store.getters['system/pageListCount'](props.pageName)
)
//获取其他的动态插槽名称
const otherPropSlots = props.contentTableConfig?.propList.filter(
  (item: any) => {
    if (item.slotName === 'status') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName === 'handle') return false
    return true
  }
)
//暴露出去的属性
defineExpose({
  getPageData
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid gray;
}
</style>
