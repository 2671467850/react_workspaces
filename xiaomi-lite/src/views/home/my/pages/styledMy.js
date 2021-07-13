/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-01 22:43:31
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-09 22:18:16
 */
import styled from 'styled-components'
import border from '@/assets/styled/border'

const MyMainWrapper = styled.div `
  height: 100%;
`

const MyContWrapper = styled.div `
  overflow: hidden;
  height: calc(100% - .44rem);
  flex: 1;
  display: flex;
  background-color: #f5f5f5;
  flex-direction: column;
  overflow-y: scroll;
  .login{
    padding: 0.05rem .2rem .1rem .2rem;
    color: #fff;
    font-size: .18rem;
    img{
      width: 15%;
      margin-right: .1rem;
      border-radius: .25rem;
    }
    .qrCode{
      width: 10%;
      float: right;
      margin-top: .1rem;
    }
    .user-logout{
      float: right;
      margin-top: .1rem;
    }
  }
  .bg_img{
    background-image: url(${props=>props.bgImg});
    background-repeat: no-repeat;
    background-size:100% 2rem;
    .show-recommend{
      margin-top: .2rem;
      text-align: center;
      font-size: .18rem;
      font-weight: 500;
    }
  }
  .my_serve{
    padding: .05rem .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
      font-size: .2rem;
    }
    h2{
      color: #999;
      font-size: .14rem;
      font-weight: 500;
    }
  }
`

const UserCenterWrapper = styled.ul `
  margin: 0 .1rem ;
  background-color: #fff;
  display: flex;
  border-radius: .1rem;
  padding: .2rem .05rem;
  margin-bottom: .1rem;
  li{
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: .05rem;
    div{
      .subtitle{
        font-size: .12rem;
        color: #f7530d;
      }
    }
    img{
      margin-left: 0.05rem;
      width: 40%;
    }
  }
`

const ShowRecommendWrapper = styled.div `
  margin: 0 .1rem .1rem;
`

export {
  MyMainWrapper,
  MyContWrapper,
  UserCenterWrapper,
  ShowRecommendWrapper
}