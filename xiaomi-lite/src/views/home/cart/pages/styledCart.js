/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-09 21:58:29
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-12 21:44:49
 */
import styled from 'styled-components'
import border from '@/assets/styled/border'

const CartMainWrapper = styled.div `
  height: 100%;
`

const CartWrapper = styled.div `
  /* overflow: hidden; */
  height: calc(100% - .44rem);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`

const LoginCartWrapper = styled.div `
  background-color: #f5f5f5;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: .2rem;
  .item_cont{
    margin-bottom: .1rem;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding: .1rem;
    background: #fff;
    border-radius: .2rem;
    input{
      width: .2rem;
    }
    .item_img{
      width: 30%;
      img{
        width: 100%;
      }
    }
    .item_info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .item_price{
        color: #F44A33;
      }
    }
  }
`

const LogoutCartWrapper = styled.div `
  background-color: #f5f5f5;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img-notlogout{
    width: .8rem;
    height: .8rem;
    img{
      border-radius: .4rem;
      width: 100%;
    }
  }
  .title-notlogout{
    margin-top: .3rem;
    font-size: .18rem;
    font-weight: 600;
  }
  .btn-logout{
    margin-top: .3rem;
    width: 80%;
    height: .35rem;
    background: #ff6700;
    text-align: center;
    line-height: .35rem;
    color: white;
  }
`

export {
  CartMainWrapper,
  CartWrapper,
  LoginCartWrapper,
  LogoutCartWrapper
}