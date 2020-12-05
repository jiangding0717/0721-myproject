import request from '@utils/request'

//获取商品数据详情
export const reqGetProductDetail = (id) => {
  return request({
    method: 'GET',
    url: `/item/${id}`
  })
}