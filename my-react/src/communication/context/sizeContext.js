/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-20 15:44:26
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-20 15:45:53
 */
import { createContext } from 'react'

const sizeContext = createContext()

const { Provider, Consumer } = sizeContext

export default sizeContext
export {
  Provider,
  Consumer
}