import React, { Component } from 'react'
import Child1 from './Child1'

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Root Component</h1>
        <Child1></Child1>
      </>
    )
  }
}
