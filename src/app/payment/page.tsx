"use client";

import BackButton from "@/components/Common/BackButton/BackButton";
import DeliveryDetails from "@/components/PaymentPageComponents/DeliveryDetails/DeliveryDetails";
import OrderSummary from "@/components/PaymentPageComponents/OrderSummary/OrderSummary";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { PaymentContextProvider } from "@/context/PaymentContext/PaymentContext";
import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Payment = () => {
  const router = useRouter();
  const { chosenProject } = useGlobalContext();

  useEffect(() => {
    if (!chosenProject) {
      router.push("/home");
    }
  }, [chosenProject]);

  console.log("chosenProject", chosenProject);

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
          <OrderSummary chosenProject={chosenProject} />
        </Box>
        <Box
          flexBasis={"50%"}
          minH={{ lg: "100vh" }}
          bgColor={{ lg: "white" }}
          alignContent="center"
        >
          <DeliveryDetails chosenProject={chosenProject} />
        </Box>
      </Flex>
    </PaymentContextProvider>
  );
};

export default Payment;
