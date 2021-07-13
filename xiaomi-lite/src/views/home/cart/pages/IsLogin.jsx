import React, { useEffect, useCallback, useState } from 'react'
import { LoginCartWrapper, LogoutCartWrapper } from './styledCart'

import userLogin from '@/assets/images/user-login.jpg'

export default function IsLogin(props) {

  const [ cartList, setCartList ] = useState([])

  useEffect(()=>{
    // props.cartList
    // console.log(props.cartList.toJS());
    if(props.cartList.size){
      // console.log(props.cartList.toJS());
      setCartList(props.cartList.toJS())
    }
  },[props])

  return (
    <>
      {
        props.cartList.size
        ?
        (
          <LoginCartWrapper>
            {/* {renderItem} */}
            {
              cartList
              && 
              cartList.map((item,index)=>{
                console.log(item);
                return (<div className="item_cont"
                  key={index}
                >
                  <input type="checkbox" name="" id="" />
                  <div className="item_img"><img src={item.img_url}/></div>
                  <div className="item_info">
                    <p>{item.product_name}</p>
                    <p className="item_price">{item.product_price}</p>
                  </div>
                </div>)
              }
              )
            }
          </LoginCartWrapper>
        )
        :
        (
          <LogoutCartWrapper>
            <div className="img-notlogout"><img src={userLogin} alt="" /></div>
            <div className="title-notlogout">购物车还是空的</div>
            <div className="btn-logout">去添加商品</div>
          </LogoutCartWrapper>
        )
      }
    </>
  )
}
