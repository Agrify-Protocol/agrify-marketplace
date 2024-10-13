export type LoginData = { email: string; password: string };
export type RegisterData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  // password_2: string;
};

export type PasswordResetData = {
  userId: string;
  token: string;
  password: string;
};

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

export type PaymentPayload = {
  projectId: string;
  tonnes: number;
};

export type PreorderPayload = {
  name: string;
  phoneNumber: string;
  amount: number;
  address: string;
};
