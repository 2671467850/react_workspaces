/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-07 23:07:10
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-13 21:11:05
 */
import axios from 'axios'
import { useEffect, useState } from 'react'

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    (async function(){
      let result = await axios({
        url: '/api/users/isAuth',
        headers: {
          'X-Token': localStorage.getItem('X-Token')
        },
      })
      console.log(result.data.ret)
      setIsLogin(result.data.ret)
    })()
  }, [])
  
  return {
    isLogin
  }
}

export default useAuth