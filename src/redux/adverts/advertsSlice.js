import { createSlice } from "@reduxjs/toolkit";
import { getAllAdvertsThunk } from "./thunks";

const initialState = [];

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(getAllAdvertsThunk.fulfilled, (state, { payload }) => {
      return payload;
    }),
});

const advertsReducer = advertsSlice.reducer;
export default advertsReducer;
