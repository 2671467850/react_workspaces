/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-11 23:04:26
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-12 19:44:28
 */
import styled from 'styled-components'
import border from '@/assets/styled/border'

const DetailWrapper = styled.div `
  height: 100%;
`

const DetailContWrapper = styled.div `
  display: flex;
  height: calc(100% - .44rem);
  flex-direction: column;
  .detail_cont{
    flex: 1;
    height: 100%;
    overflow-y: scroll;
    .product_price{
      color: #ff5934;
      font-weight: 600;
      span{
        font-size: .3rem;
      }
    }
    .product_name{
      span{
        font-size: .18rem;
      }
    }
  }
  .add_to_cart{
    height: .44rem;
    display: flex;
    padding: 0 .2rem;
    div{
      flex: 1;
      line-height: .44rem;
      /* text-align: center; */
    }
    .go_to_where{
      display: flex;
      margin-right: .1rem;
      div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
          width: 20%;
          flex: 1;
        }
        p{
          font-size: .1rem;
          height: .2rem;
          line-height: .2rem;
        }
      }
    }
    .addcart{
      text-align: center;
      border-radius: .2rem 0 0 .2rem;
      background: #fdc800;
    }
    .justbuy{
      text-align: center;
      border-radius: 0 .2rem .2rem 0;
      background: #ff7808;
    }
  }
`

const SwiperWrapper = styled.div `
  height: 3.2rem;
  div{
    height: 100%;
    img{
      height: 100%;
    }
  }
`

export {
  DetailWrapper,
  DetailContWrapper,
  SwiperWrapper
}