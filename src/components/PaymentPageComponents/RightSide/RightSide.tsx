import { usePaymentContext } from "@/context/PaymentContext/PaymentContext";
import { Box } from "@chakra-ui/react";
import React from "react";
import PaymentOption from "../PaymentOption/PaymentOption";
import InvoiceForm from "../InvoiceForm/InvoiceForm";
import Invoice from "../Invoice/Invoice";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";

const RightSide = () => {
  const { paymentStage, invoiceData } = usePaymentContext();
  const { orderTotal } = useGlobalContext();
  return (
    <Box flexBasis={"50%"} minH={"100vh"} bgColor={"white"}>
      {paymentStage === 1 && <PaymentOption />}
      {paymentStage === 2 && <InvoiceForm />}
      {paymentStage === 3 && (
        <Invoice invoice_data={invoiceData} order_total={orderTotal} />
      )}
    </Box>
  );
};

export default RightSide;
