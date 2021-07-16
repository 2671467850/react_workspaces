/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-07 22:30:05
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-16 22:11:58
 */
import React, { useEffect, useCallback } from 'react'
import { Table, Tag, Space, Button, message, Popconfirm } from 'antd';
import { useSelector, UserListModelState, useDispatch } from 'umi'
import axios from 'axios'

export default function UserList() {

  const userList = useSelector((state: any)=>state)
  const dispatch = useDispatch()

  useEffect(
    ()=>{
      dispatch({
        type: 'users/loadData',
      })
    },[]
  )

  const handlerDelClick = useCallback(
    (id) => async() =>{
      // console.log(id);
      await axios({
        url: "/api/users",
        method: "delete",
        data: {
          id
        },
        headers: {
          'X-Token': localStorage.getItem('X-Token')
        },
      }).then(result=>{
        if(result.data.ret){
          message.success(result.data.data.message);
        }else{
          message.error(result.data.data.message);
        }
      })
    },
    [],
  )

  const handlerEditClick = useCallback(
    (id)=>()=>{
      message.success("edit this user:"+id);
    },
    [],
  )

  const handlerCancel = useCallback(
    () => {
      message.error('Cancel deletion');
    },
    [],
  )

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
          <Button type="primary" onClick={handlerEditClick(record._id)}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={handlerDelClick(record._id)}
            onCancel={handlerCancel}
            okText="Yes"
            cancelText="No"
          >
          <Button type="primary" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={userList.users}
        // pagination={{position:["bottomRight"]}}
        pagination={false}
      />
    </>
  )
}
