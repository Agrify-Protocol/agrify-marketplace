import { ReceiptModalProps } from "@/components/Layout/ReceiptModal/types";
import { InvoiceProps } from "@/components/PaymentPageComponents/Invoice/types";

export type TransactionModalType = {
  type: string;
  data: ReceiptType | InvoiceProps;
};

export type ReceiptType = Omit<ReceiptModalProps, "closeModal">;
