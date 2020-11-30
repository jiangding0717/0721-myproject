//使用 Mock
var Mock = require('mockjs')

Mock.Random.ctitle();
Mock.Random.color();
Mock.Random.cname()
Mock.Random.image()


var data = Mock.mock({
  // "subTitle|3-10" 属性subTitle的值为数组，长度为3 - 10位
  // @ctitle(1,4) 随机中文标题, 长度1-4位
  tilte: "@tilte(4)",
  // "caroucelList|4" 属性caroucelList的值为数组，长度为4位
  "subTitle|3-10": ["@ctilte(1,4)"],
  // "@image(大小, 背景色, 字体色, 图片格式, 图片内容)" 随机图片
  "caroucelList|4": ["@image('200x100', '@color', '#FFF', 'png', '@cname')",]
})
console.log(data);