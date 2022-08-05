<template>
  <div class="rhy-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="header-handler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="selectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndex"
        type="index"
        label="序号"
        :index="indexMethod"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="page.currentPage"
          v-model:page-size="page.pageSize"
          :page-sizes="[8, 10, 15]"
          :background="false"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    listData: any[]
    propList: any[]
    showIndexColumn: boolean
    showSelectColumn: boolean
    title: string
    listCount: number
    page: any
    childrenProps?: any
    showFooter?: boolean
  }>(),
  {
    showIndexColumn: false,
    showSelectColumn: false,
    title: '',
    listCount: 0,
    page: {
      currentPage: 0,
      pageSize: 8
    },
    childrenProps: () => ({}),
    showFooter: true
  }
)
const emit = defineEmits<{
  (e: 'selectionChange', value: any): void
  (e: 'update:page', value: any): void
}>()
const indexMethod = (index: number) => {
  return index + 1
}
const showIndex = () => {
  return props.showIndexColumn
}
const selectionChange = (value: any) => {
  emit('selectionChange', value)
}
//分页器的函数
const handleSizeChange = (pageSize: number) => {
  emit('update:page', {
    ...props.page,
    pageSize
  })
}
const handleCurrentChange = (currentPage: number) => {
  emit('update:page', {
    ...props.page,
    currentPage: currentPage
  })
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
.el-table :deep(th.el-table__cell),
.el-table :deep(td.el-table__cell) {
  position: static;
}
.el-table__fixed-body-wrapper {
  z-index: auto !important;
}
</style>
