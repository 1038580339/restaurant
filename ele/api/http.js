// http请求封装
import Promise from '../utils/bluebird.min.js';
// import getlocalStore from '../utils/getlocalStore.js'
const app = getApp();
let userToken='';

// 小程序原生支持promise
const $http = {
  post: function (url, params, method) {
    userToken = wx.getStorageSync('userToken');  
    console.log(this)
    let that = this;
    let header = {
      "API-USER-TOKEN": userToken,
    }
    console.log(header)
    let promise = new Promise(function (resolve, reject) {
      wx.request({
        url: url,
        data: params,
        header: header,
        method: 'POST',
        success: function (res) {
          resolve(res);
        },
        fail: function (err) {
          reject(err);
        }
      })
    })
    return promise;
  },
  get: function (url, params, method) {
    userToken = wx.getStorageSync('userToken');  
    let that = this;
    let header = {
      "API-USER-TOKEN": userToken,
    }
    let promise = new Promise(function (resolve, reject) {
      wx.request({
        url: url,
        data: params,
        header: header,
        method: 'GET',
        success: function (res) {
          resolve(res);
        },
        fail: function (err) {
          reject(err);
        }
      })
    })
    return promise;
  },
  formData: function (url, params, method) {
    userToken = wx.getStorageSync('userToken');  
    let that = this;
    let header = {
      "Content-Type": "application/x-www-form-urlencoded",
      "API-USER-TOKEN": userToken,
    }
    let promise = new Promise(function (resolve, reject) {
      wx.request({
        url: url,
        data: params,
        header: header,
        method: 'POST',
        success: function (res) {
          resolve(res);
        },
        fail: function (err) {
          reject(err);
        }
      })
    })
    return promise;
  },
  put: function (url, params, method) {
    userToken = wx.getStorageSync('userToken');  
    let that = this;
    let header = {
      "Content-Type": "application/xml",
      "API-USER-TOKEN": userToken,
    }
    let promise = new Promise(function (resolve, reject) {
      wx.request({
        url: url,
        data: params,
        header: header,
        method: 'PUT',
        success: function (res) {
          resolve(res);
        },
        fail: function (err) {
          reject(err);
        }
      })
    })
    return promise;
  },
  delete: function (url, params, method) {
    userToken = wx.getStorageSync('userToken');  
    let that = this;
    let header = {
      "Content-Type": "application/xml",
      "API-USER-TOKEN": userToken,
    }
    let promise = new Promise(function (resolve, reject) {
      wx.request({
        url: url,
        data: params,
        header: header,
        method: 'DELETE',
        success: function (res) {
          resolve(res);
        },
        fail: function (err) {
          reject(err);
        }
      })
    })
    return promise;
  }
}
export default $http;