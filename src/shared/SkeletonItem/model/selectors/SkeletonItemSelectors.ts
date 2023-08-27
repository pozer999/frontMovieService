import { RootState } from "store";

export const getVisibleCurrentFilm = (state: RootState) =>
    state.modalAuthAndRegisterReducer.isVisibleCurrentFilm;
