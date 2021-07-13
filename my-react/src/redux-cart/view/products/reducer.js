/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-21 19:40:11
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-21 22:06:35
 */
import { LOADDATA, DECRMENTINVENTORY } from './actionTypes'

const defaultState = {
  all:[]
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case LOADDATA:
      return {
        all: action.products
      }

    case DECRMENTINVENTORY:
      const newAll = state.all.map((p) => {
        if(action.product.id === p.id) 
          p.inventory--
        return p
      })
      return {
        all:newAll
      }

    default:
      return state
  }
}

export default reducer