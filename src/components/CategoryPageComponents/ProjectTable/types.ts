import { StateProjectData } from "@/app/home/category/[type]/types";

export type ProjectTableProps = {
  projects: StateProjectData[];
  carbon_credits: number;
  type: string | string[];
};
