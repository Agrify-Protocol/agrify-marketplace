"use client";
import { createContext, useContext, useState } from "react";
import { PaymentContextProps, PaymentContextType } from "./types";
import { InvoiceData } from "./classes";
import { parseDate } from "@/utils/parseData";

const PaymentContext = createContext({} as PaymentContextType);

export const PaymentContextProvider = ({ children }: PaymentContextProps) => {
  const [paymentStage, setPaymentStage] = useState(1);
  const [invoiceData, setInvoiceData] = useState(
    new InvoiceData("", "", parseDate(new Date()))
  );

  return (
    <PaymentContext.Provider
      value={{ paymentStage, setPaymentStage, invoiceData, setInvoiceData }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => {
  return useContext(PaymentContext);
};
