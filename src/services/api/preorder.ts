import { preorderInstance } from "../axios/instances";
import { PreorderPayload } from "./types";

export const createPreorder = async (id: string, data: PreorderPayload) => {
  try {
    const request = await preorderInstance.post(`/${id}`, data);
    return request.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
