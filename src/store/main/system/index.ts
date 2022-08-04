import { Module } from 'vuex'
import { ISystemState } from '@/store/main/system/types'
import { IRootState } from '@/store/types'
import { getPageDataList } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        /*switch (pageName) {
          case 'users':
            return state.usersList
          case 'role':
            return state.roleList
        }*/
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      //  发送请求
      const pageResult = await getPageDataList(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      const changePageList = `change${pageName
        .trim()
        .toLowerCase()
        .replace(pageName[0], pageName[0].toUpperCase())}List`
      const changePageCount = `change${pageName
        .trim()
        .toLowerCase()
        .replace(pageName[0], pageName[0].toUpperCase())}Count`
      commit(changePageList, list)
      commit(changePageCount, totalCount)
    }
  }
}

export default systemModule
