"use client";

import { createContext, useContext } from "react";
import { GlobalContextProps, GlobalContextType } from "./types";

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
