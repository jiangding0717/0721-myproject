import Vue from 'vue'

import App from './App'

//引入公共资源
import './style/reset.css'
import './style/iconfont.css'
//引入路由组件
import router from './router'
//引入vuex组件
import store from './store'
// 引入mockServer，为了加载里面代码
// 里面代码一旦加载，就去启动mock服务器，从而拦截相应的请求
import './mock/mockServer'
import 'swiper/swiper-bundle.min.css';

import './plugins/element.js'
Vue.config.productionTip = false


new Vue({
  //定义全局事件
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  //使用组件
  router,
  store,
  render: h => h(App)

}).$mount('#app')