/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-29 21:13:34
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-01 10:40:12
 */
import styled from 'styled-components'
import border from '@/assets/styled/border'

const CategoryWrapper = styled.div `
  height: 100%;
`

const CategoryMenu = styled.div `
  overflow: hidden;
  height: calc(100% - .44rem);
  flex: 1;
  display: flex;
  .tab {
    width: 1rem;
    background: #fff;
    overflow-y: scroll;
    li {
      height: .5rem;
      line-height: .5rem;
      text-align: center;
      &.active {
        background: #eee;
        border-left: 3px solid #ee742f;
        span {
          display: inline-block;
          height: 100%;
        }
      }
    }
  }
  .content {
    padding: .15rem;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`
const TopUlWrapper = styled.ul `
  display: flex;
  flex: 1;
  overflow-x: scroll;
  > li{
    flex-shrink: 0;
    white-space: nowrap;
    /* float: left; */
    height: .2rem;
    line-height: .2rem;
    margin: .05rem .05rem;
    padding: 0 .05rem;
    font-size: .10rem;
    a{
      color:#000;
    }
    &.active{
      background-color: #eee;
    }
  }
`

const ContUlWrapper = 
border(
  styled.ul `
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-direction: column;
    padding-top: .05rem;
    li{
      margin: .05rem 0;
      width: 100%;
      background-color: #f8f8f8;
      display: flex;
      justify-content: center;
      img{
        width: 25%;
      }
      div{
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h1{
          font-size: .14rem;
          font-weight: 500;
          height: .3rem;
          line-height: .3rem;
        }
      }
    }
  `
)


export {
  CategoryWrapper,
  CategoryMenu,
  TopUlWrapper,
  ContUlWrapper,
}