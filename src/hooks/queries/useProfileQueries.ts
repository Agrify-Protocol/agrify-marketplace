import {
  defaultInstance,
  profileInstance,
  purchaseInstance,
  xrpInstance,
} from "@/services/axios/instances";
import {
  CarbonCreditHistoryItem,
  Order,
  Report,
} from "@/services/api/types";
import { Transaction } from "@/components/ProjectPageComponents/Purchases/types";
import { useQuery } from "@tanstack/react-query";

async function fetchOrders(): Promise<{ orders: Order[] }> {
  const res = await xrpInstance.get("/orders/placed");
  return res.data;
}

async function fetchCarbonCreditHistory(): Promise<{
  data: CarbonCreditHistoryItem[];
}> {
  const res = await defaultInstance.get("/carbon-credits/purchases/history");
  return res.data;
}

export function useOrders() {
  return useQuery({ queryKey: ["orders"], queryFn: fetchOrders });
}

export function useCarbonCreditHistory() {
  return useQuery({
    queryKey: ["carbonCreditHistory"],
    queryFn: fetchCarbonCreditHistory,
  });
}

async function fetchAllPurchases(): Promise<Transaction[]> {
  const res = await purchaseInstance.get("/");
  return res.data;
}

export function useAllPurchases() {
  return useQuery({ queryKey: ["allPurchases"], queryFn: fetchAllPurchases });
}

async function fetchReports(): Promise<Report[]> {
  const res = await profileInstance.get("/reports");
  return res.data;
}

export function useReports() {
  return useQuery({ queryKey: ["reports"], queryFn: fetchReports });
}
