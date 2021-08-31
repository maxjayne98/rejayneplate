import request from "../../utils/request";
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJMb2dobWUiLCJpYXQiOjE2MzAzMzQ1MjYsInN1YiI6IkF1dGhlbnRpY2F0aW9uIiwiZXhwIjoxNjMwNDIwOTI2LCJFbWFpbCI6Im0xLmpheEBnbWFpbC5jb20ifQ.ZIL5PkThXpQo0Rx3-cqCt2OAzfAGRkOFr6wQhNZOnrY",
};
const api = {
  fetchCart: () => {
    return request({
      url: "user/cart",
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJMb2dobWUiLCJpYXQiOjE2MzAzMzQ1MjYsInN1YiI6IkF1dGhlbnRpY2F0aW9uIiwiZXhwIjoxNjMwNDIwOTI2LCJFbWFpbCI6Im0xLmpheEBnbWFpbC5jb20ifQ.ZIL5PkThXpQo0Rx3-cqCt2OAzfAGRkOFr6wQhNZOnrY",
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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJMb2dobWUiLCJpYXQiOjE2MzAzMzQ1MjYsInN1YiI6IkF1dGhlbnRpY2F0aW9uIiwiZXhwIjoxNjMwNDIwOTI2LCJFbWFpbCI6Im0xLmpheEBnbWFpbC5jb20ifQ.ZIL5PkThXpQo0Rx3-cqCt2OAzfAGRkOFr6wQhNZOnrY",
      },
    });
  },
  deleteFromCart: (foodName: string) => {
    return request({
      url: `/user/cart?foodName=${foodName}`,
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJMb2dobWUiLCJpYXQiOjE2MzAzMzQ1MjYsInN1YiI6IkF1dGhlbnRpY2F0aW9uIiwiZXhwIjoxNjMwNDIwOTI2LCJFbWFpbCI6Im0xLmpheEBnbWFpbC5jb20ifQ.ZIL5PkThXpQo0Rx3-cqCt2OAzfAGRkOFr6wQhNZOnrY",
      },
    });
  },
};

export default api;
