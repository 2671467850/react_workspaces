/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-21 20:50:43
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-21 20:54:54
 */
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer,applyMiddleware(thunk))

export default store