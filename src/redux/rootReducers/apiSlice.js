import { createSlice } from "@reduxjs/toolkit";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
};

const apiSlice = createSlice({
  name: "api",
  initialState: {
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addMatcher((action) => action.type.endsWith("pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        handleFulfilled
      );
  },
});

const apiReducer = apiSlice.reducer;
export default apiReducer;
