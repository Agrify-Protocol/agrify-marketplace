import { InvoiceDataType } from "@/components/ProjectPageComponents/Purchases/types";
import { invoiceInstance } from "../axios/instances";

export type InvoicePayloadType = {
  clientName: string;
  paymentDueDate: Date;
  phoneNumber: string;
  projectId: string;
  quantity: number;
  amount: number;
  totalAmount: number;
  invoiceNo: string;
  address: string;
  contactNo: string;
  issuedOn: Date;
};

export const createInvoice = async (data: InvoicePayloadType) => {
  try {
    const request = await invoiceInstance.post("/create", data);
    return request.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
