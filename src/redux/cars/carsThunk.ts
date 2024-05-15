import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllAdverts } from "../../api/index";

import { Car } from "../../types/types";

export const getAllCars = createAsyncThunk<
  Car[],
  void,
  { rejectValue: string }
>("adverts/getAll", async (_, { rejectWithValue }) => {
  try {
    const data = await getAllAdverts();
    return data;
  } catch ({ response }) {
    return rejectWithValue(response.data);
  }
});
