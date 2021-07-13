import React from 'react'
import { LogoutCartWrapper } from './styledCart'

import userLogout from '@/assets/images/user-logout.png'

export default function NotLogin() {
  return (
    <LogoutCartWrapper>
      <div className="img-notlogout"><img src={userLogout} alt="" /></div>
      <div className="title-notlogout">用户未登录</div>
      <div className="btn-logout">随便逛逛</div>
    </LogoutCartWrapper>
  )
}
