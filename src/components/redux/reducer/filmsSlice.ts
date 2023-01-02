import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { FilmArr, FoundFilms } from '../../types.ts/types';

type InitialState =  {
  filmsArr: any,
  filmArr: FilmArr,
  foundFilms: FoundFilmsArray,
  favorites:any
}

type FoundFilmsArray = Array<FoundFilms>

const initialState:InitialState = {
  filmsArr: [],
  filmArr: [],
  foundFilms: [],
  favorites:[]
};

const filmsSlice = createSlice({
  name:'films',
  initialState,
  reducers : {
    addFilmsInArr(state, action) {
      state.filmsArr = action.payload
    },
    addFilmInArr(state, action:PayloadAction<FilmArr>) {
      state.filmArr = action.payload
    },
    addFilmFromSearchInArr(state, action:PayloadAction<FoundFilmsArray>) {
      state.foundFilms = action.payload
    },
    addFilmToFavorites(state:any, action:any) {
      state.favorites.push(action.payload)
    },
    removeFilmToFavorites(state:any, action:any) {
      state.favorites = state.favorites.filter((item:any) => item.id !== action.payload)
    },
  }
});

export const { addFilmsInArr, addFilmInArr, addFilmFromSearchInArr, addFilmToFavorites, removeFilmToFavorites } = filmsSlice.actions;

export default filmsSlice.reducer;