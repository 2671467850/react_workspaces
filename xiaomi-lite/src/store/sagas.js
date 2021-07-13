/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 19:28:55
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-09 20:06:24
 */
import { saga as xiaomiSaga } from '@/views/home/xiaomi'
import { saga as userSaga } from '@/views/home/my'

export default [
  xiaomiSaga,
  userSaga
]