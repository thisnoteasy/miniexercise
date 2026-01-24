// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //发起get请求
      getInfo() {
        const yourToken = 'oQJMjILXrSlnDHsNIRbmCWODFqjgZAdhNhPwrTtvJxlCahxtVUyDkRHGqQTfvAvhuaKsAIFOUOJdmEkDnCKTYUtnCEpfOqPGopLCIazBadtHyHoXNhoTpjVfebLPkFrP';
        wx.request({
          url: 'https://api.xingshi.site/social-service/chat/sessions',
          method: 'GET',
          header: {
            'Authorization': 'Bearer ' + yourToken // 替换成你的 Token
          },
          success: (res) => {
            console.log(res)
          },
          fail: (err) => {
            console.error('请求失败：', err)
          }
        })
      },
  postInfo() {
    const yourToken = 'oQJMjILXrSlnDHsNIRbmCWODFqjgZAdhNhPwrTtvJxlCahxtVUyDkRHGqQTfvAvhuaKsAIFOUOJdmEkDnCKTYUtnCEpfOqPGopLCIazBadtHyHoXNhoTpjVfebLPkFrP';
    wx.request({
      url: "https://api.xingshi.site/cards-service/cards",
      method: "POST",
      header: {
        'Authorization': 'Bearer ' + yourToken // 替换成你的 Token
      },
      success: (res) => {
        console.log(res)
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