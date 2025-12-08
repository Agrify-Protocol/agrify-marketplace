"use client";

import { Box, Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import InvoiceHeader from "../InvoiceHeader/InvoiceHeader";
import InvoiceBody from "../InvoiceBody/InvoiceBody";
import InvoiceFooter from "../InvoiceFooter/InvoiceFooter";
import { InvoiceProps } from "./types";
import { Inter_Display } from "@/fonts";
import { useRouter } from "next/navigation";
import { createInvoice } from "@/services/api/invoice";
import { removeCommas } from "@/utils/removeCommas";
import { InvoicePayloadType } from "@/services/api/types";

const Invoice = ({ invoice_data, isCompleted }: InvoiceProps) => {
  const toast = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box>
      <Box
        w={{ lg: "37.188rem" }}
        p={"0.625rem"}
        py={"2.75rem"}
        mx={"auto"}
        fontFamily={Inter_Display.style.fontFamily}
      >
        <InvoiceHeader invoice_data={invoice_data} />
        <InvoiceBody invoice_data={invoice_data} />
        <InvoiceFooter />
      </Box>
      {!isCompleted && (
        <Button
          w={{ lg: "34.875rem" }}
          h={"3.5rem"}
          bgColor={"agrify_green"}
          display={"block"}
          mx={"auto"}
          borderRadius={"1.5rem"}
          color="white"
          my={"3rem"}
          _hover={{
            bg: "#0ba842",
          }}
          isLoading={isLoading}
          onClick={(e) => {
            setIsLoading(true);
            e.stopPropagation();
            const createInvoicePayload = {
              ...invoice_data,
              amount: Number(removeCommas("")),
            };
            createInvoice(
              createInvoicePayload as unknown as InvoicePayloadType,
              toast
            ).then((_result) => {
              if (_result) {
                router.push("/redirect");
              }
              setIsLoading(false);
            });
          }}
        >
          Confirm
        </Button>
      )}
    </Box>
  );
};

export default Invoice;
