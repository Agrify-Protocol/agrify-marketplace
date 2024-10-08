"use client";

import BackButton from "@/components/Layout/BackButton/BackButton";
import OrderSummary from "@/components/PaymentPageComponents/OrderSummary/OrderSummary";
import RightSide from "@/components/PaymentPageComponents/RightSide/RightSide";
import { PaymentContextProvider } from "@/context/PaymentContext/PaymentContext";
import { Box, Flex } from "@chakra-ui/react";

const Payment = () => {
  return (
    <PaymentContextProvider>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        px={{ base: "24px", lg: 0 }}
      >
        <Box
          flexBasis={"50%"}
          minH={{base: "100%", lg: "100vh"}}
          py={{ lg: "8.5rem" }}
          pl={{ lg: "10.938rem" }}
          pr={{ lg: "5.027rem" }}
        >
          <Box mt={{ base: "39px", lg: 0 }}>
            <BackButton />
          </Box>
          <OrderSummary />
        </Box>
        <RightSide />
      </Flex>
    </PaymentContextProvider>
  );
};

export default Payment;
