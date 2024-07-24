import { purchaseInstance } from "../axios/instances";

export const getPurchasesByProject = async (id: string) => {
  try {
    const request = await purchaseInstance.get(`/get-by-project/${id}`);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};
