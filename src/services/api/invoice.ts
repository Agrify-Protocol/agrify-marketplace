import { invoiceInstance } from "../axios/instances";
import { InvoicePayloadType } from "./types";


export const createInvoice = async (data: InvoicePayloadType) => {
  try {
    const request = await invoiceInstance.post("/create", data);
    return request.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const getSingleInvoice = async (id: string) => {
  try {
    const request = await invoiceInstance.get(`/${id}`);
    return request.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
