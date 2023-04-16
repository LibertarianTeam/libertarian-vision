import axios from "axios";

export type LVResponseType<Response> = {
  data: Response;
};

const axiosInstance = axios.create({
  baseURL: "https://api-ancapsu.herokuapp.com",
  timeout: 20000,
});

axiosInstance.defaults.headers = { "Content-Type": "application/json" } as any;

export default axiosInstance;
