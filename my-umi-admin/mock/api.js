/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-13 08:32:45
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-13 08:35:13
 */
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware'

function proxyData(req, res) {
  // res.setHeader('X-Token', localStorage.getItem('x-token'))
  const apiProxy = createProxyMiddleware(
    '/api', 
    {
      target: 'http://localhost:3000',
      changeOrigin: true,
      onProxyReq: fixRequestBody
    }
  )
  apiProxy(req, res)
}

export default {

  // 支持自定义函数，API 参考 express@4
  'get /api/*': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    proxyData(req, res)
  },

  'post /api/*': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    proxyData(req, res)
  },

  'delete /api/*': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    proxyData(req, res)
  },
}