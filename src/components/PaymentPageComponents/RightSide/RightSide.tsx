import { usePaymentContext } from "@/context/PaymentContext/PaymentContext";
import { Box } from "@chakra-ui/react";
import React from "react";
import PaymentOption from "../PaymentOption/PaymentOption";
import InvoiceForm from "../InvoiceForm/InvoiceForm";

const RightSide = () => {
  const { paymentStage } = usePaymentContext();
  return (
    <Box flexBasis={"50%"} minH={"100vh"} bgColor={"white"}>
      {paymentStage === 1 && <PaymentOption />}
      {paymentStage === 2 && <InvoiceForm />}
    </Box>
  );
};

export default RightSide;
