import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from '@/store/login'
import system from '@/store/main/system'
import { getPageDataList } from '@/service/main/system/system'
import dashboard from '@/store/main/analysis/dashboard'
import router from '@/router'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'RenHY',
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  getters: {},
  mutations: {
    changeEntireDepartment(state, list: any) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list: any) {
      state.entireRole = list
    },
    changeEntireMenu(state, list: any) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageDataList('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageDataList('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      const menuResult = await getPageDataList('/menu/list', {
        offset: 0,
        size: 1000
      })
      const { list: menuList } = menuResult.data
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    },
    async toLogin() {
      router.push('/login')
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
