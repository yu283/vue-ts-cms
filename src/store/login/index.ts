import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '@/store/types'
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/types'
import localCatch from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/mapMenus'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
      //  userMenus => routes
      const routes = mapMenusToRoutes(userMenus)
      //  将路由添加到router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCatch.setCache('token', token)
      //其他的操作
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changUserInfo', userInfoResult)
      localCatch.setCache('userInfo', userInfo)
      //请求用户菜单
      const userMenusResult = await getUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCatch.setCache('userMenus', userMenus)
      //跳转页面
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCatch.getCatch('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCatch.getCatch('userInfo')
      if (userInfo) {
        commit('changUserInfo', userInfo)
      }
      const userMenus = localCatch.getCatch('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    },
    PhoneLoginAction({ commit }, payload: any) {
      console.log('accountPhoneAction')
    }
  }
}

export default loginModule
