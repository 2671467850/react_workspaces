import React, { Component } from 'react'
import sizeContext from './sizeContext'

export default class GrandSon2 extends Component {
  static contextType = sizeContext
  render() {
    return (
      <>
        <h3>GrandSon2 Component</h3>
        <div>
          {this.context.size}
        </div>
      </>
    )
  }
}
