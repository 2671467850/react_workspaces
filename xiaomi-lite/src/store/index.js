/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 19:27:08
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-26 19:39:04
 */
import { applyMiddleware,createStore } from 'redux'
import { Map } from 'immutable'
import reducer from './reducer'

import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  Map({}),
  applyMiddleware(sagaMiddleware)
)

sagas.forEach(saga => sagaMiddleware.run(saga));

export default store