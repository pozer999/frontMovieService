import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from './FilmsSlice';
import { OpenModalSlice } from './OpenModalSlice';

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    openModal: OpenModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
