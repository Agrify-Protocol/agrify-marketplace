import { InvoiceDataType } from "@/components/ProjectPageComponents/Purchases/types";
import { invoiceInstance } from "../axios/instances";

export const createInvoice = async (data: InvoiceDataType) => {
  try {
    const request = await invoiceInstance.post("/create", data);
    return request.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
