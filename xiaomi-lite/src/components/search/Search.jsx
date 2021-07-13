import React from 'react'
import searchImg from '@/assets/images/search.png'
import { SearchWrapper, SearchInputWrapper } from './styledSearch'

export default function Search(props) {
  return (
    <SearchWrapper
      {...props}
    >
      <SearchInputWrapper
        {...props}
        onClick={ props.searchClick }
      >
        <img width="20" height="20" src={searchImg} alt="" />
        <span>搜索商品</span>
      </SearchInputWrapper>
    </SearchWrapper>
  )
}
