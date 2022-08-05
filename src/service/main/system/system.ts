import rhyRequest from '../../index'
import { IDataType } from '@/service/types'

export function getPageDataList(url: string, queryInfo: any) {
  return rhyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return rhyRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return rhyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return rhyRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
