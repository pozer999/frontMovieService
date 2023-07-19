import { configureStore } from "@reduxjs/toolkit";
import FilmsReducer from './FilmsSlice';
import SortedSlice from "./SortedSlice";

export default configureStore({
  reducer: {
    films: FilmsReducer,
    sorted: SortedSlice,
  }
});

