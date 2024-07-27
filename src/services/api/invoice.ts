import { InvoiceDataType } from "@/components/ProjectPageComponents/Purchases/types";
import { invoiceInstance } from "../axios/instances";

export type InvoicePayloadType = {
  clientName: string;
  paymentDueDate: Date;
  phoneNumber: string;
  projectId: string;
  quantity: number;
  amount: number;
  totalAmount: number;
  invoiceNo: string;
  address: string;
  contactNo: string;
  issuedOn: Date;
};

export interface SingleInvoiceResponse {
  _id: string;
  clientName: string;
  paymentDueDate: Date;
  phoneNumber: string;
  projectId: ProjectID;
  userId: UserID;
  quantity: number;
  amount: number;
  status: string;
  invoiceNo: string;
  address: string;
  contactNo: string;
  issuedOn: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface ProjectID {
  _id: string;
  projectId: string;
  title: string;
  description: string;
  mission: string;
  methodology: string;
  tags: any[];
  images: Image[];
  coverImage: string;
  location: string;
  latitude: number;
  longitude: number;
  state: string;
  country: string;
  category: string;
  creditStartDate: Date;
  creditEndDate: Date;
  supportingDocument: string;
  projectToken: string;
  farms: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Image {
  image: string;
  _id: string;
}

export interface UserID {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  isAdmin: boolean;
  isBuyer: boolean;
  isEmailVerified: boolean;
  hederaAccountID: string;
  wallet: string;
}

export const createInvoice = async (data: InvoicePayloadType) => {
  try {
    const request = await invoiceInstance.post("/create", data);
    return request.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const getSingleInvoice = async (id: string) => {
  try {
    const request = await invoiceInstance.get(`/${id}`);
    return request.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
