import React, { Component } from 'react'
import ProductUi from './ProductUi'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './actionCreator'
import { addToCart, calcPrice } from '../carts'


@connect(
  state => ({
    products: state.product.all
  }),
  dispatch => {
    return bindActionCreators({
      ...actionCreators,
      addToCart,
      calcPrice
    },dispatch)
  }
)
class ProductsContainer extends Component {

  componentDidMount(){
    this.props.loadAsyncData()
  }

  addToCart = (product) => {
    return () => {
      this.props.addToCart(product)
      this.props.decrementInventory(product)
      this.props.calcPrice()
    }
  }

  render() {
    return (
      <ProductUi
        products={this.props.products}
        addToCart={this.addToCart}
      ></ProductUi>
    )
  }
}

export default ProductsContainer