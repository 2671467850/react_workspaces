import React, { Component } from 'react'

export default class Child extends Component {

  state = {
    color : 'red'
  }

  changeColor = (args) => {
    this.setState({
      color:args
    })
  }


  render() {
    return (
      <div>
        Child
        <br />
        {this.state.color}
      </div>
    )
  }
}

