"use client";

import React, { createContext, useContext, useState } from "react";
import { GlobalContextProps, GlobalContextType } from "./types";
import { useToast } from "@chakra-ui/react";

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [chosenProject, setChosenProject] = useState<any>(null);
  const [pendingSourcingForm, setPendingSourcingForm] = useState<Record<
    string,
    any
  > | null>(null);
  const toast = useToast();

  return (
    <GlobalContext.Provider
      value={{
        chosenProject,
        setChosenProject,
        toast,
        pendingSourcingForm,
        setPendingSourcingForm,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
