import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  equipment: [],
  type: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilters(state, { payload }) {
      return payload;
    },
  },
});

const filtersReducer = filtersSlice.reducer;
export default filtersReducer;

const { changeFilters: changeFiltersAction } = filtersSlice.actions;
export { changeFiltersAction };
