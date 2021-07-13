/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-12 19:50:33
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-12 20:46:21
 */
import { ADDTOCART } from './actionTypes'

const addToCart = (item) => {
  console.log(item);
  return {
    type:ADDTOCART,
    payload:item
  }
}

export {
  addToCart
}