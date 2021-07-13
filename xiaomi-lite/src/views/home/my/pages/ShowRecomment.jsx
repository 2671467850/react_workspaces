import React, { useEffect, useState, useContext, useCallback } from 'react'
import { ShowRecommendWrapper } from './styledMy'
import ProductList from '@/components/productlist/ProductList'

import httpContext from '@/context/httpContext'

export default function ShowRecomment() {

  const [productlist, setProductList] = useState({})
  const { get } = useContext(httpContext)

  useEffect(
    async () => {
      let result = await get({
        url: `/api/tab5`
      })
      // console.log(result.data.data);
      if(result.data.data){
        setProductList(result.data.data)
      }
      // console.log(productlist);
    },[]
  )


  return (
    <ShowRecommendWrapper>
      <ProductList
        data={productlist}
      ></ProductList>
    </ShowRecommendWrapper>
  )
}
