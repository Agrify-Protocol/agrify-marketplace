import { profileInstance } from "../axios/instances";

export const getOverview = async () => {
  try {
    const request = await profileInstance.get("/overview");
    return request.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReports = async () => {
  try {
    const request = await profileInstance.get("/reports");
    return request.data;
  } catch (error) {
    console.log(error);
  }
};

export const createReport = async (data: { reportName: string }) => {
  try {
    const request = await profileInstance.post("/reports/create", data);
    return request.data;
  } catch (error) {
    console.log(error);
  }
};
