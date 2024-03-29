import axios from "axios";
import { get, set } from "local-storage";

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL as string,
  timeout: Number(process.env.REACT_APP_API_TIMEOUT),
});

const jwtToken = process.env.REACT_APP_JWT_TOKEN as string;

request.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

request.interceptors.request.use(
  (config) => {
    const newConfig = config;
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      //add logic for refresh token handling
    }
    return Promise.reject(error);
  }
);
export default request;
