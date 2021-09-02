import request from "../../utils/request";
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJMb2dobWUiLCJpYXQiOjE2MzAzMzQ1MjYsInN1YiI6IkF1dGhlbnRpY2F0aW9uIiwiZXhwIjoxNjMwNDIwOTI2LCJFbWFpbCI6Im0xLmpheEBnbWFpbC5jb20ifQ.ZIL5PkThXpQo0Rx3-cqCt2OAzfAGRkOFr6wQhNZOnrY",
};
const api = {
  fetchFoodPartyFoods: () => {
    return request({
      url: "/foodParty",
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJMb2dobWUiLCJpYXQiOjE2MzAzMzQ1MjYsInN1YiI6IkF1dGhlbnRpY2F0aW9uIiwiZXhwIjoxNjMwNDIwOTI2LCJFbWFpbCI6Im0xLmpheEBnbWFpbC5jb20ifQ.ZIL5PkThXpQo0Rx3-cqCt2OAzfAGRkOFr6wQhNZOnrY",
      },
    });
  },
  fetchFoodPartyEndTime: () => {
    return request({
      url: "/foodParty/time",
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJMb2dobWUiLCJpYXQiOjE2MzAzMzQ1MjYsInN1YiI6IkF1dGhlbnRpY2F0aW9uIiwiZXhwIjoxNjMwNDIwOTI2LCJFbWFpbCI6Im0xLmpheEBnbWFpbC5jb20ifQ.ZIL5PkThXpQo0Rx3-cqCt2OAzfAGRkOFr6wQhNZOnrY",
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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJMb2dobWUiLCJpYXQiOjE2MzAzMzQ1MjYsInN1YiI6IkF1dGhlbnRpY2F0aW9uIiwiZXhwIjoxNjMwNDIwOTI2LCJFbWFpbCI6Im0xLmpheEBnbWFpbC5jb20ifQ.ZIL5PkThXpQo0Rx3-cqCt2OAzfAGRkOFr6wQhNZOnrY",
      },
    });
  },
};

export default api;
