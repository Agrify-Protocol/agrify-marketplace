import {
  defaultInstance,
  projectsInstance,
  purchaseInstance,
} from "@/services/axios/instances";
import { Project } from "@/context/GlobalContext/types";
import { Transaction } from "@/components/ProjectPageComponents/Purchases/types";
import { ProductStoryResponse } from "@/services/api/types";
import { useQuery } from "@tanstack/react-query";

async function fetchAllProjects(
  page: number,
): Promise<{ projects: Project[] }> {
  const res = await projectsInstance.get("/", {
    params: { sortBy: "latest", limit: 6, page },
  });
  return res.data;
}

export function useAllProjects(page: number, enabled = true) {
  return useQuery({
    queryKey: ["allProjects", page],
    queryFn: () => fetchAllProjects(page),
    enabled,
  });
}

async function fetchPurchasesByProject(id: string): Promise<Transaction[]> {
  const res = await purchaseInstance.get(`/get-by-project/${id}`);
  return res.data;
}

async function fetchProductStory(id: string): Promise<ProductStoryResponse> {
  const res = await defaultInstance.get(`/product-passport/${id}`);
  return res.data;
}

export function usePurchasesByProject(id: string | string[] | undefined) {
  const stableId = Array.isArray(id) ? id[0] : id;
  return useQuery({
    queryKey: ["purchasesByProject", stableId],
    queryFn: () => fetchPurchasesByProject(stableId!),
    enabled: !!stableId,
  });
}

export function useProductStory(id: string | string[] | undefined) {
  const stableId = Array.isArray(id) ? id[0] : id;
  return useQuery({
    queryKey: ["productStory", stableId],
    queryFn: () => fetchProductStory(stableId!),
    enabled: !!stableId,
  });
}
