import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '@/components/header/Header'
import Swiper from '@/components/swiper/Swiper'
import { Toast } from 'antd-mobile';
import axios from 'axios'
import { DetailWrapper, DetailContWrapper, SwiperWrapper } from './styledDetail'

import { useHistory } from 'react-router-dom'

import home from '@/assets/images/tabbar/home.png'

import { addToCart } from '../index.js'

export default function DetailContainer(props) {

  const history = useHistory()

  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.getIn(['user', 'userInfo']))

  const [ swiperlist, setSwiperList ] = useState([])

  useEffect(
    () => {
      // console.log(props);
      let arr = []
      if(props.data.data){
        for(var i=0;i<3;i++)
          arr.push(props.data.data)
      }
      setSwiperList(arr)
    },[]
  )

  const renderFullWidthItem = useCallback(
    (item, index) => {
      return (
        <div className="package-car-img">
          <img width="100%" src={item.img_url} alt="" />
        </div>
      )
    },
    [],
  )

  const handlerAddClick = useCallback(
    (data) => {
      return () => {
        if(userInfo.name && data.data.data){

          // console.log(data.data.data);
          dispatch(addToCart(data.data.data))
          Toast.info('添加成功', 1);
        }else{
          Toast.info('请先登录', 1);
        }
      }
    },
    [],
  )

  const handlerToHomeClick = useCallback(
    () => {
      history.push('/home')
    },
    [],
  )

  return (
    <DetailWrapper>
      <Header>商品详情</Header>
      <DetailContWrapper>
        <div className="detail_cont">
          <SwiperWrapper>
            <Swiper
              wrapperClass="wrapperClass"
              itemClass="itemClass"
              itemWidth="100%"
              curIdx={0}
              dataList={swiperlist}
              activeClass="active"
              renderItem={renderFullWidthItem}
              // itemClick={itemClick}
            ></Swiper>
          </SwiperWrapper>
          <p className="product_price">￥{props.data && props.data.data && <span>{props.data.data.product_price}</span>}</p>
          <p className="product_name">{props.data && props.data.data && <span>{props.data.data.product_name}</span>}</p>
        </div>
        <div className="add_to_cart">
          <div className="go_to_where">
            <div onClick={handlerToHomeClick}>
              <img src={home} alt="" />
              <p>首页</p>
            </div>
          </div>
          <div 
            className="addcart"
            onClick={handlerAddClick(props/* .data.data */)}
          >加入购物车</div>
          <div className="justbuy">立即购买</div>
        </div>
      </DetailContWrapper>
    </DetailWrapper>
  )
}

