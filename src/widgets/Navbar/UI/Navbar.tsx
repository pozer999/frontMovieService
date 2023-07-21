import { Button} from 'antd';
import cls from './Navbar.module.scss';
 import AuthForm from '../../../entities/AuthForm/AuthForm';
import RegisterForm from '../../../entities/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { openModalIsAuth, openModalIsRegister } from '../../../store/OpenModalSlice';

export const Navbar = () => {
  const dispatch = useDispatch();
  return (
  <>
  <div className={cls.headerNavbar}>
      <Button type="dashed" onClick={() => dispatch(openModalIsRegister())} className={cls.buttonNavbar}>
        Register
      </Button>
      <Button type="primary" onClick={() => dispatch(openModalIsAuth())} className={cls.buttonNavbar}>
        Log in
      </Button>
  </div>
  <AuthForm />
  <RegisterForm />
  </>
);
  };
