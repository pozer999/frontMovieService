import { RootState } from "store";

export const getIsVisibleFavourites = (state: RootState) =>
    state.modalFavouritesAndWatchLaterAndSettingsReducer.isVisibleFavourites;
export const getIsVisibleWatchLater = (state: RootState) =>
    state.modalFavouritesAndWatchLaterAndSettingsReducer.isVisibleWatchLater;
export const getThemeType = (state: RootState) =>
    state.modalFavouritesAndWatchLaterAndSettingsReducer.themeType;
