import { farmInstance } from "../axios/instances";

export const getFarm = async (id: string) => {
  try {
    const request = await farmInstance.get(`/${id}`);
    return request.data;
  } catch (error) {
    console.log(error);
  }
};
