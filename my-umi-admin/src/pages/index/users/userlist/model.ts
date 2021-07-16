/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-15 22:24:08
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-16 11:13:49
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
    *loadData({payload}, {call, put}){
      let result = yield call(axios/* .get */, {
        url: '/api/users/list',
        headers: {
          'X-Token': localStorage.getItem('X-Token')
        },
      })
      // console.log(result.data.data)
      yield put({
        type: "setUserList",
        userList: result.data.data
      })
    }
  },

  reducers: {
    setUserList(state, action){
      return [
        ...action.userList
      ]
    }
  }
}

export default UserListModel