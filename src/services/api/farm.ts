import { toastFn } from "@/utils/toastFn";
import { farmInstance } from "../axios/instances";

export const getFarm = async (id: string, toast: any) => {
  try {
    const request = await farmInstance.get(`/${id}`);
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};
