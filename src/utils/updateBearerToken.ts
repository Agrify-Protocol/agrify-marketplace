import {
  farmInstance,
  invoiceInstance,
  paymentInstance,
  preorderInstance,
  profileInstance,
  projectsInstance,
  purchaseInstance,
} from "@/services/axios/instances";

export const updateBearerToken = (accessToken: string) => {
  const instances = [
    projectsInstance,
    farmInstance,
    invoiceInstance,
    paymentInstance,
    preorderInstance,
    profileInstance,
    purchaseInstance,
  ];
  instances.forEach((instance) => {
    instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  });
};
