import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "@/config";

const headers = { "Content-Type": "application/json" };

const createInstance = (path = ""): AxiosInstance => {
  const instance = axios.create({
    baseURL: path ? `${BASE_URL}${path}` : BASE_URL,
    headers,
  });

  instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      if (response.data?.error) {
        throw new Error(response.data.error);
      }
      return response;
    },
    (error) => {
      const message =
        error?.response?.data?.message ??
        error?.response?.data?.error ??
        error?.message ??
        "Something went wrong";
      return Promise.reject(new Error(message));
    }
  );

  return instance;
};

export default createInstance;
