"use client";

import { createContext, useContext, useState } from "react";
import { GlobalContextProps, GlobalContextType } from "./types";
import { carbonPrice, vat } from "@/constants";

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [orderedAmount, setOrderedAmount] = useState(1000);
  const orderTotal = orderedAmount * carbonPrice + vat;
  const subTotal = (orderedAmount * carbonPrice).toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <GlobalContext.Provider
      value={{ orderedAmount, setOrderedAmount, orderTotal, subTotal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
