/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-01 22:21:17
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-03 16:54:20
 */
import styled from 'styled-components'
import border from '@/assets/styled/border'

const IconGridWrapper = styled.div `
  padding: 0 .1rem;
  margin-bottom: .1rem;
  ul{
    width: 100%;
    background-color: ${ props => props.bgColor };
    display: flex;
    flex-wrap: wrap;
    border-radius: .1rem;
    padding-bottom: .05rem;
    li{
      padding: 0.05rem .1rem;
      width: ${ props => props.colu };
      .icon_img{
        img{
          width: ${ props => props.ImgWidth };
        }
      }
      div{
        margin-top: 0.05rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .12rem;
        p{
          /*文字超出宽度则显示ellipsis省略号*/
          overflow:hidden;
          white-space:nowrap;
          text-overflow:ellipsis;
          width:100%;
          text-align: center;
          color: ${ props => props.liColor || "#000" };
        }
      }
    }
  }
`

export {
  IconGridWrapper
}