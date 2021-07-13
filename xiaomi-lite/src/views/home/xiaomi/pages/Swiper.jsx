import React, { useEffect, useState } from 'react'
import Swiper from '@/components/swiper/Swiper'

import { SwiperWrapper } from './styledXiaomi'


export default function HomeTopSwiper(props) {

  const [ swiperlist, setSwiperList ] = useState([])

  useEffect(()=>{
    if(props.data){
      // 轮播图数据
      // console.log(props.data.sections[0].body.items);
      setSwiperList(props.data.sections[0].body.items)
    }
  },[props]
  )


  const renderFullWidthItem = (item, index) => {
    return (
      <div className="package-car-img">
        <img width="100%" src={item.img_url} alt="" />
      </div>
    )
  }

  const itemClick = (item, index) => {
    console.log(item.path)
  }


  return (
    <SwiperWrapper>
      <Swiper
        wrapperClass="wrapperClass"
        itemClass="itemClass"
        itemWidth="100%"
        curIdx={0}
        dataList={swiperlist}
        activeClass="active"
        renderItem={renderFullWidthItem}
        itemClick={itemClick}
      ></Swiper>
    </SwiperWrapper>
  )
}
