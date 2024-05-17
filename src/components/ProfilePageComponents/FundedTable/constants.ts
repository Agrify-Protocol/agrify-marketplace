import { v4 as uuid } from "uuid";

export const fundedProjects = [
  {
    id: uuid(),
    name: "Greenfield Farms Carbon Project",
    payment_status: "pending",
    location: "Tanzania",
    start_date: "11 Feb 2024",
  },
  {
    id: uuid(),
    name: "REDD+ project in eastern Ivory coast.",
    payment_status: "confirmed",
    location: "Ivory Coast",
    start_date: "09 Nov 2023",
  },
];
