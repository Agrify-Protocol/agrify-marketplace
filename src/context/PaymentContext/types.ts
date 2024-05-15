import { Dispatch, ReactNode, SetStateAction } from "react";
import { InvoiceData } from "./classes";

export type PaymentContextType = {
  paymentStage: number;
  setPaymentStage: Dispatch<SetStateAction<number>>;
  invoiceData: InvoiceData;
  setInvoiceData: Dispatch<SetStateAction<InvoiceData>>;
};

export type PaymentContextProps = {
  children: ReactNode;
};
