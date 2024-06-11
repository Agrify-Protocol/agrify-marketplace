import { Project } from "@/context/GlobalContext/types";
import { SingleProjectResponse } from "@/context/ProjectsPageContext/types";

export const createFauxProjects = (project: SingleProjectResponse) => {
  const fauxProjects = project?.images.map((image) => {
    return {
      _id: image._id,
      title: image.description,
      tags: [],
      coverImage: image.image,
    } as Project;
  });
  return fauxProjects;
};
