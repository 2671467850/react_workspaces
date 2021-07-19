/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-07-07 22:30:00
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-17 12:00:07
 */
import React, { useState, useCallback } from 'react'
import {
  Form,
  Input,
  Button,
  Select,
  message
} from 'antd';
import axios from 'axios'

export default function UserAdd() {

  const [form] = Form.useForm();

  // type SizeType = Parameters<typeof Form>[0]['size'];

  // const [componentSize] = useState<SizeType>('middle');

  const handlerFinish = useCallback(
    async (values) => {

      // console.log(form.getFieldsValue());

      let { username, password, information, role } = values
      if(information === undefined){
        information = "Talk is cheap, Show me the code."
        // console.log({username, password, information, role});
      }
      await axios({
        url: '/api/users',
        method: 'POST',
        data: {
          username, password, information, role
        },
        headers: {
          'X-Token': localStorage.getItem('X-Token')
        },
      }).then(result=>{
        // console.log(result);
        if(result.data.ret){
          message.success(result.data.data.message);
          form.resetFields()
        }else{
          message.error(result.data.data.message);
        }
      })
    },
    [],
  )

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        // initialValues={{ size: componentSize }}
        // size={componentSize as SizeType}
        size="large"
        onFinish={handlerFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          hasFeedback
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
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="ConfirmPassword"
          name="confirmpassword"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Information"
          name="information"
          help="You may want to write some word to show who are you!"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Role"
          name="role"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please select your role!',
            },
          ]}
        >
          <Select>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="editor">Editor</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
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
