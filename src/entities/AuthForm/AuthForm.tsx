import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {useCallback, memo} from 'react';

const LoginForm = () => {
  const modalIsAuth = useSelector((state: RootState) => state.openModal.modalIsAuth);
  const loadingAuth = useSelector((state: RootState) => state.openModal.loadingAuth);
  const dispatch = useDispatch();

  const handleOkAuthDispatch = useCallback(() => {dispatch({type: 'modal/handleOkAuth'})}, [dispatch])
  const handleCancelAuthDispatch = useCallback(() => {dispatch({type: 'modal/handleCancelAuth'})}, [dispatch])
  const handleRegisterAuth = useCallback(() => {dispatch({type: 'modal/handleRegisterAuth'})}, [dispatch])

  return (
      <Modal
        open={modalIsAuth}
        title="Log in"
        onCancel={handleCancelAuthDispatch}
        footer={[]}
      >
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={(value) => console.log(value)}
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
        <Button type="primary" htmlType="submit" className="login-form-button" key="submit" loading={loadingAuth} onClick={handleOkAuthDispatch}>
          Log in
        </Button>
        <Button type='link' onClick={handleRegisterAuth}>Or register now!</Button>
        </div>
      </Form.Item>
    </Form>
      </Modal>
  );
};

export default memo(LoginForm);