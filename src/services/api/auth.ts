import { authInstance } from "../axios/instances";
import { LoginData, RegisterData, PasswordResetData } from "./types";

export const loginUser = async (data: LoginData) => {
  try {
    const request = await authInstance.post("/login", data);
    return request.data;
  } catch (error: any) {
    errorCreation(error);
  }
};

export const registerUser = async (data: RegisterData) => {
  try {
    const request = await authInstance.post("/register", data);
    return request.data;
  } catch (error: any) {
    errorCreation(error);
  }
};

export const getVerificationToken = async (data: { email: string }) => {
  try {
    const request = await authInstance.post("/requestResetPassword", data);
    return request.data;
  } catch (error) {
    errorCreation(error);
  }
};

export const resetPassword = async (data: PasswordResetData) => {
  try {
    const request = await authInstance.post("/resetPassword", data);
    return request.data;
  } catch (error) {
    errorCreation(error);
  }
};

export const refreshAccessToken = async (token: { refreshToken: string }) => {
  try {
    const request = await authInstance.post("/refreshToken", token);
    return request.data;
  } catch (error: any) {
    errorCreation(error);
  }
};

const errorCreation = (error: any) => {
  const errorMessage = error.response.data.error;
  throw new Error(errorMessage);
};
