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
  invoiceNo: string;
  address: string | undefined;
  contactNo: string;
  issuedOn: string;
};
