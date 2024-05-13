"use client";

import { createContext, useContext, useState } from "react";
import { PaymentContextProps, PaymentContextType } from "./types";

const PaymentContext = createContext({} as PaymentContextType);

export const PaymentContextProvider = ({ children }: PaymentContextProps) => {
  const [paymentStage, setPaymentStage] = useState(1);
  return (
    <PaymentContext.Provider value={{ paymentStage, setPaymentStage }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => {
  return useContext(PaymentContext);
};
