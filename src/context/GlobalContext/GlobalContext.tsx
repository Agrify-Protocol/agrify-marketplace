"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  AllProjectsResponse,
  GlobalContextProps,
  GlobalContextType,
} from "./types";
import { ReportType } from "@/components/ProfilePageComponents/ReportsTable/types";

const GlobalContext = createContext({} as GlobalContextType);
export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [chosenProject, setChosenProject] = useState<any>(null);

  // ====================THIS IS OUTDATED====================
  const [allProjects, setAllProjects] = useState<AllProjectsResponse | null>(
    null
  );
  //============================================================
  const [categories, setCategories] = useState<any[]>([]);

  const [reports, setReports] = useState<ReportType[]>([]);

  return (
    <GlobalContext.Provider
      value={{
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
