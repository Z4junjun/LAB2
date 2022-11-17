// Components/rules/rules.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isRules:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    deleteRule(e){
      this.setData({
        isRules: false
      })
    }
  }
})
