import advertsReducer from './adverts/advertsSlice';
import apiReducer from './rootReducers/apiSlice';
import filtersReducer from './filters/filterSlice';
import favoritesReducer from './favorites/favoritesSlice';

const rootReducer = {
  adverts: advertsReducer,
  api: apiReducer,
  filters: filtersReducer,
  favorites: favoritesReducer,
};

export default rootReducer;
