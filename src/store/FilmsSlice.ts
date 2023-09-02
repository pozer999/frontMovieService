import { getValueInputSearch } from "./../features/SortedAndInput/model/selectors/SortedAndInputSelectors";
import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilms } from "models/IFilms";
import $api from "shared/config/http";
import { Filters } from "shared/const/filters";
import { RootState } from "store";

interface filmsStateSchema {
    films: Array<any>;
    isLoading: boolean;
    error: string | undefined;
    valueInputSearch: string | undefined;
    selectedValueSelect: Filters | string;
}
const initialState: filmsStateSchema = {
    films: [],
    isLoading: false,
    error: undefined,
    valueInputSearch: "",
    selectedValueSelect: Filters.By_date,
};

const filmsSlice = createSlice({
    name: "films",
    initialState: initialState,
    reducers: {
        changeFilters(state, action: PayloadAction<string>) {
            state.selectedValueSelect = action.payload;
            console.log(state.selectedValueSelect);
        },
        onChangeSearch(state, action: PayloadAction<string>) {
            state.valueInputSearch = action.payload;
            console.log(state.valueInputSearch);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchFilms.fulfilled,
                (state, action: PayloadAction<Array<any>>) => {
                    state.isLoading = false;
                    state.films = action.payload;
                }
            )
            .addCase(fetchFilms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});


// createAsyncThunk надо нормально типизировать а не использовать any
export const fetchFilms = createAsyncThunk(
    "films/fetchFilms",
    async (_, thunkApi) => {
        const { getState } = thunkApi;
        const state: any = getState() as RootState;
        const currentFilter = state.films.selectedValueSelect;
        const valueInputSearch = state.films.valueInputSearch;
        console.log("fetchFilms->currentFilter: ", currentFilter);
        console.log("fetchFilms->valueInputSearch: ", valueInputSearch);

        const { rejectWithValue } = thunkApi;
        try {
            const response = await $api.get<IFilms[]>(
                `/movies?sortType=${currentFilter.toLowerCase()}&search=${valueInputSearch}`
            );
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    }
);

export const { actions: filmsActions } = filmsSlice;
export const { reducer: filmsReducer } = filmsSlice;
