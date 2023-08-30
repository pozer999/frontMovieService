
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Filters } from "shared/const/filters";
import { fetchFilms } from "./FilmsSlice";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface IinputSearch {
    valueInputSearch: string | undefined;
    selectedValueSelect: Filters;
}

const initialState: IinputSearch = {
    valueInputSearch: "",
    selectedValueSelect: Filters.By_date,
};

const selectAndInputReducer = createSlice({
    name: "selectAndInputReducer",
    initialState,
    reducers: {
        onChangeSearch(state, action) {
            state.valueInputSearch = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOnChangeSearch.fulfilled, (state, action) => {
            state.valueInputSearch = action.payload;
        });
    },
});

export const fetchOnChangeSearch = createAsyncThunk(
    "onChangeSearch/onChangeSearch",
    async (valueInput: string, thunkApi) => {
        const rejectWithValue = { thunkApi };
        const inputValue = useSelector((state: RootState) => state.fetchValueInputSearchReducer.valueInputSearch)
        console.log("valueInput onChangeSearch:", valueInput);
        
        try {
            // fetchFilms(valueInput)
            // const response = await $api.get
        } catch (e) {
            console.log(e);
        }
        return valueInput;
    }
);

export const { actions: fetchValueInputSearchActions } = selectAndInputReducer;
export const { reducer: fetchValueInputSearchReducer } = selectAndInputReducer;
