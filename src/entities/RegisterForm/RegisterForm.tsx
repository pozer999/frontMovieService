import { CheckCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import React from 'react';

interface IRegisterForm {
  open: boolean,
  loading: boolean,
  handleOk: () => void,
  handleCancel: () => void,
  onFinish: (values: any) => void,
}


const RegisterForm = ({open, loading, handleOk, handleCancel, onFinish}: IRegisterForm) => {
  return (
      <Modal
        open={open}
        title="Register"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
 <Form
      name="normal_register"
      className="register-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
        hasFeedback
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" allowClear />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          allowClear 
        />
      </Form.Item>
      <Form.Item
        name="confirm"
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
              return Promise.reject(new Error('The password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password prefix={<CheckCircleOutlined className="site-form-item-icon" />} placeholder='Confirm Password' allowClear/>
      </Form.Item>
      <Form.Item
        name="Genre"
        label="Favorites"
      >
        <Select placeholder="Please choose your favorite genre" mode="multiple" showArrow>
          <Option value="fanesi">Fanesi</Option>
          <Option value="horrors">Horrors</Option>
          <Option value="fighters">Fighters</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <div style={{display: "flex", alignItems: "center"}}>
        <Button type="primary" htmlType="submit" className="register-form-button" key="submit" loading={loading} onClick={handleOk}>
            Register
        </Button>
        </div>
      </Form.Item>
    </Form>
      </Modal>
  );
};

export default RegisterForm;