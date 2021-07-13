/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-21 20:57:41
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-21 22:47:32
 */
import { ADDTOCART, CALCPRICE, DECRMENTQUANTITY } from './actionTypes'
import _ from 'lodash'
import memoizeOne from 'memoize-one'

const defaultState = {
  items:[],
  totalPrice:0
}

const reducer = (state = defaultState,action) => {
  switch(action.type){

    case DECRMENTQUANTITY:
      const newItems2 = state.items.map((p) => {
        if(action.product.id === p.id) 
          p.quantity--
        return p
      })
      return {
        ...state,
        items:newItems2
      }

    case CALCPRICE:
      const totalPrice = items => {
        return items.reduce((sum, v) => {
          sum += v.price * v.quantity
          return sum
        }, 0)
      }
      const calcPrice = memoizeOne(totalPrice)
      
      return {
        ...state,
        totalPrice: calcPrice(state.items)
      }

    case ADDTOCART:
      const newItems = _.cloneDeep(state.items)
      const result = newItems.find(p => action.product.id === p.id)
      if (result) {
        result.quantity++
        return {
          ...state,
          items: newItems
        }
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...action.product,
              quantity: 1
            }
          ]
        }
      }

    default:
      return state
  }
}

export default reducer