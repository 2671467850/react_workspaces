import React, { 
  forwardRef, 
  useRef, 
  useState,
  cloneElement, 
  useEffect,
  useImperativeHandle,
  Children,
  useCallback
} from 'react'

import TabbarItem from './TabbarItem'

import {
  TabbarWrapper,
  UlWrapper
} from './styledTabbar'

function Tabbar({ children, bgColor, color, tintColor }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleLiClick = useCallback(
    index => {
      return () => {
        setCurrentIndex(index)
      }
    }
  )

  return (
    <TabbarWrapper>
      <main>
        { children[currentIndex].props.children }
      </main>
      <UlWrapper
        borderWidth="1px 0 0 0"
        bgColor={bgColor}
        color={color}
        tintColor={tintColor}
      >
        {
          Children.map(children, (children, index) => {
            return cloneElement(children, { 
              index,
              currentIndex,
              onIndex: handleLiClick
            })
          })
        }
      </UlWrapper>
    </TabbarWrapper>
  )
}

Tabbar.Item = TabbarItem

export default Tabbar
