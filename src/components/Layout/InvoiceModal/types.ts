import { InvoiceData } from "@/components/PaymentPageComponents/Invoice/types";

export type InvoiceModalProps = {
  invoice_data: InvoiceData;
  closeModal: () => void;
};
