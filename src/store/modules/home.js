//home组件的vuex状态
import { reqGetBaseCategoryList } from '@api/home'

export default {
  state: {
    categoryList: []
  },
  getters: {},
  actions: {
    async getCategoryList ({ commit }) {
      //发送请求
      const categoryList = await reqGetBaseCategoryList()
      commit('GET_CATEGORY_LIST', categoryList)
    }
  },
  mutations: {
    GET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList
    }
  }
}