import { authInstance } from "../axios/authInstance";

export const loginUser = async (data: {}) => {
  try {
    const request = await authInstance.post("/login", data);
    return request.data;
  } catch (error: any) {
    const errorMessage = error.response.data.error;
    throw new Error(errorMessage);
  }
};
