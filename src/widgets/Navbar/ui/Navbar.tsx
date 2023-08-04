import { Button } from 'antd';
import cls from './Navbar.module.scss';
import { useDispatch } from 'react-redux';
import { memo, useCallback } from 'react';
import { AuthActions } from '../../../store/modalAuthAndRegisterReducer';
import { AuthForm } from 'features/AuthForm';
import { RegisterForm } from 'features/RegisterForm';


export const Navbar = memo(() => {
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
});
