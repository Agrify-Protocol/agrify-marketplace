import {
  farmInstance,
  invoiceInstance,
  paymentInstance,
  preorderInstance,
  profileInstance,
  projectsInstance,
  purchaseInstance,
  xrpInstance,
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
    xrpInstance,
  ];

  instances.forEach((instance) => {
    instance.interceptors.request.use((config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    return instance;
  });
};
