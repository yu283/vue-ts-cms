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
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer"></slot>
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
  }>(),
  {
    showIndexColumn: false,
    showSelectColumn: false,
    title: ''
  }
)
const emit = defineEmits<{
  (e: 'selectionChange', value: any): void
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
</style>
