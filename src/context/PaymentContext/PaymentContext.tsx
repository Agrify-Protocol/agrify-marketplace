"use client";

import { createContext, useContext, useState } from "react";
import { PaymentContextProps, PaymentContextType } from "./types";
import { InvoiceData } from "./classes";

const PaymentContext = createContext({} as PaymentContextType);

export const PaymentContextProvider = ({ children }: PaymentContextProps) => {
  const [paymentStage, setPaymentStage] = useState(1);
  const [invoiceData, setInvoiceData] = useState(new InvoiceData("", "", ""));

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
