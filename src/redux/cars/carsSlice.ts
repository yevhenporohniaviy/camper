import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { getAllCars } from "./carsThunk";
import { Car, CarsState } from "../../types/types";

const carsInitialState: CarsState = {
  items: [],
  favorites: [],
  filter: null,
  isLoading: false,
  error: null,
};

const status = {
  pending: "pending" as const,
  fulfilled: "fulfilled" as const,
  rejected: "rejected" as const,
};

const fn = (status: keyof typeof status) => getAllCars.map((el) => el[status]);

const handlePending = (state: CarsState) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state: CarsState, { payload }: { payload: Car[] }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleRejected = (state: CarsState, { payload }: { payload: string }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {
    setToFavorites: (state, { payload }: { payload: { id: number } }) => {
      const carToAdd = state.items.find((car) => car.id === payload.id);
      if (carToAdd) {
        state.favorites.push(carToAdd);
      }
    },
    removeFromFavorites: (state, { payload }: { payload: { id: number } }) => {
      const indexToRemove = state.favorites.findIndex(
        (car) => car.id === payload.id
      );
      if (indexToRemove !== -1) {
        state.favorites.splice(indexToRemove, 1);
      }
    },
    setFilter: (state, { payload }: { payload: string | null }) => {
      state.filter = payload;
    },
    resetFilter: (state) => {
      state.filter = null;
    },
  },
  extraReducers: (builder) => {
    const { pending, rejected } = status;

    builder
      .addCase(getAllCars.fulfilled, handleFulfilled)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  },
});

export const { setToFavorites, removeFromFavorites, setFilter, resetFilter } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
