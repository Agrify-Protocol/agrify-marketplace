import { toastFn } from "@/utils/toastFn";
import { authInstance } from "../axios/instances";
import { LoginData, RegisterData, PasswordResetData } from "./types";

export const loginUser = async (data: LoginData, toast: any) => {
  try {
    const request = await authInstance.post("/login", data);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

export const registerUser = async (data: RegisterData, toast: any) => {
  try {
    const request = await authInstance.post("/register", data);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

export const getVerificationToken = async (
  data: { email: string },
  toast: any
) => {
  try {
    const request = await authInstance.post("/requestResetPassword", data);
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};

export const resetPassword = async (data: PasswordResetData, toast: any) => {
  try {
    const request = await authInstance.post("/resetPassword", data);
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};

export const refreshAccessToken = async (
  token: { refreshToken: string },
  toast: any
) => {
  try {
    const request = await authInstance.post("/refreshToken", token);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

export const uploadKyc = async (
  details: Record<string, unknown>,
  toast: any
) => {
  try {
    const request = await authInstance.post("/kyc", details, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};
