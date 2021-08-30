import request from "../../utils/request";

const api = {
  restaurant: (index: string) => {
    return request({
      url: `restaurant/${index}`,
      method: "GET",
    });
  },
};

export default api;
