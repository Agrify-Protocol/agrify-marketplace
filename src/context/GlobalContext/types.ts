import { Dispatch, ReactNode, SetStateAction } from "react";
import { SingleProjectResponse } from "../ProjectsPageContext/types";
import { SingleProject } from "../ProjectsPageContext/types_2";
import { ReportType } from "@/components/ProfilePageComponents/ReportsTable/types";

export type GlobalContextProps = {
  children: ReactNode;
};

export type GlobalContextType = {
  orderedAmount: number;
  setOrderedAmount: Dispatch<SetStateAction<number>>;
  orderTotal: number;
  subTotal: string;
  allProjects: AllProjectsResponse | null;
  setAllProjects: Dispatch<SetStateAction<AllProjectsResponse | null>>;
  chosenProject: SingleProject | null;
  setChosenProject: Dispatch<SetStateAction<SingleProject | null>>;
  categories: CategoryObject[];
  setCategories: Dispatch<SetStateAction<CategoryObject[]>>;
  reports: ReportType[];
  setReports: Dispatch<SetStateAction<ReportType[]>>;
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

export type CategoryObject = {
  category: Category;
  totalTonnes: number;
  farms: number;
};

type Category = "cassava" | "tomato" | "rice" | "yam" | "maize" | "soybean";
