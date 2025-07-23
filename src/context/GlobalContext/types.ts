import { Dispatch, ReactNode, SetStateAction } from "react";
import { ReportType } from "@/components/ProfilePageComponents/ReportsTable/types";
import { UseToastOptions } from "@chakra-ui/react";

export type GlobalContextProps = {
  children: ReactNode;
};

export type GlobalContextType = {
  allProjects: AllProjectsResponse | null;
  setAllProjects: Dispatch<SetStateAction<AllProjectsResponse | null>>;
  chosenProject: any | null;
  setChosenProject: Dispatch<SetStateAction<Object | null>>;
  categories: any[];
  setCategories: Dispatch<SetStateAction<any[]>>;
  reports: ReportType[];
  setReports: Dispatch<SetStateAction<ReportType[]>>;
  toast: (options: UseToastOptions) => void;
};

export interface AllProjectsResponse {
  projects: Project[];
  total: number;
  page: number;
  totalPages: number;
  nextPage: number;
  prevPage: null;
}

export interface Project {
  _id: string;
  title: string;
  tags: Tag[];
  coverImage: string;
}

export interface Tag {
  _id: string;
  icon: string;
}
