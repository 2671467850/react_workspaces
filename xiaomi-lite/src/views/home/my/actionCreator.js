/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-09 19:30:48
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-09 20:23:36
 */
import { LOGIN, LOGOUT } from './actionTypes'

const login = () => {
  return {
    type:LOGIN
  }
}
const logout = () => {
  return {
    type:LOGOUT
  }
}

export {
  login,
  logout
}