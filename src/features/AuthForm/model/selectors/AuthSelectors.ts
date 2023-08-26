import { RootState } from "store";

export const getIsVisibleAuth = (state: RootState) =>
    state.modalAuthAndRegisterReducer.isVisibleAuth || false;

export const getIsLoadingTheAuthButton = (state: RootState) =>
    state.modalAuthAndRegisterReducer.isLoadingTheAuthButton || false;

export const getValueUserNameAuth = 
    (state: RootState) =>
        state.modalAuthAndRegisterReducer.valueUserNameAuth || ""
export const getValuePasswordAuth = 
    (state: RootState) =>
        state.modalAuthAndRegisterReducer.valuePasswordAuth || ""
export const getIsRememberMe = (state: RootState) =>
    state.modalAuthAndRegisterReducer.isRememberMe || false;
