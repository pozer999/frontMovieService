import { createAction, createReducer } from "@reduxjs/toolkit";

interface IinitialState {
    isVisibleFavourites: boolean;
    isVisibleWatchLater: boolean;
    themeType: "dark" | "light";
}

export const openModalFavourites = createAction("modal/openModalFavourites");
export const closeModalFavourites = createAction("modal/closeModalFavourites");

export const openModalWatchLater = createAction("modal/openModalWatchLater");
export const closeModalWatchLater = createAction("modal/closeModalWatchLater");

export const changeTheme = createAction("modal/changeTheme");


const initialState: IinitialState = {
    isVisibleFavourites: false,
    isVisibleWatchLater: false,
    themeType: "dark",
};

export const modalFavouritesAndWatchLaterAndSettingsReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(openModalFavourites, (state) => {
                state.isVisibleFavourites = true;
            })
            .addCase(closeModalFavourites, (state) => {
                state.isVisibleFavourites = false;
            })

            .addCase(openModalWatchLater, (state) => {
                state.isVisibleWatchLater = true;
            })
            .addCase(closeModalWatchLater, (state) => {
                state.isVisibleWatchLater = false;
            })
            .addCase(changeTheme, (state) => {
                state.themeType = state.themeType === "dark" ? "light" : "dark";
            })
    }
);
