<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent
      :pageName="pageName"
      :contentTableConfig="contentTableConfig"
    ></PageContent>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import { searchFormConfig } from '@/views/main/system/user/config/search.config'
import { contentTableConfig } from '@/views/main/system/user/config/contentConfig'
import PageContent from '@/components/page-content'
const pageName = 'users'
</script>

<style scoped lang="less"></style>
