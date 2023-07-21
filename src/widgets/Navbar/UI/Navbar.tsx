import { Button, Checkbox, Form, Input, Modal } from 'antd';
import cls from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { RoutePath } from '../../../shared/config/routeConfig';
import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import LoginForm from '../../../entities/LoginForm/LoginForm';
import RegisterForm from '../../../entities/RegisterForm/RegisterForm';

export const Navbar = () => {

  const [loadingLogin, setLoadingLogin] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const showModalLogin = () => {
    setOpenLogin(true);
  };

  const handleOkLogin = () => {
    setLoadingLogin(true);
    setTimeout(() => {
      setLoadingLogin(false);
    }, 3000);
  };

  const handleCancelLogin = () => {
    setOpenLogin(false);
  };
  const onFinishLogin = (values: any) => {
    console.log('Received values of form: ', values);
  };


  const [loadingRegister, setLoadingRegister] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);


  const showModalRegister = () => {
    setOpenRegister(true);
  };

  const handleOkRegister = () => {
    setLoadingRegister(true);
    setTimeout(() => {
      setLoadingRegister(false);
    }, 3000);
  };

  const handleCancelRegister = () => {
    setOpenRegister(false);
  };

  const onFinishRegister = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
  <>
  <div className={cls.headerNavbar}>
      <Button type="dashed" onClick={showModalRegister} className={cls.buttonNavbar}>
        Register
      </Button>
      <Button type="primary" onClick={showModalLogin} className={cls.buttonNavbar}>
        Log in
      </Button>
  </div>
  <LoginForm open={openLogin} loading={loadingLogin} handleOk={handleOkLogin} handleCancel={handleCancelLogin} onFinish={onFinishLogin}/>
  <RegisterForm open={openRegister} loading={loadingRegister} handleOk={handleOkRegister} handleCancel={handleCancelRegister} onFinish={onFinishRegister}/>
  </>
);
  };
