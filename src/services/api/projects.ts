import { projectsInstance } from "../axios/instances";

export const getAllProjects = async (page: number) => {
  const request = await projectsInstance.get("/", {
    params: { sortBy: "latest", limit: 6, page },
  });
  return request.data;
};
