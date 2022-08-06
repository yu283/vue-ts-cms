<template>
  <div class="category">
    <PageSearch
      @queryBtnClick="queryClick"
      @resetBtnClick="resetClick"
      :searchFormConfig="searchFormConfig"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      page-name="category"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="newDataClick"
      @editBtnClick="editDataClick"
    ></PageContent>
    <PageModal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="category"
      :modalConfig="modalConfig"
    ></PageModal>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/contentConfig'
import { usePageModal } from '@/hooks/usePageModal'
import PageModal from '@/components/page-modal'
import { modalConfig } from '@/views/main/product/category/config/modal.config'
import { useSearch } from '@/hooks/useSearch'
import { searchFormConfig } from './config/search.config'
const [pageContentRef, queryClick, resetClick] = useSearch()
const [pageModalRef, defaultInfo, newDataClick, editDataClick] = usePageModal()
</script>

<style scoped></style>
