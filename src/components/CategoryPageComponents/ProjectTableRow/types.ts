import { StateProjectData } from "@/app/home/category/[type]/types";

export type ProjectTableRowProps = {
  project: StateProjectData;
  total_carbon_credits: number;
  type: string | string[];
};
