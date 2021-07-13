import React, { Component, createRef } from 'react'
import Child from './Child'

export default class App extends Component {

  childRef = createRef()

  componentDidMount() {
    this.childRef.current.changeColor('blue')
    // console.log(this.childRef.current.state.color);
  }

  changeChildColor(){
    // this.childRef.current.changeColor('yellow')
    // console.log(this.childRef.current.state.color);
  }

  render() {
    return (
      <div>
        <Child ref={this.childRef}></Child>
        <div>
          <button onClick={this.changeChildColor}>click</button>
        </div>
      </div>
    )
  }
}
