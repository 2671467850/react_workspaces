import React, { Component } from 'react'

export default class Child extends Component {
  static defaultProps = {
    title:'An'
  }

  state = {
    count:0
  }

  render() {
    return (
      <div>
        Child {this.props.title}
      </div>
    )
  }
}
