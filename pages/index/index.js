//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    img: '../../images/背景图.jpg',
    userInfo: {},
    hasUserInfo: false,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 7000,
    duration: 800,
    circular:true,
    Pic:[
      {
        style:"demo-text-1",
        url:"/images/fangji.png",
        href:"baidu"
      },{
        style:"demo-text-2",
        url:"/images/fenxi.png",
        href:"bing"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  baidu: function(e){
    wx.navigateTo({
      url: '/pages/link/link',
      success: res => {
        console.log(res.data)
      }
    })
  },
  zhongyao: function (e){
    wx.navigateTo({
      url: '/pages/zhongyao/zhongyao',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  chufang: function (e) {
    wx.navigateTo({
      url: '/pages/chufang/chufang',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  fangji: function (e) {
    wx.navigateTo({
      url: '/pages/fangji/fangji',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  fenxi: function (e) {
    wx.navigateTo({
      url: '/pages/fenxi/fenxi',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})