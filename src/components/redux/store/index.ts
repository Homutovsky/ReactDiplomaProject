import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from '../reducer/filmsSlice';

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const store = configureStore({
  reducer: {
    films: filmsReducer
  },
})