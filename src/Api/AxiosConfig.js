import axios from "axios";

let baseURL = "https://gull-legible-sunbeam.ngrok-free.app";

export { baseURL };

const AxiosConfig = axios.create({
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
  },
});

AxiosConfig.interceptors.request.use(async (config) => {
  return config;
});

AxiosConfig.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return error.response;
  }
);

export default AxiosConfig;
