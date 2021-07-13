/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-26 11:02:39
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-03 19:06:07
 */
import styled from 'styled-components'
import bgtop from '@/assets/images/top-bg.png'
import border from '@/assets/styled/border'

const XiaomiWrapper = styled.div `
  height: 100%;
  background-color: #f6f6f6;

  .main-cont{
    flex: 1;
    overflow-y: scroll;
    /* padding: 0.1rem .1rem; */
    height: calc(100% - .44rem);
    .img-bg-title{
      margin-top: .05rem;
      margin-bottom: .05rem;
      width: 100%;
    }
  }
`

const XiaomiTitle = border(
  styled.div `
      padding: 0 .1rem;
      display: flex;
      height: .44rem;
      text-align: center;
      background-color: #fff;
      .logo {
        margin-top: .08rem;
        margin-right: .15rem;
        width: .3rem;
        height: .3rem;
        line-height: .3rem;
        background: #fef5f1;
        border-radius: 10px;
        img{
          width: 70%;
        }
      }
  `
)

const SwiperWrapper = styled.div `
  padding: 0.1rem .1rem 0;
  background-image: url(${bgtop});
  background-repeat: no-repeat;
  background-size:100% 2rem;
  border-radius: 10px;
  height: 0;
  padding-bottom: 1.48rem;
  img{
    border-radius: 10px;
  }
`

const ProductWrapper = styled.div `
  margin: 0 .1rem .1rem;
  /* height: 1000px; */
  background-color: #fff;
  border-radius: .1rem;
  padding: .1rem .1rem 0;
  display: flex;
  flex-direction: column;
  .item-title{
    font-size: .2rem;
    color: #000;
    position: relative;
    .item-intro{
      font-size: .14rem;
    }
    .item-more{
      position: absolute;
      font-size: .14rem;
      right: 0;
      bottom: 0.05rem;
      color: #999;
    }
  }
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li{
      position: relative;
      padding: .05rem;
      width: 33%;
      white-space:nowrap;
      img{
        width: 100%;
      }
      .top_pro{
        position: absolute;
        left: .1rem;
        display: inline-block;
        width: .2rem;
        height: .25rem;
        background-color: #ffb025;
        color: #fff;
        text-align: center;
        border-radius: .02rem;
      }
      .pro-title{
        overflow:hidden;
        text-overflow:ellipsis;
        font-size: .13rem;
        font-weight: 600;
        color: #000;
      }
      .pro-info{
        overflow:hidden;
        text-overflow:ellipsis;
        font-size: .12rem;
        color: #999;
      }
      .pro-price{
        font-size: .16rem;
      }
    }
  }
`

const TabWrapper = styled.div `
  margin: 0 .1rem .1rem;
`

export {
  XiaomiWrapper,
  XiaomiTitle,
  SwiperWrapper,
  ProductWrapper,
  TabWrapper
}