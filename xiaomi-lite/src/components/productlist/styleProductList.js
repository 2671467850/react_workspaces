/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-03 18:19:13
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-09 21:26:18
 */
import styled from 'styled-components'
import border from '@/assets/styled/border'

const ProductListWrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .notshow{
      display: none;
  }
  .product_item{
    /* display: flex;
    flex-direction: column; */
    position: relative;
    margin-top: .1rem;
    background-color: #fff;
    width: calc(50% - .05rem);
    border-radius: .05rem;
    .showmask{
      position: absolute;
      top: .05rem;
      right: .05rem;
      color: #a29292;
      height: .15rem;
      width: .15rem;
      display: inline-block;
      text-align: center;
      border-radius: .1rem;
      line-height: .15rem;
      background-color: #eee;
      font-size: .12rem;
    }
    .mask{
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 1000;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,0.7);	// 半透明背景
      text-align: center;
      justify-content: center;
      align-items: center;
      border-radius: .05rem;
      display: flex;
      flex-direction: column;
      div{
        margin: .08rem 0;
        width: 80%;
        height: .35rem;
        border-radius: .2rem;
        background-color: #fff;
        color: #000;
        line-height: .35rem;
      }
    }
    .show{
      display: flex;
    }
    .notshow{
      display: none;
    }
    .product_img{
      border-radius: .05rem;
      height: 0;
      padding-bottom: 100%;
      img{
        width: 100%;
        background-color: #fcfcfc;
        border-radius: .05rem .05rem 0 0;
      }
    }
    .product_info{
      padding: .05rem .1rem;
      font-size: .16rem;
      font-weight: 100;
      p{
        &:last-child{
          position: relative;
          color:#ff5934;
          font-size: .18rem;
          font-weight: 700;
        }
      }
    }
  }
`

const TagBorderWrapper = border(
  styled.span `
    margin-left: .05rem;
    color:#ff5934;
    font-size: .09rem;
    font-weight: 100;
  `
)

const MaskWrapper = styled.div `
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1000;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.7);	// 半透明背景
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: .05rem;
  display: ${props=>{
    console.log(props.key,props.maskName);
    return (props.isShow && props.key === props.maskName) ? "flex" : "none"}};
`

export {
  ProductListWrapper,
  TagBorderWrapper,
  MaskWrapper
}