"use client";

import React from "react";
import PaystackRedirection from "@/components/PaystackRedirection";
import { useSearchParams } from "next/navigation";

const Confirmation = () => {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  return (
    <PaystackRedirection
      type={JSON.parse(success as string) ? "success" : "error"}
    />
  );
};

export default Confirmation;
