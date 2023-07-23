import { CheckCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { closeModalRegister, okRegister, switchAuthToRegistration } from '../../store/modalReducer';

const RegisterForm = () => {
	const isVisibleRegister = useSelector((state: RootState) => state.modal.isVisibleRegister);
	const isLoadingTheRegisterButton = useSelector((state: RootState) => state.modal.isLoadingTheRegisterButton);
	const dispatch = useDispatch<AppDispatch>();

	const handleOkRegister = useCallback(() => {
		dispatch(okRegister());
	}, [dispatch]);
	const handleCloseModalRegister = useCallback(() => {
		dispatch(closeModalRegister());
	}, [dispatch]);
	const handleSwitchAuthToRegistration = useCallback(() => {
		dispatch(switchAuthToRegistration());
	}, [dispatch]);

	return (
		<Modal
			open={isVisibleRegister}
			title='Register'
			onCancel={handleCloseModalRegister}
			footer={[]}>
			<Form
				name='normal_register'
				className='register-form'
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
					/>
				</Form.Item>
				<Form.Item
					name='confirm'
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
					]}>
					<Input.Password
						prefix={<CheckCircleOutlined className='site-form-item-icon' />}
						placeholder='Confirm Password'
						allowClear
					/>
				</Form.Item>
				<Form.Item
					name='Genre'
					label='Favorites'>
					<Select
						placeholder='Please choose your favorite genre'
						mode='multiple'
						showArrow>
						<Option value='fanesi'>Fanesi</Option>
						<Option value='horrors'>Horrors</Option>
						<Option value='fighters'>Fighters</Option>
					</Select>
				</Form.Item>
				<Form.Item>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Button
							type='primary'
							htmlType='submit'
							className='register-form-button'
							key='submit'
							loading={isLoadingTheRegisterButton}
							onClick={handleOkRegister}>
							Register
						</Button>
						<Button
							type='link'
							onClick={handleSwitchAuthToRegistration}>
							Already registered?
						</Button>
					</div>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default memo(RegisterForm);
