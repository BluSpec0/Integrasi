/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

export default {
  async getList() {
    const response = await axios.get(BASE_URL + "/books", {
      params: {
        page: 1,
        pageSize: 10,
        orderBy: "created_at",
        orderType: "desc",
      },
    });
    const data = await response.data.data;

    return data;
  },
};
