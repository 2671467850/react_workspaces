/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-09 19:30:11
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-09 19:58:43
 */
import { Map } from 'immutable'

import { LOADUSERINFO, CLEARUSERINFO } from './actionTypes'


const defaultState = Map({
  userInfo:Map({})
})

export default (state = defaultState, action) => {
  switch(action.type){
    case LOADUSERINFO:
      return state.updateIn(['userInfo'], () => action.data)
    case CLEARUSERINFO:
      return state.updateIn(['userInfo'], () => action.data)

    default:
      return state
  }
}