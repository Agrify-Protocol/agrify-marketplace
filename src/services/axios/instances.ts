import createInstance from "./createAxiosinstances";

export const authInstance = createInstance("/auth");
export const projectsInstance = createInstance("/projects");
export const invoiceInstance = createInstance("/invoices");
export const farmInstance = createInstance("/farm");
export const purchaseInstance = createInstance("/purchases");
export const paymentInstance = createInstance("/payments");
export const preorderInstance = createInstance("/preorder");
export const profileInstance = createInstance("/profile");
export const xrpInstance = createInstance("/xrp");
export const defaultInstance = createInstance();
