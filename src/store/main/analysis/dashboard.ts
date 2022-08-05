import { Module } from 'vuex'

import { IDashboardState } from './types'
import { IRootState } from '@/store/types'
import {
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list: any) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list: any) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list: any) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list: any) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      const categorySaleResult = await getCategoryGoodsSale()
      const categoryFavorResult = await getCategoryGoodsFavor()
      const addressSaleResult = await getAddressGoodsSale()
      commit('changeCategoryGoodsCount', categoryCountResult.data)
      commit('changeCategoryGoodsSale', categorySaleResult.data)
      commit('changeCategoryGoodsFavor', categoryFavorResult.data)
      commit('changeAddressGoodsSale', addressSaleResult.data)
    }
  }
}

export default dashboardModule
