/*
 * @Descripttion: 实现会员中心板块
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-03 16:44:37
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-03 18:13:53
 */
import React, { useEffect, useState } from 'react'
import { UserCenterWrapper } from './styledMy'

export default function UserCenter(props) {

  const [data, setData] = useState()

  useEffect(()=>{
    if(props.data){
      // console.log(props.data);
      setData(props.data)
    }
  },[props])

  return (
    <UserCenterWrapper>
      {
        data
        &&
        data.map(item=>(
          <li key={item.title}>
            <div>
              <p className="title">{item.title}</p>
              <p className="subtitle">{item.subtitle}&gt;</p>
            </div>
            <img src={item.img_url} />
          </li>
        ))
      }
    </UserCenterWrapper>
  )
}
