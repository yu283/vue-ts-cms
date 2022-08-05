<template>
  <div class="pie-echarts">
    <RHYEcharts :options="options"></RHYEcharts>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { IDataType } from '../types'

const props = defineProps<{
  pieData: IDataType[]
}>()
import RHYEcharts from '@/base-ui/echart'
const options = computed(() => ({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'left'
  },
  series: [
    {
      name: '分类数据',
      type: 'pie',
      radius: '50%',
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}))
</script>

<style scoped></style>
