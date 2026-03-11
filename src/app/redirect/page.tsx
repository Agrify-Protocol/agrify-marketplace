"use client";

import React, { useMemo } from "react";
import PaystackRedirection from "@/components/PaystackRedirection";
import { useSearchParams } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import SignXaman from "@/components/PaymentPageComponents/SignXaman";
import { useProduceDetails, useCarbonCreditForRedirect } from "@/hooks/queries/useOrderQueries";

const Confirmation = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const tab = searchParams.get("tab")?.replace("%", " ");
  const hash = searchParams.get("hash");
  const { user } = useAuthContext();

  const isNotSignTab = useMemo(() => {
    return (
      ["traceable produce", "climate art"].includes(tab as string) || !hash
    );
  }, [tab, hash]);

  const isTraceable = isNotSignTab && tab === "traceable produce";
  const isClimateArt = isNotSignTab && tab === "climate art";

  const {
    data: produceData,
    isLoading: produceLoading,
  } = useProduceDetails(isTraceable ? id : null, !!user);

  const {
    data: carbonData,
    isLoading: carbonLoading,
  } = useCarbonCreditForRedirect(isClimateArt ? id : null, !!user);

  const loading = isTraceable ? produceLoading : isClimateArt ? carbonLoading : false;
  const getRedirectType = (status: string | undefined) => {
    switch (status) {
      case "paid":
      case "purchased":
        return "success";
      case "awaiting_payment":
        return "pending";
      default:
        return "error";
    }
  };

  const redirectStatus = isTraceable
    ? produceData?.status
    : isClimateArt
      ? carbonData?.data?.status
      : undefined;

  if (loading) return <PageLoader />;

  if (!isNotSignTab) return <SignXaman hash={hash || ""} />;

  return (
    <PaystackRedirection
      type={getRedirectType(redirectStatus)}
    />
  );
};

export default Confirmation;
