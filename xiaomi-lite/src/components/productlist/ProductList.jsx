import React, { useCallback, useState, useEffect } from 'react'
import { ProductListWrapper, TagBorderWrapper, MaskWrapper } from './styleProductList'

import { useHistory } from 'react-router-dom'

export default function ProductList(props) {

  const history = useHistory()

  const [ productList, setProductList ] = useState({})
  const [ selected, setSelected ] = useState(false)
  const [ maskName, setmaskName ] = useState("")
  const [ itemShow, setItemShow ] = useState([])

  useEffect(
    ()=>{
      if(props.data){
        setProductList(props.data)
      }
    },[props]
  )

  const handleClick = useCallback(
    data => {
      return () => {
        if(selected){
          setSelected(false)
        }else{
          history.push('/detail', {data})
          // console.log("detail");
        }
      }
    },
    [selected],
  )

  const handlerShowMaskClick = useCallback(
    (data) => {
      return (e) => {
        e.stopPropagation()
        //TODO 遮罩层
        setSelected(selected=>!selected)
        setmaskName(data)
      }
    },
    [selected],
  )

  const handlerItemShowClick = useCallback(
    (data) => {
      return (e) => {
        e.stopPropagation()
        setItemShow(
          prevArr =>{
            return [...prevArr, data];
          }
        )
        setSelected(selected=>!selected)
      }
    },
    [],
  )

  //遮罩层内容
  const showMask = useCallback(
    (item) => (
      <div
        className={`mask ${(selected && item.body.items[0].product_name) === maskName ? "show" : "notshow"}`}
      >
        <div onClick={handlerItemShowClick(item.body.items[0].product_name)}>不感兴趣</div>
        <div onClick={handlerItemShowClick(item.body.items[0].product_name)}>品类不喜欢</div>
        <div onClick={handlerItemShowClick(item.body.items[0].product_name)}>看过了</div>
        <div onClick={handlerItemShowClick(item.body.items[0].product_name)}>已购买</div>
      </div>
      // <MaskWrapper
      //   isShow={selected}
      //   key={item.body.items[0].product_name}
      //   maskName={maskName}
      // ></MaskWrapper>
    ),[selected,maskName]
  )

    // console.log(productList.sections);
  return (
    <ProductListWrapper>
      {
        productList.sections && productList.sections.map(item=>(
          <div
            className={`product_item ${itemShow.find((name)=>name===item.body.items[0].product_name) ? "notshow" : ""}`}
            key={item.body.items[0].id}
            /*  id={item.body.items[0].id} */
            onClick={handleClick(item.body.items[0])}
          >
            {/* TODO 遮罩层控制 */}
            <span className="showmask" onClick={handlerShowMaskClick(item.body.items[0].product_name)}>X</span>
            <div className="product_img">
              <img src={item.body.items[0].img_url} alt="" />
            </div>
            <div className="product_info">
              <p>{item.body.items[0].product_name}</p>
              <p>
                ￥{item.body.items[0].product_price}
                {
                  item.body.items[0].subtitle
                  &&
                  <TagBorderWrapper
                  borderColor="#ff5934"
                >
                  {item.body.items[0].subtitle}
                </TagBorderWrapper>
                }
              </p>
            </div>
            {showMask(item)}
          </div>
        ))
      }
    </ProductListWrapper>
  )
}
