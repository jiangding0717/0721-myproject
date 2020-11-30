import Vue from 'vue'

import App from './App'

import './style/reset.css'

//引入路由组件
import router from './router'

import './plugins/element.js'
Vue.config.productionTip = false


new Vue({
  //使用组件
  router,
  render: h => h(App)
}).$mount('#app')