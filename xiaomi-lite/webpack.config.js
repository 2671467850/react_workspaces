/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 09:04:55
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-02 20:32:30
 */
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[hash:8].js'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.mjs', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },

  devServer: {
    contentBase: './dist',
    port: 8080,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/api': '' },
      },
      '/v2': {
        target: 'https://app.m.mi.com',
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
      },
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ]
}