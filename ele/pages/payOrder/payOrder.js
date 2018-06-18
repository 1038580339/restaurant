// pages/payOrder/payOrder.js
import { doOrder} from "../../api/api.js"
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   cart:[],
   totalPrice:'',
   type:'',
   phone:'',
   address:'',
   remark:''
  },
  phoneInput:function(e){
    this.setData({
      phhone: e.detail.value
    })
  },
  addressInput:function(e){
    this.setData({
      address: e.detail.value
    })
  },
  remarkInput: function (e) {
    this.setData({
      remark: e.detail.value
    })
  },
  order:function(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
     type:options.type
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      cart: app.cart
    });
     
    //计算总价价格
    let totalPrice=0;
    for(let v in this.data.cart){
     totalPrice+=(this.data.cart[v].price*this.data.cart[v].number);
    }
    this.setData({
      totalPrice: totalPrice
    });    

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