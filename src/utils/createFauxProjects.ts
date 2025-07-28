import { Project } from "@/context/GlobalContext/types";

export const createFauxProjects = (project: any) => {
  const fauxProjects = project?.images.map((image: any) => {
    return {
      _id: image._id,
      title: "",
      tags: [],
      coverImage: image.image,
    } as Project;
  });
  return fauxProjects;
};
