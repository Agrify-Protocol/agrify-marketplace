import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import InvoiceHeader from "../InvoiceHeader/InvoiceHeader";
import InvoiceBody from "../InvoiceBody/InvoiceBody";
import InvoiceFooter from "../InvoiceFooter/InvoiceFooter";
import { InvoiceProps } from "./types";
import { Inter_Display } from "@/fonts";
import { useRouter } from "next/navigation";
import { createInvoice, InvoicePayloadType } from "@/services/api/invoice";
import { removeCommas } from "@/utils/removeCommas";
import { ToastData } from "@/utils/classes";

const Invoice = ({ invoice_data, isCompleted }: InvoiceProps) => {
  const toast = useToast();
  const router = useRouter();

  return (
    <Box>
      <Box
        w={"37.188rem"}
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
          w={"34.875rem"}
          h={"3.5rem"}
          bgColor={"agrify_green"}
          display={"block"}
          mx={"auto"}
          borderRadius={"1.5rem"}
          color="white"
          my={"3rem"}
          onClick={(e) => {
            e.stopPropagation();
            const createInvoicePayload = {
              ...invoice_data,
              amount: Number(removeCommas(invoice_data.amount)),
            };
            createInvoice(createInvoicePayload as unknown as InvoicePayloadType)
              .then((result) => {
                router.push("/confirmation");
              })
              .catch((err) => {
                toast(
                  new ToastData("Something went wrong", err.message, "error")
                );
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
