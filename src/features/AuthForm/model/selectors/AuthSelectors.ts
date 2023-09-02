import { RootState } from "store";

export const getIsVisibleAuth = (state: RootState) =>
    state.modalAuthReducer.isVisibleAuth || false;
export const getIsLoadingTheAuthButton = (state: RootState) =>
    state.modalAuthReducer.isLoadingTheAuthButton || false;
export const getValueUserNameAuth = (state: RootState) =>
    state.modalAuthReducer.valueUserNameAuth || "";
export const getValuePasswordAuth = (state: RootState) =>
    state.modalAuthReducer.valuePasswordAuth || "";
export const getIsRememberMe = (state: RootState) =>
    state.generalAuthAndRegisterReducer.isRememberMe;
export const getIsDisabledButtonToAuth = (state: RootState) =>
    state.modalAuthReducer.isDisabledButtonToAuth;
