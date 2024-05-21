import { InvoiceData } from "@/context/PaymentContext/classes";

export type InvoiceModalProps = {
  invoice_data: InvoiceData;
  order_total: number;
  tonnes: number;
  closeModal: () => void;
};
