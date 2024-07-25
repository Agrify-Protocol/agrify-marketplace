import { InvoiceData } from "@/components/PaymentPageComponents/Invoice/types";
import { TransactionModalType } from "@/components/ProjectPageComponents/Purchases/types";

export type InvoiceModalProps = {
  txDetail: TransactionModalType | null;
  closeModal: () => void;
};
