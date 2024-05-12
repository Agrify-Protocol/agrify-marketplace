"use client";

import { createContext, useContext, useState } from "react";
import { GlobalContextProps, GlobalContextType } from "./types";

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [orderedAmount, setOrderedAmount] = useState(1000);

  return (
    <GlobalContext.Provider value={{ orderedAmount, setOrderedAmount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
