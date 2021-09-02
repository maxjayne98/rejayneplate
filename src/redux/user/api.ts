import request from "../../utils/request";
const jwtToken = process.env.REACT_APP_JWT_TOKEN as string;

const api = {
  user: () => {
    return request({
      url: "user",
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  },
};

export default api;
