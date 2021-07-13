import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../index'
import Header from '@/components/header/Header'
import IconGrid from '@/components/icongrid/IconGrid'
import UserCenter from './UserCenter'
import ShowRecomment from './ShowRecomment'


import { MyMainWrapper, MyContWrapper } from './styledMy'


import userLogout from '@/assets/images/user-logout.png'
import userLogin from '@/assets/images/user-login.jpg'
import qrCode from '@/assets/images/qr_code.png'


export default function MyUi(props) {

  //登录注销抛发
  const dispatch = useDispatch()
  //用户状态
  const userInfo = useSelector(state => state.getIn(['user', 'userInfo']))

  const [bgImg, setBgImg] = useState()
  const [userCenter, setUserCenter] = useState()
  const [myServe, setMyServe] = useState()
  const [topIcon, setTopIcon] = useState()
  const [middleIcon, setMiddleIcon] = useState()
  const [endIcon, setEndIcon] = useState()



 const goodsIcon = [
   {
   "img_url": "https://i8.mifile.cn/webfile/h5/weixin/20200820/un_pay.png",
   "title": "待付款"
   },
   {
   "img_url": "https://i8.mifile.cn/webfile/h5/weixin/20200820/un_received.png",
   "title": "待收货"
   },
   {
   "img_url": "https://i8.mifile.cn/webfile/h5/weixin/20200820/crowd-funding.png",
   "title": "众筹抽奖"
   },
   {
   "img_url": "https://i8.mifile.cn/webfile/h5/weixin/20200820/all_order.png",
   "title": "全部订单"
   },
 ]


  useEffect(()=>{
    if(props.data){
      // console.log(props.data);
      setBgImg(props.data.sections[0].body.items[0].img_url)
      setTopIcon(props.data.sections[1].body.items)
      setUserCenter(props.data.sections[2].body.items)
      setMiddleIcon(props.data.sections[6].body.items.slice(0,3))
      setMyServe(props.data.sections[8].body.items)
      setEndIcon(props.data.sections[10].body.items)
    }
  },[props])

  const handlerLoginClick = useCallback(
    () => {
      // setLogin("User")
      //TODO 登录的全局状态dispatch
      dispatch(login())
    },
    [],
  )

  const handlerLogoutClick = useCallback(
    () => {
      // setLogin("")
      //TODO 注销的全局状态dispatch
      dispatch(logout())
    },
    [],
  )

  const handlerQrClick = useCallback(
    () => {
      console.log("QR code");
      //TODO 扫码
    },
    [],
  )

  return (
    <MyMainWrapper>
      <Header>我的</Header>
      <MyContWrapper
        bgImg={bgImg}
      >
        <div className="bg_img">
          <div className="login">
            {
              userInfo.name === undefined
              ?
              (
                <>
                  <img src={userLogout} />
                  <span onClick={handlerLoginClick}>登录</span>/<span>注册</span>
                    <img className="qrCode" src={qrCode} onClick={handlerQrClick} />
                </>
              )
              :
              (
                <>
                  <img src={userLogin} /><span>{userInfo.name}</span> <span className="user-logout" onClick={handlerLogoutClick}>注销</span>
                </>
              )
            }
          </div>
          <IconGrid
            data={topIcon}
            bgColor={"transparent"}
            colu={"25%"}
            ImgWidth={"50%"}
            liColor={"#fff"}
          ></IconGrid>
          <UserCenter
            data={userCenter}></UserCenter>
          <IconGrid
            data={goodsIcon}
            bgColor={"#fff"}
            colu={"25%"}
            ImgWidth={"50%"}
          ></IconGrid>
          <IconGrid
            data={middleIcon}
            bgColor={"#fff"}
            colu={"30%"}
            ImgWidth={"50%"}
            ></IconGrid>
          <div className="my_serve">
            <h1>我的服务</h1>
            <h2>查看更多&ensp;&gt;</h2>
          </div>
          <IconGrid
            data={myServe}
            colu={"25%"}
            bgColor={"#fff"}
            ImgWidth={"50%"}
          ></IconGrid>
          <IconGrid
            data={endIcon}
            colu={"25%"}
            bgColor={"#fff"}
            ImgWidth={"50%"}
          ></IconGrid>
          <div className="show-recommend">
            为你推荐
          </div>
          <ShowRecomment></ShowRecomment>
        </div>
      </MyContWrapper>
    </MyMainWrapper>
  )
}
