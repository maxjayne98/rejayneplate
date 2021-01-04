import request from "../../utils/request";

const api = {
  search: ({ query }) => {
    return request({
      url: `example/?q=${query}`,
      method: "GET",
    });
  },
};

export default api;
