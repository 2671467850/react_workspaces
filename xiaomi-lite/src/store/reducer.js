/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 19:27:20
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-12 20:39:06
 */
import { combineReducers } from 'redux-immutable'
import { reducer as xiaomi } from '@/views/home/xiaomi'
import { reducer as user } from '@/views/home/my'
import { reducer as product } from '@/views/detail/index.js'

const reducer = combineReducers({
  xiaomi,
  user,
  product
})

export default reducer