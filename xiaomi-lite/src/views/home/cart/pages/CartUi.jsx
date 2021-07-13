import React, { useEffect } from 'react'
import { CartWrapper } from './styledCart'
import NotLogin from './NotLogin'
import IsLogin from './IsLogin'


export default function CartUi(props) {

  useEffect(()=>{
    // console.log(props.productList);
  },[props])

  return (
    <CartWrapper>
      {
        props.userInfo.name === undefined
        ?
        <NotLogin></NotLogin>
        :
        <IsLogin
        cartList={props.productList}
        ></IsLogin>
      }
    </CartWrapper>
  )
}
