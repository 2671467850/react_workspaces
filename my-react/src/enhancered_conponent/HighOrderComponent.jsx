import React, { Component } from 'react'
import withSize from './withSize'

// @withSize()
class HighOrderComponent extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  render(props){
    return (
      <div>
        hello
      </div>
    )
  }
}
export default withSize(HighOrderComponent)