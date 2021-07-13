/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-20 17:07:25
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-20 17:30:58
 */
import { Component } from 'react'

function withSize(a){
  return (Comp) => {
    return class extends Component {
      render(){
        return (
          <Comp {...this.props} size="100px"></Comp>
        )
      }
    }
  }
}

export default withSize