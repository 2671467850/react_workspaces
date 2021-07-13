import React, { useCallback } from 'react'
import { HeaderWrapper } from './styledHeader'
import { Icon } from 'antd-mobile'
import { useHistory } from 'react-router-dom'

export default function Header({children}) {
  const history = useHistory()
  const handleClick = useCallback(
    () => {
      history.goBack()
    },
    []
  )

  return (
    <HeaderWrapper>
      {/* <Icon 
        type="left" 
        className="icon" 
        size="md" 
        color="#fff"
        onClick={handleClick}
      ></Icon> */}
      {children}
    </HeaderWrapper>
  )
}
