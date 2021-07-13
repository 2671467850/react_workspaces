/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 09:16:49
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-29 21:57:59
 */
import styled from 'styled-components'
import border from '@/assets/styled/border'

const SearchWrapper = styled.div `
  height: .35rem;
  padding: .05rem 0;
  background-color: ${ props => props.outerBg };
  width: ${ props => props.searchWidth };
`

const SearchInputWrapper = border(styled.div `
  height: .35rem;
  display: flex;
  justify-content: left;
  align-items: center;
  color: #999;
  background-color: ${ props => props.innerBg };
  img {
    margin-right: .1rem;
    margin-left: .1rem;
  }
`)

export {
  SearchWrapper,
  SearchInputWrapper
}