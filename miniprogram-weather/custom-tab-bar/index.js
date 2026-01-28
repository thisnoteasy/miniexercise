// custom-tab-bar/index.js
import { createStoreBindings, storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/store'
Component({
  options: {
    styleIsolation: 'shared'
  },
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields:{
      sum: 'sum',
      active: 'activeTabBarIndex'
    },
    actions: {
      updateActive: 'updateActiveTabBarIndex'
    }
  },
  observers: {
    'sum': function(val) {
      this.setData({
        'list[1].info': val
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "list":[
      {
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "/images/index.png",
        "selectedIconPath": "/images/index-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/images/list.png",
        "selectedIconPath": "/images/list-active.png",
        info: 2
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/page.png",
        "selectedIconPath": "/images/page-active.png"
      }
    ]
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      //this.setData({ active: event.detail });
      this.updateActive(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath
      })
    },
  }
})