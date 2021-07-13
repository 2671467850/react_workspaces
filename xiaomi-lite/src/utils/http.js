/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 19:54:53
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-01 19:55:47
 */
import axios from 'axios'

const http = axios.create({
  headers: {
    'content-type': 'application/json; charset=utf-8'
  }
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // if(config.url === "/v2/product/view2"){
  //   config.headers["Content-Type"] = "multipart/form-data"
  //   config.headers["Referer"] = "https://servicewechat.com/wx17ea87763491620f/1275/page-frame.html"
  // }
  // console.log(config);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
})

const $http = {
  get(options) {
    return new Promise((resolve, reject) => {
      http({
        ...options
      })
        .then(result => {
          resolve(result)
        })
        .then(error => {
          reject(error)
        })
    })
  },
  post(options){
    return new Promise((resolve, reject) => {
      http({
        ...options
      })
        .then(result => {
          resolve(result)
        })
        .then(error => {
          reject(error)
        })
    })
  }
}


export default $http