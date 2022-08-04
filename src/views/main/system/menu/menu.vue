<template>
  <div class="menu">
    <PageContent
      :contentTableConfig="contentTableConfig"
      page-name="menu"
    ></PageContent>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/contentConfig'
</script>

<style scoped></style>
