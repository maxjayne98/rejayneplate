import request from "../../utils/request";

const api = {
  user: () => {
    return request({
      url: "user",
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJMb2dobWUiLCJpYXQiOjE2MzAzMzQ1MjYsInN1YiI6IkF1dGhlbnRpY2F0aW9uIiwiZXhwIjoxNjMwNDIwOTI2LCJFbWFpbCI6Im0xLmpheEBnbWFpbC5jb20ifQ.ZIL5PkThXpQo0Rx3-cqCt2OAzfAGRkOFr6wQhNZOnrY",
      },
    });
  },
};

export default api;
