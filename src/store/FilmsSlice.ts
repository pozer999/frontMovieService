import { createSlice } from '@reduxjs/toolkit';

const FilmsSlice = createSlice({
  name: 'films',
  initialState: 'by date',
  reducers: {
    sortedFilms(state, action){
        // state.films.push({
        //   selectValue
        // })
        // state.value = action.payload
        // state.value += 1;
    },
    searchFilms(state,action){
        
    }
  }
})

// console.log(FilmsSlice);


export const {sortedFilms, searchFilms} = FilmsSlice.actions;
export default FilmsSlice.reducer