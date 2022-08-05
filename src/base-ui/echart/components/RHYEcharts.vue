<template>
  <div class="rhy-echarts">
    <div ref="echartsDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { watchEffect, defineProps, onMounted, ref, withDefaults } from 'vue'
import { EChartsOption } from 'echarts'
import useEcharts from '@/base-ui/echart/hooks/useEcharts'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
const echartsDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEcharts(echartsDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
