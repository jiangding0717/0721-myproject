import Vue from 'vue'

import App from './App'

import './style/reset.css'

//引入路由组件
import router from './router'
//引入vuex组件
import store from './store'
// 引入mockServer，为了加载里面代码
// 里面代码一旦加载，就去启动mock服务器，从而拦截相应的请求
import './mock/mockServer'

import './plugins/element.js'
Vue.config.productionTip = false


new Vue({
  //使用组件
  router,
  store,
  render: h => h(App)

}).$mount('#app')