<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent
      page-name="role"
      :contentTableConfig="contentTableConfig"
    ></PageContent>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { contentTableConfig } from '@/views/main/system/role/config/contentConfig'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/searchConfig'
</script>

<style scoped></style>
