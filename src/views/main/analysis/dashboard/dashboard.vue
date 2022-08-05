<template>
  <div class="dashboard">
    <el-row :gutter="15">
      <el-col :span="7"
        ><RHYCard title="商品数量图">
          <RoseEcharts :rose-data="categoryGoodsCount"></RoseEcharts> </RHYCard
      ></el-col>
      <el-col :span="10"
        ><RHYCard title="城市销量图">
          <MapEcharts :map-data="mapData"></MapEcharts> </RHYCard
      ></el-col>
      <el-col :span="7">
        <RHYCard title="商品数量图">
          <PieEcharts :pie-data="categoryGoodsCount"></PieEcharts>
        </RHYCard>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <RHYCard title="商品销量">
          <LineEcharts
            v-bind="categoryGoodsSale"
            line-title="商品销量"
          ></LineEcharts>
        </RHYCard>
      </el-col>
      <el-col :span="12"
        ><RHYCard title="商品收藏">
          <BarEcharts v-bind="categoryGoodsFavor"></BarEcharts> </RHYCard
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import RHYCard from '@/base-ui/card'
import { useStore } from '@/store'
import {
  PieEcharts,
  RoseEcharts,
  LineEcharts,
  BarEcharts,
  MapEcharts
} from '@/components/page-echarts'
import { computed } from 'vue'

const store = useStore()
store.dispatch('dashboard/getDashboardDataAction')

const categoryGoodsCount = computed(() =>
  store.state.dashboard.categoryGoodsCount.map((item: any) => {
    return {
      name: item.name,
      value: item.goodsCount
    }
  })
)
const categoryGoodsSale = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []

  const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
  for (const item of categoryGoodsSale) {
    xLabels.push(item.name)
    values.push(item.goodsCount)
  }
  return { xLabels, values }
})
const categoryGoodsFavor = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []

  const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
  for (const item of categoryGoodsFavor) {
    xLabels.push(item.name)
    values.push(item.goodsFavor)
  }
  return { xLabels, values }
})
const mapData = computed(() => {
  return store.state.dashboard.addressGoodsSale.map((item: any) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped>
.content-row {
  margin-top: 30px;
}
</style>
