import { Box, Text } from "@chakra-ui/react";
import React from "react";
import BackButton from "../BackButton/BackButton";
import { InvoiceModalProps } from "./types";
import Invoice from "@/components/PaymentPageComponents/Invoice/Invoice";
import { Inter_Display } from "@/fonts";

const InvoiceModal = ({ closeModal, invoice_data }: InvoiceModalProps) => {
  return (
    <Box
      position={"fixed"}
      inset={0}
      w={"100vw"}
      h={"100vh"}
      bgColor={"rgba(0,0,0,0.4)"}
    >
      <Box
        bgColor={"white"}
        w={"fit-content"}
        borderRadius={"1rem"}
        p={"2.813rem 2rem"}
        my={"6.438rem"}
        ml={"auto"}
        mr={"2.145rem"}
        fontFamily={Inter_Display.style.fontFamily}
        maxH={"37.5rem"}
        overflowY={"auto"}
      >
        <BackButton customFunction={closeModal} />
        <Text fontWeight={500} color={"main_black_1"} fontSize={"1.5rem"}>
          Transaction Details
        </Text>
        <Text
          fontWeight={600}
          fontSize={"2rem"}
          color={"main_black_1"}
          mt={"2.5rem"}
        >
          {invoice_data.quantity}tc02e
        </Text>
        <Invoice invoice_data={invoice_data} isCompleted />
      </Box>
    </Box>
  );
};

export default InvoiceModal;
