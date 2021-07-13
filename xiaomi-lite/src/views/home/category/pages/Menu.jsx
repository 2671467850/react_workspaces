import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { CategoryMenu, TopUlWrapper, ContUlWrapper } from './styledCategory'

export default function Menu(props) {

  const [ currentKey, setCurrentKey ] = useState(1242)
  const [ currentTop, setCurrentTop ] = useState(0)
  const [ contList, setContList ] = useState([])

  const menuData = useMemo(() => {
    const { menuData } = props
    return menuData
  }, [props])

  const handleTabClick = useCallback(
    (key) => {
      return () => {
        setCurrentKey(key)
        // console.log(key);
      }
    },
    [],
  )

  const handlerTopClick = useCallback(
    (key) => {
      return () => {
        setCurrentTop(key)
        // console.log(key);
      }
    },
    [],
  )

    useEffect(() => {
      let cont = menuData.find(item=>{
        return item.category_id === currentKey
      })
      setContList(cont)
      // console.log(cont);
    }, [currentKey,props])

  return (
    <CategoryMenu>
      <ul className="tab">
        {
          menuData && menuData.map(item => {
            return (
              <li 
                key={item.category_id}
                className={currentKey === item.category_id ? 'active' : ''}
                onClick={handleTabClick(item.category_id)}
              >
                <span>
                  {item.category_name}
                </span>
              </li>
            )
          })
        }
      </ul>
      <div className="content">
        <div>
          <TopUlWrapper>
            {
              contList
              &&
              contList.category_list
              &&
              contList.category_list
              .filter(obj=>obj.view_type === "category_title")
              .map((item,index)=>
                <li
                  key={item.body.category_name}
                  // className={currentTop === item.body.category_name ? 'active' : ''}
                  // onClick={handlerTopClick(item.body.category_name)}
                  className={currentTop === index ? 'active' : ''}
                  onClick={handlerTopClick(index)}
                >
                  {/* <a href={"#"+item.body.category_name+0}>{item.body.category_name}</a> */}
                  {item.body.category_name}
                </li>
              )
            }
          </TopUlWrapper>
        </div>
        <ContUlWrapper
          borderWidth="1px 0 0 0"
        >
          {
            contList
            &&
            contList.category_list
            &&
            // contList.category_list.map((item, index)=><li key={index}>{contList.category_list.length}</li>)
            contList.category_list
            .filter(obj=>obj.view_type === "category_group")
            .map(item=>{
              // console.log(item)
              // let id=
              return item.body.items.map((item,index)=>(
                <li
                  key={item.product_name}
                  id={item.category_name+index}
                >
                  <img src={item.img_url}/>
                  <div>
                    <h1>{item.product_name}</h1>
                  </div>
                </li>
              ))
            })
          }
        </ContUlWrapper>
      </div>
    </CategoryMenu>
  )
}
