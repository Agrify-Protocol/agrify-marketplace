export type InvoiceBodyProps = {
  order_total: number;
};

type InvoiceFinalData = {
  user_id: string;
  client_name: string;
  phone_number: string;
  due_date: Date;
  farm_name: string;
  carbon_quantity_in_tonnes: number;
  order_total: number;
};

type CreditCardPurchaseData = {
  user_id: string;
  farm_name: string;
  carbon_quantity_in_tonnes: number;
  order_total: number;
};
