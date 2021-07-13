import React, { Component } from 'react'

export default class ProductUi extends Component {
  render() {
    return (
      <ul>
        {
          this.props.products.map(p => (
            <li key={p.id}>
              {p.name} - {p.price} &emsp;
              <button
                onClick={this.props.addToCart(p)}
                disabled={p.inventory === 0}
              >放入购物车</button>
            </li>
          ))
        }
      </ul>
    )
  }
}
