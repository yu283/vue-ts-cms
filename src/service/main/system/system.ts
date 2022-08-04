import rhyRequest from '../../index'
import { IDataType } from '@/service/types'

export function getPageDataList(url: string, queryInfo: any) {
  return rhyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
