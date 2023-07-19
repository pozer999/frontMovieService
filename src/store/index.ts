import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from './FilmsSlice';

export const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
