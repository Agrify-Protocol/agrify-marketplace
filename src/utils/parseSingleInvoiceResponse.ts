import { SingleInvoiceResponse } from "@/services/api/types";
import { readableDate } from "./parseData";
import { InvoiceData } from "@/components/PaymentPageComponents/Invoice/types";

export const parseSingleInvoiceResponse = (data: SingleInvoiceResponse) => {
  return {
    clientName: data.clientName,
    paymentDueDate: readableDate(data.paymentDueDate.toString()),
    phoneNumber: data.phoneNumber,
    projectId: data.projectId._id,
    projectName: data.projectId.title,
    quantity: data.quantity,
    amount: data.amount,
    totalAmount: data.amount,
    invoiceNo: data.invoiceNo,
    address: data.address,
    contactNo: data.contactNo,
    issuedOn: readableDate(data.issuedOn.toString()),
  } as unknown as InvoiceData;
};
