//app.js
App({
  onLaunch: function(options) {
    const self = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'chenmenglong-24'
      })
    }

    this.globalData.shareParam = options.query
    // 查询是否授权
    wx.getSetting({
      success(settingRes) {
        // 已经授权
        if (settingRes.authSetting['scope.userinfo']) {
          wx.getUserInfo({
            success: (infoRes) => {
              self.globalData.userInfo = infoRes.userInfo
              if (self.catchUserInfo) {
                self.catchUserInfol(infoRes.userInfo)
              }
                // 如果是旧用户的话就更新信息
                wx.cloud.callFunction({
                  name: 'createUser',
                  data: {
                    avatarUrl: infoRes.userInfo.avatarUrl,
                    name: '',
                    nickName: infoRes.userInfo.nickName,
                    sex: infoRes.userInfo.gender
                  }
                })
            },
            fail: () => {
              console.log(err)
            }

          });
        } else {
          wx.redirectTo({
            url: `/pages/login/login?back=${options.path.split('/')[1]}`
          })
        }
      }
    })
    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {},
      success(res){
        self.globalData.userInfoFromcloud = res.result.storeUser
      }
    })
  },
  globalData: {
    currentGroupInfo: null,
    currentGroupUserList: [],
    currrentBill: null,
    userInfo: null,
    shareParam: null,
    billId: '',
    userInfoFromcloud: null,
    userRemark: {}
  }
})