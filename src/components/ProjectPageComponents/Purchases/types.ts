import { ReceiptModalProps } from "@/components/Layout/ReceiptModal/types";

export type TransactionModalType = {
  type: string;
  data: ReceiptType;
};

export type ReceiptType = Omit<ReceiptModalProps, "closeModal">;
