import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  filmsArr: [],
  filmArr: [],
  foundFilms: []
};

const filmsSlice = createSlice({
  name:'films',
  initialState,
  reducers : {
    addFilmsInArr(state, action) {
      state.filmsArr = action.payload
    },
    addFilmInArr(state, action) {
      state.filmArr = action.payload
    },
    addFilmFromSearchInArr(state, action) {
      state.filmArr = action.payload
    },
  }
});

export const { addFilmsInArr, addFilmInArr, addFilmFromSearchInArr } = filmsSlice.actions;

export default filmsSlice.reducer;