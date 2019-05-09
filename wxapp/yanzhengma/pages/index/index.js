//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    start: false
  },
  //事件处理函数
  onLoad() {
    setTimeout(() => {
      this.setData({
        start: true
      })
    }, 2000)
  }
})
