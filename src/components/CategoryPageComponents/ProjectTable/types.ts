import { StateProjectData } from "@/app/home/organic-produce/category/[type]/types";

export type ProjectTableProps = {
  projects: StateProjectData[];
  carbon_credits: number;
  type: string | string[];
};
