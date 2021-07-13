/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-21 20:30:05
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-21 21:32:36
 */
import axios from 'axios'
import { LOADDATA,DECRMENTINVENTORY } from './actionTypes'

export const loadData = (products) => {
  return {
    type: LOADDATA,
    products
  }
}

export const loadAsyncData = () => {
  return async dispatch => {
    let result = await axios.get('/products.json')
    dispatch({
      type: LOADDATA,
      products: result.data.data
    })
  }
}

export const decrementInventory = product => {
  return {
    type: DECRMENTINVENTORY,
    product
  }
}