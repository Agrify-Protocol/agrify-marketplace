"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { ProjectPageContextType } from "./types";
import { projectSections } from "./constants";

const ProjectPageContext = createContext({} as ProjectPageContextType);

type Props = {
  children: ReactNode;
};

export const ProjectPageProvider = ({ children }: Props) => {
  const [currentSection, setCurrentSection] = useState(projectSections[0]);
  return (
    <ProjectPageContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </ProjectPageContext.Provider>
  );
};

export const useProjectPageContext = () => {
  return useContext(ProjectPageContext);
};
