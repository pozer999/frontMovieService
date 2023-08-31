import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IFilms } from "models/IFilms";
import $api from "shared/config/http";
import { Filters } from "shared/const/filters";

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
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.isLoading = false;
                state.films = action.payload;
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

interface Idata {
    valueInputSearch: string;
    currentFilter: any;
}
// createAsyncThunk надо нормально типизировать а не использовать any
export const fetchFilms = createAsyncThunk(
    "films/fetchFilms",
    async (data: Idata, thunkApi) => {
        // const valueInputSearch = useSelector((state: RootState) => state.films.valueInputSearch)
        const { valueInputSearch, currentFilter } = data;
        console.log("fetchFilms->currentFilter: ", currentFilter);
        console.log("fetchFilms->valueInputSearch: ", valueInputSearch);

        const { rejectWithValue } = thunkApi;
        try {
            let response = null;
            switch (currentFilter) {
                case "By date":
                    response = await $api.get<IFilms[]>(
                        "/movies?sortType=by date"
                    );
                    console.log("ушел запрос по дате");

                    break;
                case "By alphabet":
                    response = await $api.get<IFilms[]>(
                        "/movies?sortType=by alphabet"
                    );
                    console.log("ушел запрос по алфавиту");
                    break;
                case "By rating":
                    response = await $api.get<IFilms[]>(
                        "/movies?sortType=by rating"
                    );
                    console.log("ушел запрос по рейтингу");
                    break;
                default:
                    response = await $api.get<IFilms[]>(
                        "/movies?sortType=by date"
                    );
                    console.log("ушел запрос по дате");
                    break;
            }

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
