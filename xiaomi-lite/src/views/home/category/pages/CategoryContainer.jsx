import React, { useEffect, useContext, useState, useCallback } from 'react'
import Search from '@/components/search/Search'
import Header from '@/components/header/Header'
import httpContext from '@/context/httpContext'
import Menu from './Menu'
import { CategoryWrapper } from './styledCategory'

export default function CategoryContainer() {
  // const data = {"product_id":"13649"}

  const { get } = useContext(httpContext)

  const [ menu, setMenu ] = useState([])

  useEffect(
    async () => {
      let result = await get({
        url: `/api/cate`
      })
      // console.log(result.data.data);
      setMenu(result.data.data)
    },[]
  )

  const handleSearchClick = useCallback(
    () => {
      console.log(111)
    },
    [],
  )

  return (
    <CategoryWrapper>
      <Header>
        <Search
          borderRadius={50}
          innerBg="#f6f6f6"//这里需要滑动变化
          searchWidth="100%"
          searchClick={handleSearchClick}
        ></Search>
      </Header>
      <Menu 
        menuData={menu}
      ></Menu>
    </CategoryWrapper>
  )
}
