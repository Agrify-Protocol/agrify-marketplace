"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  AllProjectsResponse,
  CategoryObject,
  GlobalContextProps,
  GlobalContextType,
} from "./types";
import { vat } from "@/constants";
import { SingleProject } from "../ProjectsPageContext/types_2";
import { ReportType } from "@/components/ProfilePageComponents/ReportsTable/types";

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

  const [reports, setReports] = useState<ReportType[]>([]);

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
        reports,
        setReports,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
