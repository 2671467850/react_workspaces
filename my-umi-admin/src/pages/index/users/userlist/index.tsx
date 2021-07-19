/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-07 22:30:05
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-17 12:00:42
 */
import React, { useEffect, useCallback, useState, useRef } from 'react'
import { Table, Tag, Space, Button, message, Popconfirm, Form, Modal, Select, Input } from 'antd';
import { useSelector, UserListModelState, useDispatch } from 'umi'
import axios from 'axios'

import { FormInstance } from 'antd/lib/form';

interface ModalFormProps {
  visible: boolean;
  // onCancel: () => void;
}

export default function UserList() {

  const userList = useSelector((state: any)=>state)
  const dispatch = useDispatch()

  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(
    ()=>{
      dispatch({
        type: 'users/loadData',
      })
    },[]
  )

  const handlerEditClick = useCallback(
    (data)=>()=>{
      // message.success("edit this user:");
      // console.log(data);
      setVisible(true);
      setFormData(data)
    },
    [],
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
        location.reload()
      })
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
          <Button type="primary" onClick={handlerEditClick(record)}>Edit</Button>
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

  const useResetFormOnCloseModal = ({ form, visible }: { form: FormInstance; visible: boolean }) => {
    const prevVisibleRef = useRef<boolean>();
    useEffect(() => {
      prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
  
    useEffect(() => {
      if (!visible && prevVisible) {
        form.resetFields();
      }
    }, [visible]);
  };

  const ModalForm: React.FC<ModalFormProps> = ({ visible }) => {
    const [form] = Form.useForm();
  
    useResetFormOnCloseModal({
      form,
      visible,
    });

    useEffect(()=>{
      if(visible){
        form.setFieldsValue(formData)
      }
    },[visible])
  
    const onOk = async() => {
      // form.submit();
      let newData = {...formData,...form.getFieldsValue()}
      // console.log(newData)//newData
      await axios({
        url: '/api/users',
        method: 'patch',
        headers: {
          'X-Token': localStorage.getItem('X-Token')
        },
        data: newData
      }).then((result)=>{
        if(result.data.ret){
          message.success(result.data.data.message);
          setVisible(false);
        }else{
          message.error(result.data.data.message);
        }
        location.reload()
      })
    };

    const hideUserModal = () => {
      setVisible(false);
    };
  
    return (
      <Modal title="Basic Drawer" visible={visible} getContainer={false} onOk={onOk} onCancel={hideUserModal}>
        <Form form={form} layout="vertical" name="userForm">
          <Form.Item
            name="username"
            label="Username"
            rules={[
              { required: true,
                message: 'Please input your name!'
              },
              //TODO 自定义验证--用户名不能为空
              // ({ getFieldValue }) => ({
              //   validator(_, value) {
              //     if (!value || getFieldValue('password') === value) {
              //       return Promise.resolve();
              //     }
              //     return Promise.reject(new Error('The two passwords that you entered do not match!'));
              //   },
              // }),
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
          >
            <Select>
              <Select.Option value="admin">Admin</Select.Option>
              <Select.Option value="editor">Editor</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={userList.users}
        pagination={false}
      />
      <ModalForm visible={visible} />
    </>
  )
}
