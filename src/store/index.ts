import { createStore } from 'vuex'
import { IRootState } from './types'
import login from '@/store/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'rhy',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export default store
