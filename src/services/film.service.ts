/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const BASE_URL = "http://localhost:8080";

export default {
  async getList() {
    const response = await axios.get(BASE_URL + "/films", {
      params: {
        page: 1,
        pageSize: 10,
        orderBy: "created_at",
        orderType: "asc",
      },
    });
    const data = await response.data.data;

    return data;
  },

  async getDetail(id: string) {
    const response = await axios.get(BASE_URL + "/films/" + id);
    const data = await response.data.data;

    return data;
  },
};
