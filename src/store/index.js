import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
//使用
Vue.use(Vuex)

const state = {

}
const actions = {}
const mutations = {}
const getters = {}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})