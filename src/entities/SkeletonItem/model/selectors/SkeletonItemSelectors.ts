import { RootState } from "store";

export const getVisibleCurrentFilm = (state: RootState) =>
    state.generalAuthAndRegisterReducer.isVisibleCurrentFilm;
