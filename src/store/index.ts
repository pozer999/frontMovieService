import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from './FilmsSlice';
import { modalFavouritesAndWatchLaterAndSettingsReducer } from './modalFavouritesAndWatchLaterAndSettingsReducer';
import { modalAuthAndRegisterReducer } from './modalAuthAndRegisterReducer';

export const store = configureStore({
	reducer: {
		films: filmsReducer,
		modalAuthAndRegisterReducer: modalAuthAndRegisterReducer,
		modalFavouritesAndWatchLaterAndSettingsReducer: modalFavouritesAndWatchLaterAndSettingsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
