import request from "../../utils/request";
const jwtToken = process.env.REACT_APP_JWT_TOKEN as string;

const api = {
  fetchFoodPartyFoods: () => {
    return request({
      url: "/foodParty",
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  },
  fetchFoodPartyEndTime: () => {
    return request({
      url: "/foodParty/time",
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  },
  submitFoodPartyOrder: (
    foodName: string,
    restaurantId: string,
    foodCount: number,
    foodPrice: number
  ) => {
    return request({
      url: `/order/foodParty?foodName=${foodName}&restaurantId=${restaurantId}&price=${foodPrice}&number=${foodCount}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  },
};

export default api;
