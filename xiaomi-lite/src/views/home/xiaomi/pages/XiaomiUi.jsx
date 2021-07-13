import React, { useCallback, useEffect, useState } from 'react'
import { XiaomiWrapper, XiaomiTitle } from './styledXiaomi'
import Search from '@/components/search/Search'
import logo from '@/assets/images/logo.png'
import bgtitle from '@/assets/images/title-bg.png'

import Swiper from './Swiper'
// import Swiper2 from './Swiper2'
// import IconGrid from './IconGrid'
import IconGrid from '@/components/icongrid/IconGrid'
import Product from './Product'
import Tab from './Tabs'

export default function XiaomiUi(props) {

  const [ iconData, setIconData ] = useState([])

  useEffect(() => {
    if(props.data.content){
      // console.log(props.data.content);
      setIconData(props.data.content.sections[2].body.items)
    }
  }, [props])

  const handleSearchClick = useCallback(() => {
    console.log(111)
  },[])

  return (
    <XiaomiWrapper>
      <XiaomiTitle
        borderColor="#fff"
      >
        <div className="logo">
          <img src={logo}/>
        </div>
        <Search
            borderRadius={50}
            innerBg="#f6f6f6"//这里需要滑动变化
            searchWidth="70%"
            searchClick={handleSearchClick}
          ></Search>
      </XiaomiTitle>
      <div className="main-cont">
        <Swiper data={props.data.content}></Swiper>
        <img
          src={bgtitle} alt="" 
          className="img-bg-title"
        />
        {/* <IconGrid data={props.data.content}></IconGrid> */}
        <IconGrid
          data={iconData}
          colu={"20%"}
          ImgWidth={"100%"}
          bgColor={"#fff"}
        ></IconGrid>
        <Product data={props.data.content} topIndex={true} index={5}></Product>
        <Product data={props.data.content} index={7}></Product>
        <Tab data={props.data.content}></Tab>
      </div>
    </XiaomiWrapper>
  )
}
