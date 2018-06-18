// pages/order/order.js
import { getOrder, confirmOrder } from "../../api/api.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
     userId:'',
     orderData:[],
  },
  confirmOrder:function(e){
  //  console.log(e.target.dataset.orderid);
   wx.showLoading({
     title: '正在确认收货中...',
   })
  //根据获取的id进行确认收货
    confirmOrder(this.data.userId,e.target.dataset.orderid).then(resp=>{
      console.log(resp);
      wx.hideLoading();
      if(resp.data.code=='1'){
        //确认收货后的数据处理
        let data=this.data.orderData;
        for(let v in data){
          if(data[v].id==e.tartget.orderid){
            data[v].status=2;
          }
        }
        this.setData({
          orderData:data
        })
    
        wx.showToast({
          title: "确认收货成功",
        })


      }else{
        wx.showToast({
          title: resp.data.data,
          icon:'none'
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取userId
    this.setData({
      userId: wx.getStorageSync('userId')
    });
    wx.showLoading({
      title: '加载中...',
    })
    //获取本人订单详情数量
    getOrder(this.data.userId).then(resp=>{
      wx.hideLoading();
      if(resp.data.code=='1'){
      this.setData({
        orderData:resp.data.data
      })
      }else{
        wx.showToast({
          title: "获取订单数据出错",
          icon: 'none'
        });
      }
    })

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