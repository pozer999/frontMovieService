import { Button } from 'antd';
import cls from './Navbar.module.scss';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { RoutePath } from '../../../shared/config/routeConfig';
import { AuthActions } from '../../../store/modalAuthAndRegisterReducer';
import AuthForm from 'features/AuthForm/AuthForm';
import RegisterForm from 'features/RegisterForm/RegisterForm';

export const Navbar = () => {
	const dispatch = useDispatch();
	const handleOpenModalRegister = useCallback(() => {
		dispatch(AuthActions.openModalRegister());
	}, [dispatch]);
	const handleOpenModalAuth = useCallback(() => {
		dispatch(AuthActions.openModalAuth());
	}, [dispatch]);

	return (
		<>
			<div className={cls.headerNavbar}>
				<Button
					type='dashed'
					onClick={handleOpenModalRegister}
					className={cls.buttonNavbar}>
					Register
				</Button>
				<Button
					type='primary'
					onClick={handleOpenModalAuth}
					className={cls.buttonNavbar}>
					Log in
				</Button>
			</div>
			<AuthForm />
			<RegisterForm />
		</>
	);
};
