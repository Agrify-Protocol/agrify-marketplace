import { profileInstance, xrpInstance } from "../axios/instances";

export const getOverview = async () => {
  try {
    const request = await profileInstance.get("/overview");
    return request.data;
  } catch (error) {
    return error;
  }
};

export const getReports = async () => {
  try {
    const request = await profileInstance.get("/reports");
    return request.data;
  } catch (error) {
    return error;
  }
};

export const createReport = async (data: { reportName: string }) => {
  try {
    const request = await profileInstance.post("/reports/create", data);
    return request.data;
  } catch (error) {
    return error;
  }
};

export const getOrders = async () => {
  try {
    const request = await xrpInstance.get("/orders");
    return request.data;
  } catch (error) {
    return error;
  }
};

export const getProduceDetails = async (id: string | string[]) => {
  try {
    const request = await xrpInstance.get(`orders/${id}`);
    return request.data;
  } catch (error) {
    return error;
  }
};