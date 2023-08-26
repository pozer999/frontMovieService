import { RootState } from "store";

export const getIsRegister = (state: RootState) =>
    state.modalAuthAndRegisterReducer.isRegister;
export const getValueUserNameRegister = (state: RootState) =>
    state.modalAuthAndRegisterReducer.valueUserNameRegister;
export const getValueUserNameAuth = (state: RootState) =>
    state.modalAuthAndRegisterReducer.valueUserNameAuth;
export const getThemeType = (state: RootState) =>
    state.modalFavouritesAndWatchLaterAndSettingsReducer.themeType;
export const getOpenUserAccount = (state: RootState) =>
    state.modalAuthAndRegisterReducer.isVisibleUserAccount;
