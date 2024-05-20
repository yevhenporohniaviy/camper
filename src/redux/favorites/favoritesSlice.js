import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('favorites')) ?? [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.push(payload);
      localStorage.setItem('favorites', JSON.stringify(state));
    },
    removeFromFavorites(state, { payload }) {
      const index = state.indexOf(payload);
      if (index > -1) state.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(state));
    },
  },
});

const favoritesReducer = favoritesSlice.reducer;
export default favoritesReducer;

const {
  addToFavorites: addToFavoritesAction,
  removeFromFavorites: removeFromFavoritesAction,
} = favoritesSlice.actions;
export { addToFavoritesAction, removeFromFavoritesAction };
