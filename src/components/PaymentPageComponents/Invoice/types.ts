import { InvoiceData } from "@/context/PaymentContext/classes";

export type InvoiceProps = {
  invoice_data: InvoiceData;
  order_total: number;
  isCompleted?: boolean;
};

export type InvoiceEndpointData = {
  clientName: string;
  paymentDueData: string;
  phoneNumber: string;
  projectId: string | undefined;
  quantity: number;
  amount: string;
  totalAmount: number;
  invoiceNo: string;
  address: string | undefined;
  contactNo: string;
  issuedOn: string;
};
