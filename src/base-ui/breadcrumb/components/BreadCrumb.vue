<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <template v-if="item.path">
          <el-breadcrumb-item :to="{ path: item.path }">{{
            item.name
          }}</el-breadcrumb-item>
        </template>
        <template v-else>
          <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
        </template>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { defineProps, withDefaults } from 'vue'
import { IBreadcrumb } from '@/base-ui/breadcrumb/type'

const props = withDefaults(
  defineProps<{
    breadcrumbs: IBreadcrumb[]
  }>(),
  {
    breadcrumbs: () => []
  }
)
</script>

<style scoped></style>
