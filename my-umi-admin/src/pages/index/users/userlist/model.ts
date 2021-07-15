/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-15 22:24:08
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-15 22:53:58
 */
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi'
import axios from 'axios'

export type UserListModelState = Array<{

}>

export interface UserListModelType {
  namespace: string,
  state: UserListModelState,
  effects: {
    loadData: Effect,
  },
  reducers: {
    setUserList: Reducer<UserListModelState>,
  },
  // subscription: {
    
  // }
}

const UserListModel: UserListModelType = {
  namespace: 'users',

  state: [],

  effects: {
    loadData(){}
  },

  reducers: {
    setUserList(){
      return []
    }
  }
}

export default UserListModel