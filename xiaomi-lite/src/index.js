/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 09:06:05
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-03 22:51:00
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

import App from './App'

import '@/assets/styles/reset.css'
import 'animate.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App></App>
    </Router>
  </Provider>,
  document.querySelector('#root')
)