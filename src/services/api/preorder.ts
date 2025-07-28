import { toastFn } from "@/utils/toastFn";
import { preorderInstance } from "../axios/instances";
import { PreorderPayload } from "./types";

export const createPreorder = async (
  id: string,
  data: PreorderPayload,
  toast: any
) => {
  try {
    const request = await preorderInstance.post(`/${id}`, data);
    return request.data;
  } catch (error: any) {
    toastFn(toast, error);
  }
};
