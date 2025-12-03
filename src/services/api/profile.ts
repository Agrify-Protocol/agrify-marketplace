import { toastFn } from "@/utils/toastFn";
import {
  defaultInstance,
  profileInstance,
  xrpInstance,
} from "../axios/instances";

export const getOverview = async (toast: any) => {
  try {
    const request = await profileInstance.get("/overview");
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};

export const getReports = async (toast: any) => {
  try {
    const request = await profileInstance.get("/reports");
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};

export const createReport = async (
  data: {
    reportName: string;
  },
  toast: any
) => {
  try {
    const request = await profileInstance.post("/reports/create", data);
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};

export const getOrders = async (toast: any) => {
  try {
    const request = await xrpInstance.get("/orders/placed");
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};

export const getProduceDetails = async (id: string | string[], toast: any) => {
  try {
    const request = await xrpInstance.get(`orders/${id}`);
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};

export const completeOrder = async (id: string, toast: any) => {
  try {
    const request = await xrpInstance.post(`/orders/${id}/fulfil`);
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};

export const createOrder = async (
  data: Record<string, string | number>,
  toast: any
) => {
  try {
    const request = await xrpInstance.post("/orders", data);
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};

//carbon creits
export const getCarbonCreditPurchaseHistory = async (toast: any) => {
  try {
    const request = await defaultInstance.get(
      `/carbon-credits/purchases/history`
    );
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};

export const purchaseCarbonCredits = async (
  id: string,
  data: {
    tonnes: number | string;
    buyerWalletAddress: string;
  },
  toast: any
) => {
  try {
    const request = await defaultInstance.post(
      `carbon-credits/${id}/purchase`,
      data
    );
    return request.data;
  } catch (error) {
    toastFn(toast, error);
  }
};
