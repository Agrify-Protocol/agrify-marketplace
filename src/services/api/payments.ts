import { paymentInstance } from "../axios/instances";
import { PaymentPayload } from "./types";

export const payForCarbon = async (payload: PaymentPayload) => {
  try {
    const request = await paymentInstance.post("/create-card-payment", payload);
    return request.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
