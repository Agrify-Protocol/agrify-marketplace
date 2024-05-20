"use client";

import BackButton from "@/components/Layout/BackButton/BackButton";
import OrderSummary from "@/components/PaymentPageComponents/OrderSummary/OrderSummary";
import RightSide from "@/components/PaymentPageComponents/RightSide/RightSide";
import { PaymentContextProvider } from "@/context/PaymentContext/PaymentContext";
import { Box, Flex } from "@chakra-ui/react";

const Payment = () => {
  return (
    <PaymentContextProvider>
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
        <RightSide />
      </Flex>
    </PaymentContextProvider>
  );
};

export default Payment;
