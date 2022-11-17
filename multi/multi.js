// pages/multi/multi.js
const util = require('../../utils/util.js');
var app=getApp();
Page({
  data: {
    name: "您",
    isClicked: false,
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0,
    Award: "",
    records:[]
  },
Throw(){
  this.setData({
    isClicked : true,
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0
  })
  this.setData({
    value1: this._Randomnum(),
    value2: this._Randomnum(),
    value3: this._Randomnum(),
    value4: this._Randomnum(),
    value5: this._Randomnum(),
    value6: this._Randomnum(),
  })
  setTimeout(() => {
    this._Check()
    wx.showToast({
      title: '您摇出的结果是',
      icon:'none'
    })
    this.setData({
      isClicked : false,
    })
  }, 1500);
},

_setRecords(){
  var tmparr = [{
    time: util.formatTime(new Date()),
    award: this.data.Award
  }]
  this.data.records = tmparr.concat(this.data.records)
  this.setData({
    'records': this.data.records
  });
},

_Randomnum() {
  return parseInt(Math.random()*(6)+1)
},

async _Check(){
  try {
    const p=await wx.cloud.callFunction({
      name:"check",
      data:{
        v1:this.data.value1,
        v2:this.data.value2,
        v3:this.data.value3,
        v4:this.data.value4,
        v5:this.data.value5,
        v6:this.data.value6
      }
    })
    this.setData({
      Award: p.result
    })
    wx.showToast({
      title: p.result+"!",
      icon: 'none',
      duration: 1500
    })
    this._setRecords();
  } catch (e) {
    console.log("error");
  }
},

  onLoad(options) {
    this.setData({
      info: app.globalData.userInfo,
      isClicked:true,
      value1: 4,
      value2: 4,
      value3: 4,
      value4: 4,
      value5: 1,
      value6: 1
    })
    this.setData({
      name: this.data.info.nickName
    })
    setTimeout(() => {
      this.setData({
        isClicked:false
      })
    }, 1500);
  },

  onReady() {
    wx.setNavigationBarTitle({
      title: '多人模式',
    })
  },

  getRule(){
    this.setData({
      isRule:true
    })
  }
})