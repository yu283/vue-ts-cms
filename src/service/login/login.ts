import rhyRequest from '@/service'
import { IAccount, IDataType, ILoginResult } from '@/service/login/types'

enum LoginAPI {
  AccountLogin = 'login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/' //用法： /role/{id}/menu
}
export function accountLoginRequest(account: IAccount) {
  return rhyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function getUserInfoById(id: number) {
  return rhyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function getUserMenusByRoleId(id: number) {
  return rhyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
