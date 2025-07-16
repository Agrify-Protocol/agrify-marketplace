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

  return instance;
};

export default createInstance;
