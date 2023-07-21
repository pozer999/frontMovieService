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
		.addCase(openModalAuth, (state, action) => {
			state.isVisibleAuth = true;
		})
		.addCase(okAuth, (state, action) => {
			state.isLoadingTheAuthButton = true;
		})
		.addCase(closeModalAuth, (state, action) => {
			state.isVisibleAuth = false;
			state.isLoadingTheAuthButton = false;
		})
		.addCase(switchRegistrationToAuth, (state, action) => {
			state.isVisibleAuth = false;
			state.isVisibleRegister = true;
		})

		.addCase(openModalRegister, (state, action) => {
			state.isVisibleRegister = true;
		})
		.addCase(okRegister, (state, action) => {
			state.isLoadingTheRegisterButton = true;
		})
		.addCase(closeModalRegister, (state, action) => {
			state.isVisibleRegister = false;
			state.isLoadingTheRegisterButton = false;
		})
		.addCase(switchAuthToRegistration, (state, action) => {
			state.isVisibleAuth = true;
			state.isVisibleRegister = false;
		})

		.addCase(changeUserNameAuth, (state, action) => {
			state.valueUserNameAuth = action.payload;
		})
		.addCase(changePasswordAuth, (state, action) => {
			state.valuePasswordAuth = action.payload;
		})

    
});
