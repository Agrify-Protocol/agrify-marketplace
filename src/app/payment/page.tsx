import BackButton from "@/components/Layout/BackButton/BackButton";
import OrderSummary from "@/components/PaymentPageComponents/OrderSummary/OrderSummary";
import PaymentOption from "@/components/PaymentPageComponents/PaymentOption/PaymentOption";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Payment = () => {
  return (
    <Flex>
      <Box
        flexBasis={"50%"}
        minH={"100vh"}
        py={"8.5rem"}
        pl={"10.938rem"}
        pr={"5.027rem"}
      >
        <BackButton />
        <OrderSummary />
      </Box>
      <Box flexBasis={"50%"} minH={"100vh"} bgColor={"white"}>
        <PaymentOption />
      </Box>
    </Flex>
  );
};

export default Payment;
