import { Module } from 'vuex'
import { ISystemState } from '@/store/main/system/types'
import { IRootState } from '@/store/types'
import {
  getPageDataList,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
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
    },
    changeGoodsList(state, value: any[]) {
      state.goodsList = value
    },
    changeGoodsCount(state, value: number) {
      state.goodsCount = value
    },
    changeMenuList(state, value: any[]) {
      state.menuList = value
    },
    changeMenuCount(state, value: number) {
      state.menuCount = value
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
    },
    async deletePageDataAction(context, payload: any) {
      //  pageName
      //  id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      //删除
      await deletePageData(pageUrl)
      //  再次请求最新的数据
      context.dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageAction(context, payload: any) {
      //创建数据请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      //  请求最新的额数据
      context.dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageAction(context, payload: any) {
      //编辑数据请求
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      //再次请求最新的数据
      context.dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
