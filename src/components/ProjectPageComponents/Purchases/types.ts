import { ReceiptModalProps } from "@/components/Layout/ReceiptModal/types";

export type TransactionModalType = {
  type: string;
  data: ReceiptType | InvoiceDataType;
};

export type ReceiptType = Omit<ReceiptModalProps, "closeModal">;
export type InvoiceDataType = {
  amount: number;
  client_name: string;
  number: string;
  due_date: string;
  tonnes: number;
};
