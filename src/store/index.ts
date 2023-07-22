import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from './FilmsSlice';
import { modalReducer } from './modalReducer';

export const store = configureStore({
	reducer: {
		films: filmsReducer,
		modal: modalReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
