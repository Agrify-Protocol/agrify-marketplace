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