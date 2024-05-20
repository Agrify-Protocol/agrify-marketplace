import { v4 as uuid } from "uuid";

export const purchases = [
  {
    id: uuid(),
    payment_type: "Generated Invoice",
    status: "pending",
    tonnes: "1000tc02e",
    date: "11 Feb 2024",
  },
  {
    id: uuid(),
    payment_type: "Card Payment",
    status: "confirmed",
    tonnes: "50tc02e",
    date: "11 Feb 2024",
  },
];
