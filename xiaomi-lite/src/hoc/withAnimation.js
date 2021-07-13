import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useRouteMatch } from 'react-router-dom'

let prevIndex = 1

const withAnimation = (Comp) => {
  
  return props => {
    const match = useRouteMatch()
    const enterActive = props.index > prevIndex ? 'slideInRight' : 'slideInLeft'
    const exitActive = props.index > prevIndex ? 'slideOutRight' : 'slideOutLeft'

    if (!!match) {
      prevIndex = props.index
    }

    return (
      <CSSTransition
        in={!!match}
        timeout={1000}
        classNames={{
          enter: 'animate__animated',
          enterActive: 'animate__' + enterActive,
          exit: 'animate__animated',
          exitActive: 'animate__' + exitActive
        }}
        mountOnEnter
        unmountOnExit
      >
        <Comp {...props}></Comp>
      </CSSTransition>
    )
  }
}

export default withAnimation