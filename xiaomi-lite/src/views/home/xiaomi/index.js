/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 09:40:16
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-26 20:37:05
 */
import Xiaomi from './pages/XiaomiContainer'
import reducer from './reducer'
import { getdata } from './actionCreator'
import saga from './saga'

export {
  Xiaomi,
  reducer,
  getdata,
  saga
}