import styled from 'styled-components'
import border from '@/assets/styled/border'

const TabbarWrapper = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  main {
    flex: 1;
    overflow: hidden;
  }
`

const UlWrapper = border(
  styled.ul `
    height: .5rem;
    display: flex;
    background-color: ${ props => props.bgColor };
    color: ${ props => props.color };
    padding-top: .02rem;
    li {
      flex: 1;
      text-align: center;
      line-height: .5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &.active {
        color: ${ props => props.tintColor };
      }
      span {
        line-height: .16rem;
        &.title {
          line-height: .2rem;
          font-size: .12rem;
        }
      }
    }
  `
)

export {
  TabbarWrapper,
  UlWrapper
}