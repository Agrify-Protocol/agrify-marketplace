"use client";

import { createContext, useContext, useState } from "react";
import {
  AllProjectsResponse,
  GlobalContextProps,
  GlobalContextType,
} from "./types";
import { carbonPrice, vat } from "@/constants";
import { SingleProjectResponse } from "../ProjectsPageContext/types";

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [orderedAmount, setOrderedAmount] = useState(1000);
  const orderTotal = orderedAmount * carbonPrice + vat;
  const subTotal = (orderedAmount * carbonPrice).toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const [chosenProject, setChosenProject] =
    useState<SingleProjectResponse | null>(null);

  const [allProjects, setAllProjects] = useState<AllProjectsResponse | null>(
    null
  );

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
