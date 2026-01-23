// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //发起get请求
      getInfo() {
        const yourToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJ0ZXN0VXNlciIsImlhdCI6MTcwNjA2NzYwMCwiZXhwIjoxNzA2MTU0MDAwfQ.7Z8n9X8s7k7s8d7f8s7d8f7s8d7f8s7d8f7s8d7f8s7d8f';
        wx.request({
          url: 'http://127.0.0.1:4523/m1/6227997-5921626-85c8cd6b/diaries/favorites/count',
          method: 'GET',
          header: {
            'Authorization': 'Bearer ' + yourToken // 替换成你的 Token
          },
          success: (res) => {
            console.log(res.data)
          },
          fail: (err) => {
            console.error('请求失败：', err)
          }
        })
      },
  postInfo() {
    const yourToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJ0ZXN0VXNlciIsImlhdCI6MTcwNjA2NzYwMCwiZXhwIjoxNzA2MTU0MDAwfQ.7Z8n9X8s7k7s8d7f8s7d8f7s8d7f8s7d8f7s8d7f8s7d8f';
    wx.request({
      url: "http://127.0.0.1:4523/m1/6227997-5921626-dac25b43/cards",
      method: "POST",
      header: {
        'Authorization': 'Bearer ' + yourToken // 替换成你的 Token
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     this.getInfo()
     this.postInfo()
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