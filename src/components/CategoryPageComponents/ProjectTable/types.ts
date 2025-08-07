import { StateProjectData } from "@/app/marketplace/category/[type]/types";

export type ProjectTableProps = {
  projects: StateProjectData[];
  carbon_credits: number;
  type: string | string[];
};
