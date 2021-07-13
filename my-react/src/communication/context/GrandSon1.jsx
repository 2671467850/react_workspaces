import React, { Component } from 'react'
// import sizeContext from './sizeContext'
import { Consumer } from './sizeContext'

export default class GrandSon1 extends Component {
  // static contextType = sizeContext
  render() {
    return (
      <>
        <h3>GrandSon1 Component</h3>
        <Consumer>
          {
            (sizeValue)=><div>{sizeValue.size}</div>
          }
        </Consumer>
      </>
    )
  }
}
