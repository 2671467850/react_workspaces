import React, { Component } from 'react'
import GrandSon1 from './GrandSon1'
import GrandSon2 from './GrandSon2'
import { Provider } from './sizeContext'

export default class Child1 extends Component {
  render() {
    return (
      <Provider value={{size: '100px'}}>
        <h2>Child1 Component</h2>
        <GrandSon1></GrandSon1>
        <GrandSon2></GrandSon2>
      </Provider>
    )
  }
}
