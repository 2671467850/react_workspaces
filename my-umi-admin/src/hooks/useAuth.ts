/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-07 23:07:10
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-15 22:23:11
 */
import axios from 'axios'
import { useEffect, useState } from 'react'

const useAuth = () => {
  const [isLogin, setIsLogin] = useState({})

  useEffect(() => {
    (async function(){
      let result = await axios({
        url: '/api/users/isAuth',
        headers: {
          'X-Token': localStorage.getItem('X-Token')
        },
      })
      // console.log(result.data.ret)
      setIsLogin(result.data.ret)
    })()
  }, [])
  
  return {
    isLogin
  }
}

export default useAuth