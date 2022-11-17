// pages/main/main.js
var app=getApp();
Page({
  data: {
    isRule: false,
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    number:8888
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: '主页',
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  cancleUserProfile(e) {
    this.setData({
      userInfo: {},
      hasUserInfo: false
    })
  },
  cSingle(e) {
    wx.navigateTo({
      url: '/pages/single/single'
    })
    app.globalData.userInfo= this.data.userInfo;
    app.globalData.hasUserInfo= this.data.hasUserInfo;
  },
  cMulti(e) {
    this.setData({
      chooseMulti: true
    })
  },
  cRules(e) {
    this.setData({
      isRule:true
    })
    app.globalData.userInfo= this.data.userInfo;
  },
  inMulti(e){
    this.setData({
      chooseMulti:false  
    })
    wx.navigateTo({
      url: '/pages/multi/multi'
    })
    app.globalData.userInfo= this.data.userInfo;
  }
})