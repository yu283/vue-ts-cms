<template>
  <div class="user">
    <PageSearch
      @queryBtnClick="queryClick"
      @resetBtnClick="resetClick"
      :searchFormConfig="searchFormConfig"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
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
import { useSearch } from '@/hooks/useSearch'

const pageName = 'users'
const [pageContentRef, queryClick, resetClick] = useSearch()
</script>

<style scoped lang="less"></style>
