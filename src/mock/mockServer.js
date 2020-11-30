import Mock from 'mockjs'
import banners from './rbanners.json'
import floors from './rfloors.json'

//一旦运行就会拦截Get请求，请求地址 / mock / banners
Mock.mock("/mock/banners", 'get', {
  code: 200,
  //data是个数组长度为4
  "data|4": banners
})

Mock.mock("/mock/floors", 'get', {
  code: 200,
  "data|3-5": floors
})