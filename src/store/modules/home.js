//home组件的vuex状态
import { reqGetBaseCategoryList, reqGetBanners, reqGetFloors } from '@api/home'

export default {
  state: {
    categoryList: [], // 首页三级分类列表数据
    banners: [],    //首页轮播图数据
    floors: [], //获取楼层数据
  },
  getters: {},
  actions: {
    async getCategoryList ({ commit }) {
      //发送请求
      const categoryList = await reqGetBaseCategoryList()
      commit('GET_CATEGORY_LIST', categoryList)
    },
    //轮播图发送请求
    async getBanners ({ commit }) {
      //发送请求
      const banners = await reqGetBanners()
      commit('GET_BANNERS', banners)
    },
    //楼层发送请求
    async getFloors ({ commit }) {
      const floors = await reqGetFloors()
      commit('GET_FLOORS', floors)
    }
  },
  mutations: {
    GET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList
    },
    //轮播图
    GET_BANNERS (state, banners) {
      state.banners = banners
    },
    GET_FLOORS (state, floors) {
      state.floors = floors
    }
  }
}