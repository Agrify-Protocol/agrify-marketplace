import { defaultInstance } from "@/services/axios/instances";
import {
  CarbonCredit,
  Category,
} from "@/services/api/types";
import { useQuery } from "@tanstack/react-query";

async function fetchCategories(
  search: string,
): Promise<{ products: Category[] }> {
  const res = await defaultInstance.get(
    `/products${search ? `?search=${search}` : ""}`,
  );
  return res.data;
}

export function useCategories(search: string) {
  return useQuery({
    queryKey: ["categories", search],
    queryFn: () => fetchCategories(search),
  });
}

async function fetchCarbonCredits(): Promise<{ data: CarbonCredit[] }> {
  const res = await defaultInstance.get("/carbon-credits/marketplace");
  return res.data;
}

async function fetchCarbonCreditById(
  id: string,
): Promise<{ data: CarbonCredit }> {
  const res = await defaultInstance.get(`/carbon-credits/${id}`);
  return res.data;
}

export function useCarbonCredits() {
  return useQuery({ queryKey: ["carbonCredits"], queryFn: fetchCarbonCredits });
}

export function useCarbonCreditById(id: string | undefined) {
  return useQuery({
    queryKey: ["carbonCredit", id],
    queryFn: () => fetchCarbonCreditById(id!),
    enabled: !!id,
  });
}
