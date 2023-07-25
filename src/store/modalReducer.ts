import { createAction, createReducer } from '@reduxjs/toolkit';


interface IinitialState {
  valueUserNameAuth: string | undefined;
  valuePasswordAuth: string | undefined;
	isVisibleAuth: boolean;
	isLoadingTheAuthButton: boolean;
	isVisibleRegister: boolean;
	isLoadingTheRegisterButton: boolean;
}

export const openModalAuth = createAction('modal/openModalAuth');
export const okAuth = createAction('modal/okAuth');
export const closeModalAuth = createAction('modal/closeModalAuth');
export const switchRegistrationToAuth = createAction('modal/switchRegistrationToAuth');

export const openModalRegister = createAction('modal/openModalRegister');
export const okRegister = createAction('modal/okRegister');
export const closeModalRegister = createAction('modal/closeModalRegister');
export const switchAuthToRegistration = createAction('modal/switchAuthToRegistration');

export const changeUserNameAuth = createAction<any>('modal/changeUserNameAuth');
export const changePasswordAuth = createAction<any>('modal/changePasswordAuth');

const initialState: IinitialState = {
  valueUserNameAuth: '',
  valuePasswordAuth: '',
	isVisibleAuth: false,
	isLoadingTheAuthButton: false,
	isVisibleRegister: false,
	isLoadingTheRegisterButton: false,
};

export const modalReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(openModalAuth, (state) => {
			state.isVisibleAuth = true;
		})
		.addCase(okAuth, (state) => {
			state.isLoadingTheAuthButton = true;
		})
		.addCase(closeModalAuth, (state) => {
			state.isVisibleAuth = false;
			state.isLoadingTheAuthButton = false;
		})
		.addCase(switchRegistrationToAuth, (state) => {
			state.isVisibleAuth = false;
			state.isVisibleRegister = true;
			state.isLoadingTheAuthButton = false;
		})

		.addCase(openModalRegister, (state) => {
			state.isVisibleRegister = true;
		})
		.addCase(okRegister, (state) => {
			state.isLoadingTheRegisterButton = true;
		})
		.addCase(closeModalRegister, (state) => {
			state.isVisibleRegister = false;
			state.isLoadingTheRegisterButton = false;
		})
		.addCase(switchAuthToRegistration, (state) => {
			state.isVisibleAuth = true;
			state.isVisibleRegister = false;
			state.isLoadingTheRegisterButton = false;
		})

		.addCase(changeUserNameAuth, (state, action) => {
			state.valueUserNameAuth = action.payload;
		})
		.addCase(changePasswordAuth, (state, action) => {
			state.valuePasswordAuth = action.payload;
		})

    
});
