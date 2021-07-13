import React from 'react'

export default function TabbarItem({ title, index, onIndex, currentIndex, icon, activeIcon }) {
  return (
    <li 
      className={index === currentIndex ? 'active' : ''}
      onClick={onIndex(index)}
    >
      <span className="icon">
        {
          index === currentIndex
            ? activeIcon : icon
        }
      </span>
      <span className="title">{title}</span>
    </li>
  )
}
