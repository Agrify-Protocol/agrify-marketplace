import { toastFn } from "@/utils/toastFn";
import { invoiceInstance } from "../axios/instances";
import { InvoicePayloadType } from "./types";

export const createInvoice = async (data: InvoicePayloadType, toast: any) => {
  try {
    const request = await invoiceInstance.post("/create", data);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

export const getSingleInvoice = async (id: string, toast: any) => {
  try {
    const request = await invoiceInstance.get(`/${id}`);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};
