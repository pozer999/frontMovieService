import { RootState } from "store";

export const getUserRegisterName = (state: RootState) =>
    state.modalAuthAndRegisterReducer.valueUserNameRegister || "";
export const getUserRegisterPassword = (state: RootState) =>
    state.modalAuthAndRegisterReducer.valuePasswordRegister || "";
export const getRegisterIsVisible = (state: RootState) =>
    state.modalAuthAndRegisterReducer.isVisibleRegister || false;
export const getRegisterIsLoading = (state: RootState) =>
    state.modalAuthAndRegisterReducer.isLoadingTheAuthButton || false;
export const getIsRegister = (state: RootState) =>
    state.modalAuthAndRegisterReducer.isRegister || false;
export const getError = (state: RootState) =>
    state.modalAuthAndRegisterReducer.errorRegister || false;
// export const isRememberMe = (state: RootState) =>
//     state.modalAuthAndRegisterReducer.isRememberMe || true;
