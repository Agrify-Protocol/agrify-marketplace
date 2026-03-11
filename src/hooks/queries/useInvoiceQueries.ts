import { invoiceInstance } from "@/services/axios/instances";
import { SingleInvoiceResponse } from "@/services/api/types";
import { useQuery } from "@tanstack/react-query";

async function fetchSingleInvoice(id: string): Promise<SingleInvoiceResponse> {
  const res = await invoiceInstance.get(`/${id}`);
  return res.data;
}

export function useSingleInvoice(id: string | undefined) {
  return useQuery({
    queryKey: ["invoice", id],
    queryFn: () => fetchSingleInvoice(id!),
    enabled: !!id,
  });
}
