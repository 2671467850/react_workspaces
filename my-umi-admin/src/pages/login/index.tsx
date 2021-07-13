/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-07 21:57:46
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-13 15:55:04
 */
import React, { useCallback } from 'react'
import axios from 'axios'

export default function index() {

  const handlerLoginClick = useCallback(async()=>{
    /* let result =  */await axios({
      url: '/api/users/signin',
      method:"POST",
      data: {
        username: 'admin',
        password: '111111'
      },
    }).then(function(response) {
      console.log(response.data);
      console.log(response.headers);
      if(response.data.ret){
        localStorage.setItem('X-Token',response.headers["x-access-token"]);
      }
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.config);
    });
    // window.location.href="http://localhost:8000/index"
    // console.log(result.data);
    // if(result.data.data)
  },[])

  return (
    <>
      <button onClick={handlerLoginClick}>登录</button>
    </>
  )
}
