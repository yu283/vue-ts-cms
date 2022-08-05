<template>
  <div class="rose-echarts">
    <RHYEcharts :options="options"></RHYEcharts>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import RHYEcharts from '@/base-ui/echart'
import { IDataType } from '@/components/page-echarts/types'
const props = defineProps<{
  roseData: IDataType[]
}>()
const options = computed(() => ({
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '类别数据',
      type: 'pie',
      radius: [20, 150],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: props.roseData
    }
  ]
}))
</script>

<style scoped></style>
