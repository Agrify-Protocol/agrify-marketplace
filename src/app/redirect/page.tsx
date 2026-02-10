"use client";

import React, { useEffect, useMemo, useState } from "react";
import PaystackRedirection from "@/components/PaystackRedirection";
import { useSearchParams } from "next/navigation";
import { getCarboncreditById, getProduceDetails } from "@/services/api/profile";
import { useToast } from "@chakra-ui/react";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import SignXaman from "@/components/PaymentPageComponents/SignXaman";

const Confirmation = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const tab = searchParams.get("tab")?.replace("%", " "); //climate art, traceable produce, sign
  const hash = searchParams.get("hash");
  const toast = useToast();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Record<string, any>>({});
  const isNotSignTab = useMemo(() => {
    return (
      ["traceable produce", "climate art"].includes(tab as string) || !hash
    );
  }, [tab]);

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
      if (isNotSignTab) {
        (tab === "traceable produce" ? getProduceDetails : getCarboncreditById)(
          id as string,
          toast,
        )
          .then((response) => {
            if (response) {
              setData(response);
            }
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    }
  }, [user, id, isNotSignTab]);

  return loading ? (
    <PageLoader />
  ) : !isNotSignTab ? (
    <SignXaman hash={hash || ""} />
  ) : (
    <PaystackRedirection
      type={getRedirectType(data?.data?.status || data?.status)}
    />
  );
};

export default Confirmation;
