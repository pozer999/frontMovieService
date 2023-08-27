import { RootState } from "store";

export const getFilter = (state: any) => state.films.filter;
export const getFilms = (state: any) => state.films.films;
export const getIsLoading = (state: RootState) => state.films.isLoading;
export const getError = (state: RootState) => state.films.error;
