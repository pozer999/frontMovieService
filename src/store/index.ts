import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from './FilmsSlice';
import { modalFavouritesAndWatchLaterAndSettingsReducer } from './modalFavouritesAndWatchLaterAndSettingsReducer';
import { AuthReducer } from './modalAuthAndRegisterReducer';

export const store = configureStore({
	reducer: {
		films: filmsReducer,
		modalAuthAndRegisterReducer: AuthReducer,
		modalFavouritesAndWatchLaterAndSettingsReducer: modalFavouritesAndWatchLaterAndSettingsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
