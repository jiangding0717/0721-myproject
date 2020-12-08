import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'
import Deatil from '../views/Detail'
import AddCartSuccess from '../views/AddCartSuccess'
import ShopCart from '../views/ShopCart'
//支付页面
import Pay from '@views/Pay'
import PaySuccess from '@views/PaySuccess'
import Trade from '@views/Trade'
import Center from '@views/Center'

//重写push和replace方法
//目的：为了让编程导航重复点击不报错
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, onComplete, onAbout) {
  //如果用户想处理失败的就处理
  if (onComplete && onAbout) {
    return push.call(this, location, onComplete, onAbout)
  }
  //如果用户不处理失败，给默认值：空函数
  return push.call(this, location, onComplete, () => { })
}
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call(this, location, onComplete, () => { });
};

//使用组件
Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login,
      //当组件加载显示时，meta中的参数会传到$route中
      //当组件不加载显示时，meta中的参数不会传
      meta: {
        isFooterHide: true
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isFooterHide: true
      }
    },
    {
      name: 'search',//命名路由
      //?代表判断params参数是否可选
      path: '/search/:searchText?',
      component: Search
    },
    {
      path: '/detail/:id',
      component: Deatil
    },
    {
      name: 'addcartsuccess',
      path: '/addcartsuccess',
      component: AddCartSuccess
    },
    {
      name: 'shopcart',
      path: '/shopcart',
      component: ShopCart
    },
    {
      name: 'pay',
      path: '/pay',
      component: Pay
    },
    {
      name: 'paysuccess',
      path: '/paysuccess',
      component: PaySuccess
    },
    {
      name: 'trade',
      path: '/trade',
      component: Trade
    },
    {
      name: 'center',
      path: '/center/myorder',
      component: Center
    },
  ],
  //每次 切换路由页面滚动条位置
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})