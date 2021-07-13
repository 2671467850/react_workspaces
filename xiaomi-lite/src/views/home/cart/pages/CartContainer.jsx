import React from 'react'
import { useSelector } from 'react-redux'
import { CartMainWrapper } from './styledCart'
import Header from '@/components/header/Header'
import CartUi from './CartUi'

export default function CartContainer() {

  const userInfo = useSelector(state => state.getIn(['user', 'userInfo']))
  const productList = useSelector(state => state.getIn(['product', 'cartList']))

  // console.log(userInfo);
  // console.log(productList);
  return (
    <CartMainWrapper>
      <Header>购物车</Header>
      <CartUi 
        userInfo={userInfo}
        productList={productList}
      ></CartUi>
    </CartMainWrapper>
  )
}

// import React from 'react';
// import { Card, Avatar, Divider, Button, Icon } from 'antd';

// const { Grid, Meta } = Card;
// class ListItem extends React.Component {

//   state = {
//     mouseIn: false,	// 鼠标事件字段
//     disable: false,	// 上架或下架的字段
//     visible: false	// 遮罩层是否可见字段
//   }

//   handleMouseEnter = () => {
//     this.setState({
//       mouseIn: true
//     })
//   }

//   handleMouseLeave = () => {
//     this.setState({
//       mouseIn: false
//     })
//   }

//   handleObtainedChange = () => {
//     const { disable } = this.state;
//     this.setState({
//       disable: !disable
//     })
//   }

//   handleEditClick = () => {
//     this.setState({
//       visible: true,
//       mouseIn: false
//     })
//   }

//   handleEditVisibleChange = () => {
//     this.setState({
//       visible: false
//     })
//   }

//   render() {

//     const { item } = this.props;
//     const { mouseIn, disable, visible } = this.state;

//     return (
//       <Grid
//         style={{
//           margin: '1vh 1%',
//           width: '31.33%'
//         }}
//         onMouseEnter={this.handleMouseEnter}
//         onMouseLeave={this.handleMouseLeave}
//       >
//         <div>
//           {/* 被遮罩部分 */}
//           <Meta
//             avatar={<Avatar size={48} src={item.img} />}
//             title={
//               <span>
//                 <span>{item.name}</span>
//                 <span
//                   style={{
//                     float: 'right',
//                     color: 'orange'
//                   }}
//                 >
//                   {
//                     disable ? '已下架' : `${item.amount}元`
//                   }
//                 </span>
//               </span>
//             }
//             description={
//               <span>
//                 <span>
//                   <span>面向地区：</span>
//                   <span>{item.country.replace(',', ' ')}</span>
//                 </span>
//                 <Divider type="vertical" />
//                 <span>
//                   <span>面向学位：</span>
//                   <span>{item.degree.replace(',', ' ')}</span>
//                 </span>
//               </span>
//             }
//           />
//           {/* 遮罩层div */}
//           <div
//             hidden={!mouseIn}
//             style={{
//               display: 'flex',	// 使用flex布局
//               position: 'absolute',	// 绝对定位
//               top: '0px',	// 距离父级元素顶部0像素
//               left: '0px',	// 距离父级元素左侧0像素
//               zIndex: 10,	// 遮罩层的堆叠层级（只要设置的比被遮罩元素高就行）
//               height: '100%',	// 与父级元素同高
//               width: '100%',	// 与父级元素同宽
//               background: 'rgba(0,0,0,0.4)',	// 半透明背景
//               textAlign: 'center',
//               justifyContent: 'space-around',
//               alignItems: 'center'
//             }}
//           >
//             <Button type="primary" onClick={this.handleEditClick}>
//               <Icon type="edit" />
//               修改
//             </Button>
//             <Button type={disable ? 'primary' : 'danger'} onClick={this.handleObtainedChange}>
//               <Icon type={disable ? 'vertical-align-top' : 'vertical-align-bottom'} />
//               {disable ? '上架' : '下架'}
//             </Button>
//           </div>
//         </div>
//       </Grid>
//     )
//   }
// }

// export default ListItem;