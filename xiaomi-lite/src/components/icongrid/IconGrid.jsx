import React, { useState, useEffect, useContext } from 'react'
import { IconGridWrapper } from './styledIconGrid'

export default function IconGrid(props) {

  const [ iconlist, setIconList ] = useState([])

  useEffect(
    ()=>{
      if(props.data){
        // 金刚区数据
        // setIconList(props.data.sections[2].body.items)
        setIconList(props.data)
      }
    },[props]
  )


  return (
    <IconGridWrapper
      colu={props.colu}
      ImgWidth={props.ImgWidth}
      bgColor={props.bgColor}
      liColor={props.liColor}
    >
      <ul>
      {
        iconlist.map((li,index) => {
          return (
            <li key={index}>
              <div className="icon_img">
                <img src={li.img_url} />
              </div>
              <div>
                <p>{li.title}</p>
              </div>
            </li>
          )
        })
      }
      </ul>
    </IconGridWrapper>
  )
}
