import { ReceiptModalProps } from "@/components/Common/ReceiptModal/types";

export type TransactionModalType = {
  type: string;
  txID: string;
};

export type Transaction = {
  _id: string;
  purchaseType: string;
  status: string;
  tonnes: number;
  projectId: string;
  invoiceId: string;
  userId: string;
  paymentReference: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number;
  __v: number;
};

export type ReceiptType = Omit<ReceiptModalProps, "closeModal">;
export type InvoiceDataType = {
  amount: number;
  client_name: string;
  number: string;
  due_date: string;
  tonnes: number;
};
