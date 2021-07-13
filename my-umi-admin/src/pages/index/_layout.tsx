/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-07 22:00:18
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-13 20:21:40
 */
import { useState, useCallback, createElement, FC, useEffect } from 'react'
import { Layout, Menu } from 'antd'

import {
  SmileOutlined,
  UserOutlined,
  DatabaseOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

import './index.less'

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

interface WithWrapper {
  wrappers: Array<string>
}

type Props = {
  [props: string]: any
}

const MyLayout:FC<Props> = (props: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string>('')

  const toggle = useCallback(() => {
    setCollapsed(collapsed => !collapsed)
  }, [])

  const handleMenuClick = useCallback(
    (options) => {
      props.history.push(options.key)
      setDefaultSelectedKeys(options.key)
    },
    []
  )

  useEffect(() => {
    const pathname = props.location.pathname
    setDefaultSelectedKeys(pathname)
  }, [props]) 

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark" 
          mode="inline" 
          defaultSelectedKeys={[defaultSelectedKeys]}
          selectedKeys={[defaultSelectedKeys]}
          onClick={handleMenuClick}
        >
          <Menu.Item key="/" icon={<SmileOutlined />}>
            欢迎
          </Menu.Item>
          <SubMenu key="" icon={<UserOutlined />} title="用户管理">
            <Menu.Item key="/index/users/useradd" icon={<UserOutlined />}>
              用户添加
            </Menu.Item>
            <Menu.Item key="/index/users/userlist" icon={<UserOutlined />}>
              用户列表
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="/index/positions" icon={<DatabaseOutlined />}>
            职位管理
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            style:{
              marginLeft:"20px"
            },
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}


MyLayout.wrappers = ['@/wrappers/auth']

export default MyLayout