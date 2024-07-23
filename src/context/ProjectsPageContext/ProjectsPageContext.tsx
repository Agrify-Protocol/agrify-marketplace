"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { ProjectPageContextType, SingleProjectResponse } from "./types";
import { projectSections } from "./constants";
import { SingleProject } from "./types_2";

const ProjectPageContext = createContext({} as ProjectPageContextType);

type Props = {
  children: ReactNode;
};

export const ProjectPageProvider = ({ children }: Props) => {
  const [project, setProject] = useState<SingleProject | null>(null);
  const [currentSection, setCurrentSection] = useState(projectSections[0]);
  return (
    <ProjectPageContext.Provider
      value={{ project, setProject, currentSection, setCurrentSection }}
    >
      {children}
    </ProjectPageContext.Provider>
  );
};

export const useProjectPageContext = () => {
  return useContext(ProjectPageContext);
};
