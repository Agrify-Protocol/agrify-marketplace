import { StateProjectData } from "@/app/home/[tab]/category/[type]/types";

export type ProjectTableProps = {
  projects: StateProjectData[];
  carbon_credits: number;
  type: string | string[];
};
