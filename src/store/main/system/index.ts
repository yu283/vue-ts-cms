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
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0,
      storyList: [],
      storyCount: 0
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
    },
    changeDepartmentList(state, value: any[]) {
      state.departmentList = value
    },
    changeDepartmentCount(state, value: number) {
      state.departmentCount = value
    },
    changeCategoryList(state, value: any[]) {
      state.categoryList = value
    },
    changeCategoryCount(state, value: number) {
      state.categoryCount = value
    },
    changeStoryList(state, value: any[]) {
      state.storyList = value
    },
    changeStoryCount(state, value: number) {
      state.storyCount = value
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      //  ????????????
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
      //??????
      await deletePageData(pageUrl)
      //  ???????????????????????????
      context.dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageAction(context, payload: any) {
      //??????????????????
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      //  ????????????????????????
      context.dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageAction(context, payload: any) {
      //??????????????????
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      //???????????????????????????
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
