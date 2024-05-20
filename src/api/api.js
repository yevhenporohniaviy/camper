import { instance } from "./instance";

class Api {
  async getAllAdverts() {
    const { data } = await instance.get("/");
    return data;
  }
}

const api = new Api();
export default api;
