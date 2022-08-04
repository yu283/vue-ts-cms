<template>
  <div class="page-content">
    <RHYTable
      :listData="dataList"
      @selectionChange="selectionChange"
      v-bind="contentTableConfig"
    >
      <!--        header中的插槽-->
      <template #header-handler>
        <el-button type="primary" plain>新建用户</el-button>
        <!--          <el-button :icon="Refresh" type="primary" plain>刷新</el-button>-->
      </template>
      <!--        列中的插槽-->
      <template #status="scope">
        <el-button
          size="small"
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
          <el-button size="small" :icon="Edit" type="primary">编辑</el-button>
          <el-button size="small" :icon="Delete" type="danger">删除</el-button>
        </div>
      </template>
      <template #footer>
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[8]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </template>
    </RHYTable>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'
import { Edit, Delete, Refresh } from '@element-plus/icons-vue'
import RHYTable from '@/base-ui/table'
import { useStore } from '@/store'

const props = withDefaults(
  defineProps<{
    contentTableConfig: any
    pageName: string
  }>(),
  {
    contentTableConfig: {}
  }
)
const selectionChange = (value: any) => {
  // console.log(value)
}
const store = useStore()
store.dispatch('system/getPageListAction', {
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 8
  }
})
const dataList = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid gray;
}
</style>
