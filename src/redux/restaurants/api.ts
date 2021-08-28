import request from "../../utils/request";

const api = {
  restaurants: (index: number, numberOfItems: number) => {
    return request({
      url: `restaurants?pageNumber=${index}&numberOfItems=${numberOfItems}`,
      method: "GET",
    });
  },
};

export default api;
