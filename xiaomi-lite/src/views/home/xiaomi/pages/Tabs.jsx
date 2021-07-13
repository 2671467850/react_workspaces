import React, {useState, useEffect, useCallback, useContext } from 'react'
import ProductList from '@/components/productlist/ProductList'

import { Tabs } from 'antd-mobile';
import { TabWrapper } from './styledXiaomi'

import httpContext from '@/context/httpContext'

export default function Tab(props) {

  const [tab, setTab] = useState([])
  const [indexlist, setIndexList] = useState(0)
  const [productlist, setProductList] = useState({})

  const { get } = useContext(httpContext)

  useEffect(
    async () => {
      let result = await get({
        url: `/api/tab${indexlist}`
      })
      // console.log(result.data.data);
      setProductList(result.data.data)
    },[indexlist]
  )

  useEffect(() => {
    if(props.data){
      // console.log(props.data.homev4_tab_channel.body.items);
      setTab(props.data.homev4_tab_channel.body.items)
    }
  }, [props])

  const tabChange = useCallback((tab,index)=>{
    // console.log(tab);//TODO
    setIndexList(index)
  },[])
    
  const renderTab = useCallback(props => {
    return <Tabs.DefaultTabBar {...props} page={5} />
  },[])
  
  const renderContent = useCallback(() => (
    <ProductList data={productlist}></ProductList>
  ))
  
  return (
    <TabWrapper>
        <Tabs tabs={tab}
          tabBarInactiveTextColor="#333333"
          tabBarUnderlineStyle={{borderColor:'#FF5934'}}
          // tabBarBackgroundColor={"transparent"}
          tabBarActiveTextColor="#FF5934"
          renderTabBar={renderTab}
          onChange={tabChange}
        >
          {renderContent}
        </Tabs>
    </TabWrapper>
  )
}