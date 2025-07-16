"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { ProjectPageContextType } from "./types";
import { useParams, useSearchParams } from "next/navigation";

const ProjectPageContext = createContext({} as ProjectPageContextType);

type Props = {
  children: ReactNode;
};

export const ProjectPageProvider = ({ children }: Props) => {
  const [project, setProject] = useState<any | null>(null);
  const searchParams = useSearchParams();
  const tabId = searchParams.get("id") as string;
  const { id } = useParams();

  return (
    <ProjectPageContext.Provider value={{ project, setProject, tabId, id }}>
      {children}
    </ProjectPageContext.Provider>
  );
};

export const useProjectPageContext = () => {
  return useContext(ProjectPageContext);
};
