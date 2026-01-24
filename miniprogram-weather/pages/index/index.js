// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     info: 'hello world',
     image: '/images/1.jpg',
     randomNum1: Math.random() * 10,//10以内的数
     randomNum2: Math.random().toFixed(2),//两个小数点
     count: 0,
     msg:'你好',
     type: 1,
     flag: true,
     arr1: ['aa','bb','cc'],
     userList: [
     { id: 1,name: 'aa'},
     { id: 2,name: 'bb'},
     { id: 3,name: 'cc'}
     ],
     //导航传递过来的参数
     query:{}
  },
  //定义按钮事件
  btnTapHandler(e) {
    console.log(e)
  },
  //+1按钮的点击事件处理
  changeCount() {
    this.setData({
      count: this.data.count + 1
    })
    console.log('完成')
  },
  bindtap2(e) {
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },
  //input输入框事件处理
  inputHandler(e) {
    // console.log(e.detail.value)
    this.setData({
      msg:e.detail.value,
    })
  },
  goBack() {
    wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     console.log(options)
     this.setData({
      query:options
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
