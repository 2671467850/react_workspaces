/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 19:42:43
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-28 10:17:57
 */
import _default from 'antd-mobile/lib/toast'
import { Map, List } from 'immutable'

import { LOADDATA } from './actionTypes'


const defaultState = Map({
  data:Map({})
})

export default (state = defaultState, action) => {
  switch(action.type){
    case LOADDATA:
      return state.updateIn(['data'], () => action.data)

    default:
      return state
  }
}