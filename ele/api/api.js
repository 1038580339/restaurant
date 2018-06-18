import { host } from './config.js';
import $http from './http.js'

//测试接口
export const checkApi = () => $http.get(`${host}/ping`);
//登陆
export const login = params => $http.post(`${host}/users/login`,params);
//首次登陆获取信息
export const loginFirst = (id, params) => $http.post(`${host}/users/${id}`,params);
//菜品分类
export const categories = () => $http.get(`${host}/categories`);
//具体分类下的菜品
export const dishes = id => $http.get(`${host}/categories/${id}/dishes`);
//下单
export const doOrder = (id,params) => $http.put(`${host}/users/${id}/orders`,params);
//获取订单详情页
export const getOrder = id => $http.get(`${host}/users/${id}/orders`);
//订单确认接口
export const confirmOrder = (userId,orderId) => $http.post(`${host}/users/${userId}/orders/${orderId}/confirm `);