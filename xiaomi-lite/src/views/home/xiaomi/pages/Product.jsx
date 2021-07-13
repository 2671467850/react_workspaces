import React, { useState, useEffect, useCallback } from 'react'
import { ProductWrapper } from './styledXiaomi'
import { useHistory } from 'react-router-dom'

import test1 from '@/assets/images/items/1.jpg'
import test2 from '@/assets/images/items/2.jpg'
import test3 from '@/assets/images/items/3.jpg'

export default function Product(props) {

  const history = useHistory()

  const [ productdata, setProductData ] = useState({})
  const [ productlist, setProductList ] = useState([])

  useEffect(() => {
    if(props.data && props.index){
      // console.log(props.data.sections[props.index].body);
      setProductData(props.data.sections[props.index].body)
      setProductList(props.data.sections[props.index].body.product_list)
    }
  }, [props])
  // console.log(productdata);

  const handleClick = useCallback(
    data => {
      return () => {
        history.push('/detail', {data})
      }
    },
    [],
  )

  return (
    <ProductWrapper>
      <p className="item-title">{productdata.title}&nbsp;
        <span className="item-intro" style={{color:productdata.text_color}}>{productdata.sub_title}</span>
        <span className="item-more">{productdata.more_name}&ensp;&gt;</span>
      </p>
      <ul>
        {
          productlist.map((item,index)=>(
            <li
              key={item.product_id}
              onClick={handleClick(item)}
            >
              {
                props.topIndex &&
                <span className="top_pro">{index+1}</span>
              }
              <img src={item.img_url} alt="" />
              <p className="pro-title">{item.product_name}</p>
              <p className="pro-info">{item.product_brief}</p>
              <p className="pro-price">￥{item.product_price}</p>
            </li>
          ))
        }
        {/* <li>
          <img src={test1} alt="" />
          <p className="pro-title">33W充电器套装</p>
          <p className="pro-info">33W充电器套装</p>
          <p className="pro-price">￥66</p>
        </li> */}
      </ul>
    </ProductWrapper>
  )
}
