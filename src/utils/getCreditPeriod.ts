import { SingleProjectResponse } from "@/context/ProjectsPageContext/types";

export const getCreditPeriod = (project: SingleProjectResponse) => {
  const crediting_period = `${new Date(project?.creditStartDate)
    .toDateString()
    .substring(3)} - ${new Date(project?.creditEndDate)
    .toDateString()
    .substring(3)}`;
  return crediting_period;
};
