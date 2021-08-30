import request from "../../utils/request";

const api = {
  restaurant: (index: number, numberOfItems: number) => {
    return request({
      url: `restaurant?pageNumber=${index}&numberOfItems=${numberOfItems}`,
      method: "GET",
    });
  },
};

export default api;
