// pages/login/login.js
import {loginFirst} from "../../api/api.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
   id:''
  },

  /**
   * 登陆按钮
   */
  bindGetUserInfo: function(e) {
    let that=this;
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      loginFirst(that.data.id,{
        nickName: e.detail.userInfo.nickName,
        avatarUrl: e.detail.userInfo.avatarUrl,
        gender: e.detail.userInfo.gender,
        city: e.detail.userInfo.city,
        province: e.detail.userInfo.province,
        country: e.detail.userInfo.country,
      }).then(resp=>{
        if(resp.data.code=='1'){
          wx.showToast({
            title: "登陆成功"
          });
          wx.redirectTo({
            url: '../../pages/index/index',
          })
        }else{

          wx.showToast({
            title: "登陆失败",
            icon: 'none'
          })
        }
      })
    } else {
      //用户按了拒绝按钮
      wx.showToast({
        title:"未授权无法使用小程序",
        icon:'none'   
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let that=this;
   that.setData({
     id: options.id
   });
   console.log(that.data.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})