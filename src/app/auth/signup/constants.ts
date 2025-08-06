import { ToastData } from "@/utils/classes";
import { UseToastOptions } from "@chakra-ui/react";

export const successToast: UseToastOptions = new ToastData(
  "Successful!",
  "Your account has been created successfully!",
  "success"
);

export const passwordToast: UseToastOptions = new ToastData(
  "Something went wrong!",
  "Passwords do not match. Re-type password.",
  "warning"
);
