<template>
  <div class="line-echarts">
    <RHYEcharts :options="options"></RHYEcharts>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import RHYEcharts from '@/base-ui/echart'
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    xLabels: string[]
    lineTitle: string
    values: any[]
  }>(),
  {
    lineTitle: ''
  }
)
const options = computed(() => ({
  title: {
    text: props.lineTitle
  },
  legend: {},
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: props.xLabels
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '类别',
      stack: '总量',
      data: props.values,
      type: 'line',
      areaStyle: {}
    }
  ]
}))
</script>

<style scoped></style>
