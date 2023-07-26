import { Button } from 'antd';
import cls from './Navbar.module.scss';
import AuthForm from '../../../features/AuthForm/AuthForm';
import RegisterForm from '../../../features/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { openModalAuth, openModalRegister } from '../../../store/modalAuthAndRegisterReducer';
import { useCallback } from 'react';

export const Navbar = () => {
	const dispatch = useDispatch();
	const handleOpenModalRegister = useCallback(() => {
		dispatch(openModalRegister());
	}, [dispatch]);
	const handleOpenModalAuth = useCallback(() => {
		dispatch(openModalAuth());
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
