import { BASE_URL } from "@/config";
import axios from "axios";

export const authInstance = axios.create({
  baseURL: `${BASE_URL}/auth`,
  headers: { "Content-Type": "application/json" },
});

export const projectsInstance = axios.create({
  baseURL: `${BASE_URL}/projects`,
  headers: { "Content-Type": "application/json" },
});

export const invoiceInstance = axios.create({
  baseURL: `${BASE_URL}/invoices`,
});

export const farmInstance = axios.create({
  baseURL: `${BASE_URL}/farm`,
  headers: { "Content-Type": "application/json" },
});

export const purchaseInstance = axios.create({
  baseURL: `${BASE_URL}/purchases`,
  headers: { "Content-Type": "application/json" },
});

export const paymentInstance = axios.create({
  baseURL: `${BASE_URL}/payments`,
  headers: { "Content-Type": "application/json" },
});

export const preorderInstance = axios.create({
  baseURL: `${BASE_URL}/preorder`,
  headers: { "Content-Type": "application/json" },
});

export const profileInstance = axios.create({
  baseURL: `${BASE_URL}/profile`,
  headers: { "Content-Type": "application/json" },
});
