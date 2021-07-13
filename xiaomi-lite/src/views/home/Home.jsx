import React from 'react'
import Tabbar from '@/components/tabbar/Tabbar'

// Tabber图片引入
import xiaomi from '@/assets/images/tabbar/home.png'
import activeXiaomi from '@/assets/images/tabbar/home-selected.png'
import category from '@/assets/images/tabbar/category.png'
import activeCategory from '@/assets/images/tabbar/category-selected.png'
import cart from '@/assets/images/tabbar/cart.png'
import activeCart from '@/assets/images/tabbar/cart-selected.png'
import my from '@/assets/images/tabbar/user.png'
import activeMy from '@/assets/images/tabbar/user-selected.png'

//相应页面模块引入
import {Xiaomi} from './xiaomi'
import {Category} from './category'
import {Cart} from './cart'
import {My} from './my'

import withAnimation from '@/hoc/withAnimation'

function Home() {
  return (
    <Tabbar
      bgColor="#fff"
      color="#ccc"
      tintColor="orange"
    >
      <Tabbar.Item
        title="首页"
        icon={<img width="22" height="22" src={xiaomi}></img>}
        activeIcon={<img width="22" height="22" src={activeXiaomi}></img>}
      >
        <Xiaomi></Xiaomi>
      </Tabbar.Item>
      <Tabbar.Item
        title="分类"
        icon={<img width="22" height="22" src={category}></img>}
        activeIcon={<img width="22" height="22" src={activeCategory}></img>}
      >
        <Category></Category>
      </Tabbar.Item>
      <Tabbar.Item
        title="购物车"
        icon={<img width="22" height="22" src={cart}></img>}
        activeIcon={<img width="22" height="22" src={activeCart}></img>}
      >
        <Cart></Cart>
      </Tabbar.Item>
      <Tabbar.Item
        title="我的"
        icon={<img width="22" height="22" src={my}></img>}
        activeIcon={<img width="22" height="22" src={activeMy}></img>}
      >
        <My></My>
      </Tabbar.Item>
    </Tabbar>
  )
}

export default withAnimation(Home)