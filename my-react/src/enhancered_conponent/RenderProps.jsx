import React, { Component } from 'react'

class Child extends Component {
  render(){
    return (
      <>
        <h1>Child</h1>
        <div>
          {this.props.children('hello')}
        </div>
        <div>
          {this.props.abc(['a','b','c'])}
        </div>
      </>
    )
  }
}

export default class RenderProps extends Component {

  renderItem = (items) => {
    return (
      <ul>
        {
          items.map(li => <li key={li}>{li}</li>)
        }
      </ul>
    )
  }

  render() {
    return (
      <div>
        <Child
          abc={this.renderItem}
        >
          {
            (value) => <div>{value}</div>
          }
        </Child>
      </div>
    )
  }
}

