import { modalRegisterReducer } from './../../../../store/modalRegister';
import { RootState } from "store";

export const getIsRegister = (state: RootState) =>
    state.generalAuthAndRegisterReducer.isRegister;
export const getValueUserNameRegister = (state: RootState) =>
    state.modalRegisterReducer.valueUserNameRegister;
export const getValueUserNameAuth = (state: RootState) =>
    state.modalAuthReducer.modalAuthInitialState.valueUserNameAuth;
export const getThemeType = (state: RootState) =>
    state.modalFavouritesAndWatchLaterAndSettingsReducer.themeType;
export const getOpenUserAccount = (state: RootState) =>
    state.generalAuthAndRegisterReducer.isVisibleUserAccount;
