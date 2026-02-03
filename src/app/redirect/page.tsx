"use client";

import React, { useEffect, useState } from "react";
import PaystackRedirection from "@/components/PaystackRedirection";
import { useSearchParams } from "next/navigation";
import { getCarboncreditById, getProduceDetails } from "@/services/api/profile";
import { useToast } from "@chakra-ui/react";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import PageLoader from "@/components/Common/PageLoader/PageLoader";

const Confirmation = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const tab = searchParams.get("tab");
  const toast = useToast();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Record<string, any>>({});

  const getRedirectType = (status: string) => {
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

  useEffect(() => {
    if (user) {
      (tab === "traceable produce" ? getProduceDetails : getCarboncreditById)(
        id as string,
        toast,
      ).then((response) => {
        if (response) {
          setData(response);
          setLoading(false);
        }
        setLoading(false);
      });
    }
  }, [user, id]);

  return !loading && (data?.data?.status || data?.status) ? (
    <PaystackRedirection
      type={getRedirectType(data?.data?.status || data?.status)}
    />
  ) : (
    <PageLoader />
  );
};

export default Confirmation;
