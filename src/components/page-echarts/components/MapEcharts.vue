<template>
  <div class="bar-echarts">
    <RHYEcharts :options="options"></RHYEcharts>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'
import RHYEcharts from '@/base-ui/echart'
import { convertData } from '@/components/page-echarts/utils/convertData'
import { IDataType } from '@/components/page-echarts/types'

const props = withDefaults(
  defineProps<{
    title?: string
    mapData: IDataType[]
  }>(),
  {
    title: ''
  }
)
const options = computed(() => ({
  backgroundColor: '#fff',
  title: {
    text: '全国销量统计',
    left: 'center',
    textStyle: {
      color: '#aaa'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params: any) {
      return params.name + ' : ' + params.value[2]
    }
  },
  visualMap: {
    min: 0,
    max: 60000,
    left: 20,
    bottom: 20,
    calculable: true,
    text: ['高', '低'],
    inRange: {
      color: ['rgb(226,27,27)', 'rgb(100,231,31)', 'rgb(6,162,227)']
    },
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: 'china',
    roam: 'scale',
    emphasis: {
      areaColor: '#f4cccc',
      borderColor: 'rgb(9, 54, 95)',
      itemStyle: {
        areaColor: '#bdeba5'
      }
    }
  },
  series: [
    {
      name: '销量',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(props.mapData),
      symbolSize: 12,
      emphasis: {
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        }
      }
    },
    {
      type: 'map',
      map: 'china',
      geoIndex: 0,
      aspectScale: 0.75,
      tooltip: {
        show: false
      }
    }
  ]
}))
</script>

<style scoped></style>
