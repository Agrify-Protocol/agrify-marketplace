import { StateProjectData } from "@/app/home/organic-produce/category/[type]/types";

export type ProjectTableRowProps = {
  project: StateProjectData;
  total_carbon_credits: number;
  type: string | string[];
};
