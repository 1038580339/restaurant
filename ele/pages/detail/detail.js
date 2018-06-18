// pages/detail/detail.js

let app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   detail:'',
   number:0,
  },
  addNumber:function(){
  this.setData({
    number:this.data.number+1
  });
  this.getCartSame();
  },
  reduceNumber:function(){
    this.setData({
      number: this.data.number - 1
    });
    this.getCartSame();
  },
  //使购物车数据一致
  getCartSame(){
  //  判断购物车是否已存在该数据
  let isHas=false;
  for(let v in app.cart){
    if(app.cart[v].id==this.data.detail.id){
      isHas=true;
    }
  }
//存在的话修改值
  if(isHas){
    for(let v in app.cart){
      if (app.cart[v].id == this.data.detail.id) {
        if(this.data.number>0){
        app.cart[v].number=this.data.number;
        }else{
          app.cart.splice(v,1);
        }
      }
    }
  }else{
    //不存在的话增加一行
    let t=this.data.detail;
    t.number=this.data.number;
    app.cart.push(t);
  }

   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      detail:JSON.parse(options.data)
    });

   //初始化判断购物车里是否有数据
   for(let v in app.cart){
     if(this.data.detail.id==app.cart[v].id){
       this.setData({
         number:app.cart[v].number
       })
     }
   }

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