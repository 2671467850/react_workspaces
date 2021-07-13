import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './actionCreator'
import CartUi from './CartUi'

@connect(
  state => ({
    products: state.cart.items,
    totalPrice: state.cart.totalPrice
  }),
  dispatch => {
    return bindActionCreators({
      ...actionCreators
    },dispatch)
  }
)
class CartContainer extends Component {

  decrmentquantity = (product) => {
    return () => {
      this.props.decrmentquantity(product)
      
      this.props.calcPrice()
    }
  }

  render() {
    return (
      <CartUi
        totalPrice={this.props.totalPrice}
        products={this.props.products}
        decrmentquantity={this.decrmentquantity}
      ></CartUi>
    )
  }
}

export default CartContainer