import { ILoginState } from '@/store/login/types'
import { ISystemState } from '@/store/main/system/types'
import { IDashboardState } from '@/store/main/analysis/types'

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
