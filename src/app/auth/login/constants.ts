import { ToastData } from "@/utils/classes";

export const errorToast = new ToastData(
  "Invalid credentials!",
  "Incorrect username or password",
  "error"
);

export const successToast = new ToastData(
  "Successful!",
  "You have logged in successfully.",
  "success"
);
