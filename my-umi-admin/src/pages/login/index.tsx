/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-07 21:57:46
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-16 20:40:47
 */
import React, { useCallback } from 'react'
import { history } from 'umi';
import { Form, Input, Button, Checkbox } from 'antd';

import axios from 'axios'


export default function index() {

  const [form] = Form.useForm();

  const onFinish = useCallback(
    async (values) => {
      // value--表单数据
      // console.log(values);
      let { username, password } = values
      
      await axios({
        url: '/api/users/signin',
        method:"POST",
        data: {
          username,
          password
        },
      }).then(function(response) {
        // console.log(response.data);
        // console.log(response.headers);
        if(response.data.ret){
          localStorage.setItem('X-Token',response.headers["x-access-token"]);
          // window.location.href="http://localhost:8000"
          history.push('/');
        }
      });
    },[]
  );

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 5,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

          {/* 是否记住密码--删除本地Token */}
        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 5,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
