// pages/cart/cart.js
let app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   cart:[],
   totalPrice:'',
   types:[
     {name:'外卖',checked:true,value:1},
     {name:'堂食',value:0},
     {name:'预约',value:2},
     ],
     type:1,
  },
  reduceNumber:function(e){
    console.log(e.currentTarget.dataset);
    let data=this.data.cart
    for(let v in data){
      if (data[v].id == e.currentTarget.dataset.id){
         data[v].number=data[v].number - 1;
      }
    }
    this.setData({
      cart:data
    })

    this.getSameCart();
  },
  addNumber:function(e){
    let data = this.data.cart
    for (let v in data) {
      if (data[v].id == e.currentTarget.dataset.id) {
        data[v].number = data[v].number + 1;
      }
    }
    this.setData({
      cart: data
    });

    this.getSameCart();
  },
  calPrice:function(){
    let price=0;
    for(let v in this.data.cart){
      price += (this.data.cart[v].number * this.data.cart[v].price);
    }

    this.setData({
      totalPrice:price
    })

  },
  radioChange: function (e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value);
    // console.log(this.data.type);
    this.setData({
      type: e.detail.value
    })
  },
  getSameCart:function(){
   let data=this.data.cart;
   for(let v in data){
     if(data[v].number<=0){
       data.splice(v,1);
     }
   }
   app.cart=data;

   this.calPrice();
  },
  toOrder:function(){
    wx.navigateTo({
      url: '../payOrder/payOrder?type=' + this.data.type
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   this.setData({
     cart:app.cart
   })
   if(this.data.cart.length==0){
     wx.showToast({
       title: "购物车为空",
       icon: 'none'
     });
    
   }

   this.calPrice();

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