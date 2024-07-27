"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  AllProjectsResponse,
  CategoryObject,
  GlobalContextProps,
  GlobalContextType,
} from "./types";
import { carbonPrice, vat } from "@/constants";
import { SingleProjectResponse } from "../ProjectsPageContext/types";
import { SingleProject } from "../ProjectsPageContext/types_2";

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [chosenProject, setChosenProject] = useState<SingleProject | null>(
    null
  );
  const [orderedAmount, setOrderedAmount] = useState(0);
  const orderTotal = orderedAmount * chosenProject?.projectToken.price! + vat;
  const subTotal = (
    orderedAmount * chosenProject?.projectToken.price!
  ).toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // ====================THIS IS OUTDATED====================
  const [allProjects, setAllProjects] = useState<AllProjectsResponse | null>(
    null
  );
  //============================================================
  const [categories, setCategories] = useState<CategoryObject[]>([]);

  useEffect(() => {
    if (chosenProject) {
      setOrderedAmount(chosenProject?.projectToken.minimumPurchaseTonnes);
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
        categories,
        setCategories,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
