/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 19:53:54
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-29 19:03:14
 */
import $http from '@/utils/http'
import { put, takeEvery, call } from 'redux-saga/effects'

import { GETDATA, LOADDATA } from './actionTypes'

function* loaddata(){
  let result = yield call($http.get, {
    url:'/api/index'
  })
  // yield console.log(result);
  yield put({
    type: LOADDATA,
    data: result.data.data
  })
}

function* saga(){
  yield takeEvery(GETDATA,loaddata)
}

export default saga
