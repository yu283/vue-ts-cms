<template>
  <div class="goods">
    <PageContent pageName="goods" :contentTableConfig="contentTableConfig">
      <template #image="scope">
        <div class="demo-image__preview">
          <el-image
            style="width: 60px; height: 60px"
            :src="scope.row.imgUrl"
            fit="cover"
            :previewSrcList="[scope.row.imgUrl]"
            :initial-index="0"
          ></el-image>
        </div>
      </template>
      <template #oldPrice="scope">
        {{ '￥' + scope.row.oldPrice }}
      </template>
    </PageContent>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/contentConfig'
</script>

<style scoped>
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
