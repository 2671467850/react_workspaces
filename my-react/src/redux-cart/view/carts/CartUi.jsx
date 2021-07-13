import React, { Component } from 'react'

export default class CartUi extends Component {
  render() {
    return (
      <>
      <div>
        购物车总价格为：{this.props.totalPrice}
      </div>
      <ul>
        {
          this.props.products.map(p => (
            p.quantity > 0 &&
            <li key={p.id}>
            {p.name}:{p.price} X {p.quantity} &emsp;
            <button
              onClick={this.props.decrmentquantity(p)}
            >减少数量</button>
          </li>
          ))
        }
      </ul>
    </>
    )
  }
}
