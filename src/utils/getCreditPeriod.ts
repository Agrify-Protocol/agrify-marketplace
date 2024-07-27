import { SingleProjectResponse } from "@/context/ProjectsPageContext/types";
import { SingleProject } from "@/context/ProjectsPageContext/types_2";

export const getCreditPeriod = (project: SingleProject) => {
  const crediting_period = `${new Date(project?.creditStartDate)
    .toDateString()
    .substring(3)} - ${new Date(project?.creditEndDate)
    .toDateString()
    .substring(3)}`;
  return crediting_period;
};
