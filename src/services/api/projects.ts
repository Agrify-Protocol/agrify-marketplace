import { toastFn } from "@/utils/toastFn";
import { defaultInstance, projectsInstance } from "../axios/instances";

export const getAllProjects = async (page: number, toast: any) => {
  try {
    const request = await projectsInstance.get("/", {
      params: { sortBy: "latest", limit: 6, page },
    });
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

export const getSingleProject = async (id: string, toast: any) => {
  try {
    const request = await projectsInstance.get(`/aggregate/${id}`);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

export const getCategories = async (toast: any, searchKey?: string) => {
  try {
    const request = await defaultInstance.get(
      `/products${searchKey && `?search=${searchKey}`}`
    );
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

export const getListingsByCategories = async (category: string, toast: any) => {
  try {
    const request = await defaultInstance.get(
      `/listings/get-by-category/${category}`
    );
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

export const getListingsById = async (id: string, toast: any) => {
  try {
    const request = await defaultInstance.get(`/listings/${id}`);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

export const getProductStory = async (id: string | string[], toast: any) => {
  try {
    const request = await defaultInstance.get(`/product-passport/${id}`);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

export const createProductRequest = async (
  body: Record<string, any>,
  toast: any
) => {
  try {
    const request = await defaultInstance.post("/produce-requests", body);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

//carbon credits
export const getCarbonCredits = async (toast: any) => {
  try {
    const request = await defaultInstance.get("/carbon-credits/marketplace");
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};

export const getCarbonCreditById = async (toast: any, id: string) => {
  try {
    const request = await defaultInstance.get(`/carbon-credits/${id}`);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};
