import { RootState } from "store";

export const getIsVisibleAuth = (state: RootState) =>
    state.modalAuthReducer.modalAuthInitialState.isVisibleAuth || false;
export const getIsLoadingTheAuthButton = (state: RootState) =>
    state.modalAuthReducer.modalAuthInitialState.isLoadingTheAuthButton || false;
export const getValueUserNameAuth = (state: RootState) =>
    state.modalAuthReducer.modalAuthInitialState.valueUserNameAuth || "";
export const getValuePasswordAuth = (state: RootState) =>
    state.modalAuthReducer.modalAuthInitialState.valuePasswordAuth || "";
export const getIsRememberMe = (state: RootState) =>
    state.generalAuthAndRegisterReducer.isRememberMe;
export const getIsDisabledButtonToAuth = (state: RootState) =>
    state.modalAuthReducer.modalAuthInitialState.isDisabledButtonToAuth;
