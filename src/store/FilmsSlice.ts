import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
export const fetchFilms = createAsyncThunk<Array<any>, string>(
    "films/fetchFilms",
    async (filters, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        console.log("async");
        try {
            const response = await axios.get(`/movies`);

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
                state.films = action.payload;
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: filmsActions } = filmsSlice;
export const { reducer: filmsReducer } = filmsSlice;
