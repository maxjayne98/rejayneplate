import request from "../../utils/request";
const jwtToken = process.env.REACT_APP_JWT_TOKEN as string;
const api = {
  fetchCart: () => {
    return request({
      url: "user/cart",
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  },
  addFoodToCart: (
    restaurantId: string,
    foodName: string,
    foodCount: number
  ) => {
    return request({
      url: `/user/cart?foodName=${foodName}&restaurantId=${restaurantId}&foodCount=${foodCount}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  },
  deleteFromCart: (foodName: string) => {
    return request({
      url: `/user/cart?foodName=${foodName}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  },
  submitNormalOrder: () => {
    return request({
      url: `/order/normal`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  },
};

export default api;
