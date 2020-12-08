import {
  reqGetCartList,
  reqUpdateCartCount,
  reqUpdateCartCheck
  // , reqDelCart
} from '@api/shopcart'
export default ({
  state: {
    cartList: []//获取购物车数据
  },
  getters: {},
  actions: {
    async getCartList ({ commit }) {
      const cartList = await reqGetCartList();
      commit('GET_CARTLIST', cartList)
    },
    async updateCartCheck ({ commit }, { skuId, isChecked }) {
      //发送请求更新服务器数据
      await reqUpdateCartCheck(skuId, isChecked)
      console.log(commit);
    },
    async updateCartCount ({ commit }, { skuId, skuNum }) {
      await reqUpdateCartCount(skuId, skuNum)
      // commit('UPDATE_CART_COUNT', { skuId, skuNum })
      console.log(commit);
    }
  },
  mutations: {
    GET_CARTLIST (state, cartList) {
      state.cartList = cartList
    },
    // UPDATE_CART_COUNT(state, { skuId, skuNum }) {
    // 	state.cartList = state.cartList.map((cart) => {
    // 		if (cart.skuId === skuId) {
    // 			cart.skuNum += skuNum;
    // 		}
    // 		return cart;
    // 	});
    // },
  }
})