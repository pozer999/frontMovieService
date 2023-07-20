import { Button, Checkbox, Form, Input, Modal } from 'antd';
import cls from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { RoutePath } from '../../../shared/config/routeConfig';
import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export const Navbar = () => {

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
  <>
  <div className={cls.headerNavbar}>
      <Button type="dashed" className={cls.buttonNavbar}>
        Register
      </Button>
      <Button type="primary" onClick={showModal}>
        Log in
      </Button>
  </div>
  <Modal
        open={open}
        title="Log in"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
        
        ]}
      >
 <Form
      name="normal_login"
      className="login-form"
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
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <div style={{display: "flex", alignItems: "center"}}>
        <Button type="primary" htmlType="submit" className="login-form-button" key="submit" loading={loading} onClick={handleOk}>
          Log in
        </Button>
        <div style={{marginLeft: 10}}>Or <a href="">register now!</a></div>
        </div>
      </Form.Item>
    </Form>
      </Modal>
  </>
);
  };
