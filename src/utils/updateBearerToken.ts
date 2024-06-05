import { AxiosInstance } from "axios";

export const updateBearerToken = (
  axiosInstace: AxiosInstance,
  accessToken: string
) => {
  axiosInstace.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
};
