import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { FilmType, FoundFilmsArray } from '../../types.ts/types';

export type FilmArr = Array<FilmType>

type InitialState =  {
  filmArr: FilmArr,
  foundFilms: FoundFilmsArray,
  favorites:FilmArr
}

const initialState:InitialState = {
  filmArr: [],
  foundFilms: [],
  favorites:[]
};

const filmsSlice = createSlice({
  name:'films',
  initialState,
  reducers : {

    addFilmInArr(state, action:PayloadAction<FilmArr>) {
      state.filmArr = action.payload
    },
    addFilmFromSearchInArr(state, action:PayloadAction<FoundFilmsArray>) {
      state.foundFilms = action.payload
    },
    addFilmToFavorites(state:any, action:PayloadAction<FilmArr>) {
      state.favorites.push(action.payload)
    },
    removeFilmToFavorites(state:any, action:PayloadAction<FilmArr>) {
      state.favorites = state.favorites.filter((item:any) => item.id !== action.payload)
    },
  }
});

export const {addFilmInArr, addFilmFromSearchInArr, addFilmToFavorites, removeFilmToFavorites } = filmsSlice.actions;

export default filmsSlice.reducer;