export class InvoiceData {
  client_name;
  phone_number;
  due_date;

  constructor(client_name: string, phone_number: string, due_date: string) {
    this.client_name = client_name;
    this.phone_number = phone_number;
    this.due_date = due_date;
  }
}
