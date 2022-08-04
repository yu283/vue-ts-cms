import { ref } from 'vue'
import PageContent from 'components/page-content'

export const useSearch = () => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const queryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  const resetClick = () => {
    pageContentRef.value?.getPageData()
  }
  return [pageContentRef, queryClick, resetClick]
}
