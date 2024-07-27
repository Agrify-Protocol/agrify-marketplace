import { Transaction } from "@/components/ProjectPageComponents/Purchases/types";

export type ReceiptModalProps = {
  txDetail: Transaction | undefined;
  closeModal: () => void;
};
