import { toastFn } from "@/utils/toastFn";
import { paymentInstance } from "../axios/instances";
import { PaymentPayload } from "./types";

export const payForCarbon = async (payload: PaymentPayload, toast: any) => {
  try {
    const request = await paymentInstance.post("/create-card-payment", payload);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};
