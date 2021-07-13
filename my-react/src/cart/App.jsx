import React, { Component } from 'react'


export default class App extends Component {
  static defaultProps = {
    tot:0
  }


  
  state = {
    products:[],
    carts:[],
    tot:0
  }

  componentDidMount(){
    fetch('/products.json')
      .then(response => response.json())
      .then(result => {
          // console.log(result.data);
          this.setState({
            products:[
              ...result.data
            ]
          })
      })
  }

  handleAddClick = (i,v) => {
    return () => {
      // this.state.products[i].inventory--;
      this.state.products.forEach((item)=>{
        if(item.name === v.name){
          item.inventory--;
        }
      })
      let flag = this.state.carts.some((item,index)=>{
        return item.name === v.name
      })
      if(this.state.carts.length===0 || !flag){
        this.state.carts.push(Object.assign({num:1},this.state.products[i]))
      }else{
        this.state.carts.forEach((item,index)=>{
          if(item.name===v.name){
             item['num'] += 1;
          }
        })
      }
      this.setState({})
    }
  }

  render() {
    return (
      <div>
        <ul>
          产品列表
          {
            this.state.products.map((v,i) => (
              <li key={v+i}>{v.name}--￥{v.price}&emsp;<button disabled={v.inventory===0} onClick={this.handleAddClick(i,v)}>AddCart</button></li>
            ))
          }
        </ul>
        <hr />
        <ul>
          购物车 {this.state.tot}
          {
            this.state.carts.map((v,i) => (
              <li key={v+i}>{v.name}--{v.num}--总价：{v.num*v.price}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}