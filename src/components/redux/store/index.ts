import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from '../reducer/filmsSlice';

export const store = configureStore({
  reducer: {
    films: filmsReducer
  },
})