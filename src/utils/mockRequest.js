/* 
  封装axios拦截器
*/
import axios from 'axios'
import { Message } from 'element-ui'

//引入进度条
import NProgress from 'nprogress'
import "nprogress/nprogress.css";
const instance = axios.create({
  baseURL: '/mock', //公共的基础路径
  headers: {},
})

//设置请求拦截器
instance.interceptors.request.use(
  // config 请求的配置对象
  (config) => {
    //开始进度条
    NProgress.start()

    return config
  }
)

//设置响应拦截器
instance.interceptors.response.use(
  //响应成功：响应状态码为2xx
  (response) => {
    // 判断响应的code是否是200

    //结束进度条
    NProgress.done()
    if (response.data.code === 200) {
      // 返回成功的响应数据
      return response.data.data
    }
    const { message } = response.data
    //提示错误
    Message.error(message)
    // 功能失败 --> 返回失败的Promise
    return Promise.reject(message)
  },
  // 响应失败：当响应状态码不是 2xx
  (error) => {
    const message = error.message || "网络错误";
    return Promise.reject(message)
  }
)
export default instance