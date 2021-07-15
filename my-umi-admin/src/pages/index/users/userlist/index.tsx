/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-07 22:30:05
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-15 22:15:23
 */
import React from 'react'
import { Table, Tag, Space, Button } from 'antd';

export default function UserList() {

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username'
    },
    {
      title: 'CreateTime',
      dataIndex: 'createTime'
    },
    {
      title: 'Info',
      dataIndex: 'information'
    },
    {
      title: 'Role',
      dataIndex: 'role',
      render: tag => {
        let color = tag==="admin" ? 'red' : 'green';
        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        )
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button type="primary" danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      "_id": "60e322e458b50715c82d3998",
      "username": "ankang222",
      "password": "$2b$10$49u9YlDNddsrRSGKn4y0SubEdNifKGRQ9gOdYFHcf0d.xzewiapFC",
      "createTime": "2021年07月05日 23:19",
      "information": "哈哈哈哈哈哈",
      "role": "editor",
      "__v": 0
    },
    {
      "_id": "60e3212c58b50715c82d3997",
      "username": "ankang111",
      "password": "$2b$10$ONLKFQoOKSq1pM.13Bn/g./Cq3AJQwcfQ6NlTcbTxpmlF8zK6ph9O",
      "createTime": "2021年07月05日 23:11",
      "information": "哈哈哈哈哈哈",
      "role": "admin",
      "__v": 0
    },
    {
      "_id": "60ca076a4f5fd843b0ebf374",
      "username": "ankang",
      "password": "$2b$10$2l.JyJHb0WKclyYXThZL1OHi//UzZNKOy.qerBLsl7kWqCeLigBbS",
      "createTime": "2021年06月16日 22:15",
      "information": "略略略略略略略略略略略",
      "role": "admin",
      "__v": 0
    },
    {
      "_id": "60ca07434f5fd843b0ebf373",
      "username": "editor",
      "password": "$2b$10$h5h45UjPxJSOG3rnWkA8Oevol08r2aCsivDfw3ZKf0nQ.8lpu6Hpa",
      "createTime": "2021年06月16日 22:14",
      "information": "略略略略略略略略略略略",
      "role": "user",
      "__v": 0
    },
    {
      "_id": "60ca07254f5fd843b0ebf372",
      "username": "admin",
      "password": "$2b$10$XUiJK6vLeC/Y13STX7kbT.hNrsB0Zc3Y8OBOotiIac1gYBxKI6pwW",
      "createTime": "2021年06月16日 22:13",
      "information": "啦啦啦啦啦啦啦啦啦啦",
      "role": "admin",
      "__v": 0
    }
  ]

  return (
    <Table rowKey="_id" columns={columns} dataSource={data} />
  )
}
