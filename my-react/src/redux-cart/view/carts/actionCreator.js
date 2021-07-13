/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-21 21:06:55
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-21 22:48:08
 */
import { ADDTOCART,CALCPRICE, DECRMENTQUANTITY } from './actionTypes'

export const addToCart = (product) => {
  return {
    type: ADDTOCART,
    product
  }
}

export const calcPrice = () => {
  return {
    type: CALCPRICE
  }
}

export const decrmentquantity = product => {
  return {
    type: DECRMENTQUANTITY,
    product
  }
}
