import { RootState } from "store";

export const getThemeType = (state: RootState) =>
    state.modalFavouritesAndWatchLaterAndSettingsReducer.themeType;
