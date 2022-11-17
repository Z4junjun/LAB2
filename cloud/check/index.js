// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
    let value1=event.v1;
    let value2=event.v2;
    let value3=event.v3;
    let value4=event.v4;
    let value5=event.v5;
    let value6=event.v6;
    let values=[value1,value2,value3,value4,value5,value6];
    let nums=[0,0,0,0,0,0,0];
    for (let i = 0; i < values.length; i++) {
      nums[values[i]]++
    }
    if(nums[4]==6){
      return {ans: "满堂红"}
    }else if(nums[4]==5){
      return "五红"
    }else if(nums[4]==4&&nums[1]==2){
      return "状元插金花"
    }else if(nums[1]==5||nums[2]==5||nums[3]==5||
      nums[5]==5||nums[6]==5){
      return "五子登科"
    }else if(nums[4]==4){
      return "四点红"
    }else if(nums[4]==3){
      return "三红"
    }else if(nums[1]==4||nums[2]==4||nums[3]==4||
      nums[5]==4||nums[6]==4){
      return "四进"
    }else if(nums[4]==2){
      return "二举"
    }else if(nums[4]==1){
      if(nums[1]==1&&nums[2]==1&&nums[3]==1&&nums[5]==1&&nums[6]==1){
        return "对堂"
      }else{
        return "一秀"
      }
    }else{
      if(nums[1]==6){
        return "遍地锦"
      }else if(nums[2]==6||nums[3]==6||nums[5]==6||nums[6]==6){
        return "六勃黑"
      }else{
        return "一无所获"
      }
    }
}