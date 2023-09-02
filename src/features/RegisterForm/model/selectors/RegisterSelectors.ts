import { RootState } from "store";

export const getUserRegisterName = (state: RootState) =>
    state.modalRegisterReducer.valueUserNameRegister || "";
export const getUserRegisterPassword = (state: RootState) =>
    state.modalRegisterReducer.valuePasswordRegister || "";
export const getConfirmPasswordRegister = (state: RootState) =>
    state.modalRegisterReducer.valueConfirmPasswordRegister || "";
export const getRegisterIsVisible = (state: RootState) =>
    state.modalRegisterReducer.isVisibleRegister || false;
export const getRegisterIsLoading = (state: RootState) =>
    state.modalAuthReducer.isLoadingTheAuthButton || false;
export const getError = (state: RootState) =>
    state.modalRegisterReducer.errorRegister || false;
export const getIsDisabledButtonToRegister = (state: RootState) =>
    state.modalRegisterReducer.isDisabledButtonToRegister;