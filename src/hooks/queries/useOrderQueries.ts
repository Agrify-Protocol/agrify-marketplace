import { defaultInstance, farmInstance, xrpInstance } from "@/services/axios/instances";
import { CarbonCredit, Order } from "@/services/api/types";
import { DetailedFarm } from "@/app/farm/[id]/types";
import { useQuery } from "@tanstack/react-query";

async function fetchProduceDetails(id: string): Promise<Order> {
  const res = await xrpInstance.get(`orders/${id}`);
  return res.data;
}

async function fetchCarbonCreditForRedirect(
  id: string,
): Promise<{ data: CarbonCredit }> {
  const res = await defaultInstance.get(`/carbon-credits/${id}`);
  return res.data;
}

export function useProduceDetails(
  id: string | null | undefined,
  enabled = true,
) {
  return useQuery({
    queryKey: ["produceDetails", id],
    queryFn: () => fetchProduceDetails(id!),
    enabled: !!id && enabled,
  });
}

export function useCarbonCreditForRedirect(
  id: string | null | undefined,
  enabled = true,
) {
  return useQuery({
    queryKey: ["carbonCreditRedirect", id],
    queryFn: () => fetchCarbonCreditForRedirect(id!),
    enabled: !!id && enabled,
  });
}

async function fetchFarm(id: string): Promise<DetailedFarm> {
  const res = await farmInstance.get(`/${id}`);
  return res.data;
}

export function useFarm(id: string | undefined, enabled = true) {
  return useQuery({
    queryKey: ["farm", id],
    queryFn: () => fetchFarm(id!),
    enabled: !!id && enabled,
  });
}
