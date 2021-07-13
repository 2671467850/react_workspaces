/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 20:43:26
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-26 20:44:57
 */
import { createContext } from 'react'
import $http from '@/utils/http'

const httpContext = createContext($http)

export default httpContext