import { toastFn } from "@/utils/toastFn";
import { purchaseInstance } from "../axios/instances";

export const getAllPurchases = async (toast: any) => {
  try {
    const request = await purchaseInstance.get(`/`);
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};
export const getPurchasesByProject = async (id: string, toast: any) => {
  try {
    const request = await purchaseInstance.get(`/get-by-project/${id}`);
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};
export const getPurchasesByReference = async (ref_id: string, toast: any) => {
  try {
    const request = await purchaseInstance.get(
      `/get-by-ref/paystack_${ref_id}`
    );
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};
