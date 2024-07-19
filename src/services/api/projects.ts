import { projectsInstance } from "../axios/instances";

export const getAllProjects = async (page: number) => {
  try {
    const request = await projectsInstance.get("/", {
      params: { sortBy: "latest", limit: 6, page },
    });
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleProject = async (id: string) => {
  try {
    const request = await projectsInstance.get(`/${id}`);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async (selectedCategory = "") => {
  try {
    const request = await projectsInstance.get(
      `/aggregate/category/${selectedCategory}`
    );
    return request.data;
  } catch (error) {
    console.log("Error:", error);
  }
};
