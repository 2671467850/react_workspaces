import React, { Component } from 'react'
import { ProductsContainer } from '../view/products'
import { CartContainer } from '../view/carts'

export default class index extends Component {
  render() {
    return (
      <>
      <h1>产品列表</h1><hr />
      <ProductsContainer></ProductsContainer>
      <h1>购物车</h1><hr />
      <CartContainer></CartContainer>
      </>
    )
  }
}
