import { Project } from "@/context/GlobalContext/types";
import { SingleProject } from "@/context/ProjectsPageContext/types_2";

export const createFauxProjects = (project: SingleProject) => {
  const fauxProjects = project?.images.map((image) => {
    return {
      _id: image._id,
      title: "",
      tags: [],
      coverImage: image.image,
    } as Project;
  });
  return fauxProjects;
};
