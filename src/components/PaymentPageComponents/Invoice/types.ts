import { InvoiceData } from "@/context/PaymentContext/classes";

export type InvoiceProps = {
  invoice_data: InvoiceData;
  order_total: number;
  isCompleted?: boolean;
};
