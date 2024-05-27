import { authInstance } from "../axios/authInstance";

type LoginData = { email: string; password: string };
export const loginUser = async (data: LoginData) => {
  try {
    const request = await authInstance.post("/login", data);
    return request.data;
  } catch (error: any) {
    const errorMessage = error.response.data.error;
    throw new Error(errorMessage);
  }
};

type RegisterData = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password_2: string;
};
export const registerUser = async (data: RegisterData) => {
  try {
    const request = await authInstance.post("/register", data);
    return request.data;
  } catch (error: any) {
    const errorMessage = error.response.data.error;
    throw new Error(errorMessage);
  }
};
