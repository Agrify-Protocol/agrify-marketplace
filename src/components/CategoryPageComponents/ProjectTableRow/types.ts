import { StateProjectData } from "@/app/marketplace/category/[type]/types";

export type ProjectTableRowProps = {
  project: StateProjectData;
  total_carbon_credits: number;
  type: string | string[];
};
