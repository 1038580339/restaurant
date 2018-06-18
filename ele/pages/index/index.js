//index.js
//获取应用实例
const app = getApp()
import { checkApi, categories, dishes} from "../../api/api.js"
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    menuType:[],
    selectMenuType:'',
    dishes:[],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toDetail:function(e){
    wx.navigateTo({
      url: '../detail/detail?data=' + JSON.stringify(e.currentTarget.dataset.dishes)
    })
  },
  clickType:function(e){
    this.setData({
      selectMenuType: e.target.dataset.id
    })
    wx.showLoading({
      title: '读取菜单中',
    })
    //拿到菜品分类后，获取该分类下具体的菜品
    dishes(e.target.dataset.id).then(resp => {
      wx.hideLoading();
      if (resp.data.code == '1') {
        this.setData({
          dishes: resp.data.data
        })
      }else{
        wx.showToast({
          title: "获取菜单失败",
          icon: 'none'
        });
        this.setData({
          dishes: []
        })
      }
    })
  },
  onLoad: function () {
    wx.showLoading({
      title: '加载中...',
    })
    categories().then((resp)=>{
      if(resp.data.code=='1'){
        this.setData({
          menuType:resp.data.data,
          selectMenuType: resp.data.data[0].id
        });
        
        //拿到菜品分类后，获取该分类下具体的菜品
        dishes(resp.data.data[0].id).then(resp=>{
          wx.hideLoading();
          if(resp.data.code=='1'){
            this.setData({
              dishes: resp.data.data
            }) 
          }
        })

      }else{
        wx.showToast({
          title: "获取菜单分类失败",
          icon: 'none'
        });
      }
    })
 
  }

})
