import React, { useState, useEffect, useContext } from 'react'
import { IconGridWrapper } from './styledXiaomi'
import httpContext from '@/context/httpContext'

// // 金刚区图标
// import icon1 from '@/assets/images/icons/1.jpg'

export default function IconGrid(props) {

  const [ iconlist, setIconList ] = useState([])

  // const { get } = useContext(httpContext)

  useEffect(
    // async () => {
    //   let result = await get({
    //     url: "http://localhost:9000/icons"
    //   })
    //   // console.log(result);
    //   setIconList(result.data)
    // },[]
    ()=>{
      if(props.data){
        // 金刚区数据
        setIconList(props.data.sections[2].body.items)
      }
    },[props]
  )


  return (
    <IconGridWrapper>
      <ul>
      {
        // console.log(iconlist),
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
        {/* <li>
          <div>
            <img src={icon1} />
          </div>
          <div>
            <p>小米上新</p>
          </div>
        </li>*/}
      </ul>
    </IconGridWrapper>
  )
}
