export type InvoiceProps = {
  invoice_data: InvoiceData;
  isCompleted?: boolean;
};

export type InvoiceData = {
  clientName: string;
  paymentDueDate: string;
  phoneNumber: string;
  projectId: string | undefined;
  projectName: string | undefined;
  quantity: number;
  amount: string;
  totalAmount: number;
  invoiceNo: string;
  address: string | undefined;
  contactNo: string;
  issuedOn: string;
};
