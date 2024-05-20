import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

const getAllAdvertsThunk = createAsyncThunk(
  "adverts/getAllAdverts",
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllAdverts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { getAllAdvertsThunk };
