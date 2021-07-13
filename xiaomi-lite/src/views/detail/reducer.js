/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-12 19:52:02
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-12 21:03:01
 */
import { Map, List } from 'immutable'

import { ADDTOCART } from './actionTypes'


const defaultState = Map({
  cartList:List([])
})

export default (state = defaultState, action) => {
  switch(action.type){
    case ADDTOCART:
      // return state.updateIn(['cartList'], () => action.payload)
      return state.updateIn(['cartList'],
        arr => arr.unshift(action.payload)
      )
      

    default:
      return state
  }
}