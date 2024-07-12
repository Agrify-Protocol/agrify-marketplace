"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  AllProjectsResponse,
  GlobalContextProps,
  GlobalContextType,
} from "./types";
import { carbonPrice, vat } from "@/constants";
import { SingleProjectResponse } from "../ProjectsPageContext/types";

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [chosenProject, setChosenProject] =
    useState<SingleProjectResponse | null>(null);
  const [orderedAmount, setOrderedAmount] = useState(0);
  const orderTotal = orderedAmount * chosenProject?.price! + vat;
  const subTotal = (orderedAmount * chosenProject?.price!).toLocaleString(
    "en",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );

  const [allProjects, setAllProjects] = useState<AllProjectsResponse | null>(
    null
  );

  useEffect(() => {
    if (chosenProject) {
      setOrderedAmount(chosenProject?.minimumPurchaseTonnes);
    }
  }, [chosenProject]);

  return (
    <GlobalContext.Provider
      value={{
        orderedAmount,
        setOrderedAmount,
        orderTotal,
        subTotal,
        allProjects,
        setAllProjects,
        chosenProject,
        setChosenProject,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
