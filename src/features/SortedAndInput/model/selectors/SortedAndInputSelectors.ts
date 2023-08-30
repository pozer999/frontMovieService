import { RootState } from "store";

export const getCurrentFilter = (state: any) => state.films.filters;
export const getValueInputSearch = (state: any) => state.fetchValueInputSearchReducer.valueInputSearch;