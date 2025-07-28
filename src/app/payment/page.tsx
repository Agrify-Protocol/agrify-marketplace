import BackButton from "@/components/Common/BackButton/BackButton";
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
        minH="100vh"
        overflowX="hidden"
      >
        <Box
          flexBasis={{ base: "100%", lg: "50%" }}
          minH={{ base: "auto", lg: "100vh" }}
          py={{ base: "2rem", lg: "8.5rem" }}
          pl={{ base: "1.5rem", md: "2rem", lg: "10.938rem" }}
          pr={{ base: "1.5rem", md: "2rem", lg: "5.027rem" }}
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
