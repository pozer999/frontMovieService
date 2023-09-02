import { modalRegisterReducer } from './../../../../store/modalRegister';
import { RootState } from "store";

export const getIsAccess = (state: RootState) =>
    state.generalAuthAndRegisterReducer.isAccess;
export const getValueUserNameRegister = (state: RootState) =>
    state.modalRegisterReducer.valueUserNameRegister;
export const getValueUserNameAuth = (state: RootState) =>
    state.modalAuthReducer.valueUserNameAuth;
export const getThemeType = (state: RootState) =>
    state.modalFavouritesAndWatchLaterAndSettingsReducer.themeType;
export const getOpenUserAccount = (state: RootState) =>
    state.generalAuthAndRegisterReducer.isVisibleUserAccount;
