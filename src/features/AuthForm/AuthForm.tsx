import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useCallback, memo } from 'react';
import { changePasswordAuth, changeUserNameAuth, closeModalAuth, okAuth, switchRegistrationToAuth } from '../../store/modalReducer';

const LoginForm = () => {
	const isVisibleAuth = useSelector((state: RootState) => state.modal.isVisibleAuth);
	const isLoadingTheAuthButton = useSelector((state: RootState) => state.modal.isLoadingTheAuthButton);
  const valueUserNameAuth = String(useSelector((state: RootState) => state.modal.valueUserNameAuth)) ;
  const valuePasswordAuth = String(useSelector((state: RootState) => state.modal.valuePasswordAuth)) ;
	const dispatch = useDispatch<AppDispatch>();

	const handleOkAuth = useCallback(() => {
		dispatch(okAuth());
	}, [dispatch]);
	const handleCloseModalAuth = useCallback(() => {
		dispatch(closeModalAuth());
	}, [dispatch]);
	const handleSwitchRegistrationToAuth = useCallback(() => {
		dispatch(switchRegistrationToAuth());
	}, [dispatch]);



	return (
		<Modal
			open={isVisibleAuth}
			title='Log in'
			onCancel={handleCloseModalAuth}
			footer={[]}>
			<Form
				name='normal_login'
				className='login-form'
				initialValues={{ remember: true }}
				onFinish={(value) => console.log(value)}>
				<Form.Item
					name='username'
					rules={[{ required: true, message: 'Please input your Username!' }]}
					hasFeedback>
					<Input
						prefix={<UserOutlined className='site-form-item-icon' />}
						placeholder='Username'
						allowClear
            value = {valueUserNameAuth}
            onChange={(e) => dispatch(changeUserNameAuth(e.target.value))}
					/>
				</Form.Item>
				<Form.Item
					name='password'
					rules={[{ required: true, message: 'Please input your Password!' }]}
					hasFeedback>
					<Input.Password
						prefix={<LockOutlined className='site-form-item-icon' />}
						type='password'
						placeholder='Password'
						allowClear
            value = {valuePasswordAuth}
            onChange={(e) => dispatch(changePasswordAuth(e.target.value))}
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item
						name='remember'
						valuePropName='checked'
						noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a
						className='login-form-forgot'
						href='/'>
						Forgot password
					</a>
				</Form.Item>

				<Form.Item>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
							key='submit'
							loading={isLoadingTheAuthButton}
							onClick={handleOkAuth}>
							Log in
						</Button>
						<Button
							type='link'
							onClick={handleSwitchRegistrationToAuth}>
							Or register now!
						</Button>
					</div>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default memo(LoginForm);