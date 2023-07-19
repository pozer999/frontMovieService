import { createSlice } from '@reduxjs/toolkit';

const newFilms = ["newFilm", "newFilm", "newFilm"];

const SortedSlice = createSlice({
  name: 'sorted',
  initialState: {
    films: ["film", "film"],
  },
  reducers: {
      selected: (state, action) => {
        console.log("action: ", action);
        
        return {...state, films: newFilms}
      },    
  }
  
})


console.log("SortedSlice: ", SortedSlice);



export const {selected} = SortedSlice.actions;
export default SortedSlice.reducer