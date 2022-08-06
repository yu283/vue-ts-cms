<template>
  <div class="department">
    <PageSearch
      pageName="department"
      @queryBtnClick="queryClick"
      @resetBtnClick="resetClick"
      :searchFormConfig="searchFormConfig"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      pageName="department"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="newDataClick"
      @editBtnClick="editDataClick"
    ></PageContent>
    <PageModal
      page-name="department"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
    ></PageModal>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/contentConfig'
import { usePageModal } from '@/hooks/usePageModal'
import { modalConfig } from './config/modal.config'
import { searchFormConfig } from './config/search.config'
import { useSearch } from '@/hooks/useSearch'
const [pageModalRef, defaultInfo, newDataClick, editDataClick] = usePageModal()
const [pageContentRef, queryClick, resetClick] = useSearch()
</script>

<style scoped></style>
