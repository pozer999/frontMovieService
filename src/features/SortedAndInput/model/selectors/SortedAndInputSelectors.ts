import { RootState } from "store";

export const getCurrentFilter = (state: any) => state.films.selectedValueSelect;
export const getValueInputSearch = (state: any) => state.films.valueInputSearch;
