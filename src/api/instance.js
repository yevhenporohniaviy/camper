import axios from "axios";

export const instance = axios.create({
  baseURL: "https://664470ac6c6a6565870a6d16.mockapi.io/cars",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
