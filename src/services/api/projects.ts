import { defaultInstance, projectsInstance } from "../axios/instances";

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
    const request = await projectsInstance.get(`/aggregate/${id}`);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async (searchKey?: string) => {
  try {
    const request = await defaultInstance.get(
      `/products${searchKey && `?search=${searchKey}`}`
    );
    return request.data;
  } catch (error) {
    return error;
  }
};

export const getListingsByCategories = async (category: string) => {
  try {
    const request = await defaultInstance.get(
      `/listings/get-by-category/${category}`
    );
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

export const getListingsById = async (id: string) => {
  try {
    const request = await defaultInstance.get(`/listings/${id}`);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductStory = async (id: string | string[], toast: any) => {
  try {
    const request = await defaultInstance.get(`/product-passport/${id}`);
    return request.data;
  } catch (error: any) {
    toast({
      title: "Error",
      description:
        error?.response?.data?.error || "Something went wrong, try again.",
      status: "error",
      position: "top-right",
      duration: 9000,
      isClosable: true,
    });
  }
};
