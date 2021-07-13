/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-21 20:51:03
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-21 21:04:18
 */
import { combineReducers } from 'redux'
import { reducer as product } from '../view/products'
import { reducer as cart } from '../view/carts'



const reducer = combineReducers({
  product,
  cart
})

export default reducer