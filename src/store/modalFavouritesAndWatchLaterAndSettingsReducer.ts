import { createAction, createReducer } from "@reduxjs/toolkit";

interface IinitialState {
    isVisibleFavourites: boolean;
    isVisibleWatchLater: boolean;
    isVisibleSettings: boolean;
}

export const openModalFavourites = createAction("modal/openModalFavourites");
export const closeModalFavourites = createAction("modal/closeModalFavourites");

export const openModalWatchLater = createAction("modal/openModalWatchLater");
export const closeModalWatchLater = createAction("modal/closeModalWatchLater");

export const openModalSettings = createAction("modal/openModalSettings");
export const closeModalSettings = createAction("modal/closeModalSettings");

const initialState: IinitialState = {
    isVisibleFavourites: false,
    isVisibleSettings: false,
    isVisibleWatchLater: false,
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
            .addCase(openModalSettings, (state) => {
                state.isVisibleSettings = true;
            })
            .addCase(closeModalSettings, (state) => {
                state.isVisibleSettings = false;
            });
    }
);
