import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import InvoiceHeader from "../InvoiceHeader/InvoiceHeader";
import InvoiceBody from "../InvoiceBody/InvoiceBody";
import InvoiceFooter from "../InvoiceFooter/InvoiceFooter";
import { InvoiceProps } from "./types";
import { Inter_Display } from "@/fonts";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { parseDate } from "@/utils/parseData";
import { useRouter } from "next/navigation";
import { createInvoice } from "@/services/api/invoice";
import { InvoiceDataType } from "@/components/ProjectPageComponents/Purchases/types";
import { removeCommas } from "@/utils/removeCommas";
import { ToastData } from "@/utils/classes";

const Invoice = ({ invoice_data, order_total, isCompleted }: InvoiceProps) => {
  const toast = useToast();
  const router = useRouter();
  const { chosenProject, orderedAmount, subTotal, orderTotal } =
    useGlobalContext();
  const allData = {
    clientName: invoice_data.client_name,
    paymentDueDate: invoice_data.due_date,
    phoneNumber: invoice_data.phone_number,
    projectId: chosenProject?._id,
    quantity: orderedAmount,
    amount: Number(removeCommas(subTotal)),
    totalAmount: orderTotal,
    invoiceNo: `INV${Math.floor(Math.random() * 5000)}`,
    address: chosenProject?.location,
    contactNo: "123-456-7890",
    issuedOn: parseDate(new Date()),
  };
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
        <InvoiceBody order_total={order_total} />
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
          onClick={() => {
            createInvoice(allData as unknown as InvoiceDataType)
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
