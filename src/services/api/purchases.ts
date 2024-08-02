import { purchaseInstance } from "../axios/instances";

export const getAllPurchases = async () => {
  try {
    const request = await purchaseInstance.get(`/`);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};
export const getPurchasesByProject = async (id: string) => {
  try {
    const request = await purchaseInstance.get(`/get-by-project/${id}`);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};
export const getPurchasesByReference = async (ref_id: string) => {
  try {
    const request = await purchaseInstance.get(
      `/get-by-ref/paystack_${ref_id}`
    );
    return request.data;
  } catch (error) {
    console.error(error);
  }
};
