import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IFilms } from "models/IFilms";
import { useSelector } from "react-redux";
import $api from "shared/config/http";
import { RootState } from "store";

interface filmsStateSchema {
    films: Array<any>;
    filter: string | null;
    isLoading: boolean;
    error: string | undefined;
}
const initialState: filmsStateSchema = {
    films: [],
    filter: null,
    isLoading: false,
    error: undefined,
};

// createAsyncThunk надо нормально типизировать а не использовать any
export const fetchFilms = createAsyncThunk(
    "films/fetchFilms",
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        const valueInputSearch = useSelector((state: RootState) => state.fetchValueInputSearchReducer.valueInputSearch)
        console.log("отработал фетч филмс");
        try {
            const response = await $api.get<IFilms[]>('/movies', {params: {
                valueInputSearch
            }});

            console.log("отработал фетч филмс");
            

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

const filmsSlice = createSlice({
    name: "films",
    initialState: initialState,
    reducers: {
        changeFilters(state, action: PayloadAction<string>) {
            state.filter = action.payload;
            console.log(state.filter);
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
                // state.films = action.payload;
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: filmsActions } = filmsSlice;
export const { reducer: filmsReducer } = filmsSlice;
