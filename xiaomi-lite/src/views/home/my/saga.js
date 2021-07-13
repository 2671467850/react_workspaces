/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-09 19:30:31
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-09 20:04:08
 */
import { put, takeEvery, call } from 'redux-saga/effects'

import { LOGIN, LOADUSERINFO, LOGOUT, CLEARUSERINFO } from './actionTypes'

function* loadUserInfo(){
  let result = {name:"Ankang"}
  yield put({
    type: LOADUSERINFO,
    data: result
  })
}
function* clearUserInfo(){
  let result = {}
  yield put({
    type: CLEARUSERINFO,
    data: result
  })
}

function* saga(){
  yield takeEvery(LOGIN,loadUserInfo)
  yield takeEvery(LOGOUT,clearUserInfo)
}

export default saga