"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import StoreFrontForm from "../StoreFrontForm/StoreFrontForm";
import CompleteRequest from "./CompleteRequest";

const Storefront = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step == 2) {
      setTimeout(() => {
        setStep(1);
      }, 3000);
    }
  }, [step]);
  return (
    <Box>
      <Box
        my={"1.5rem"}
        p={{ base: "39px 17px", lg: "2.75rem" }}
        border={"1px solid rgba(0, 0, 0, 0.1)"}
        borderRadius={"1rem"}
      >
        {step == 1 ? (
          <>
            <Text
              fontWeight={"500"}
              fontSize={{ base: "20px", lg: "1.5rem" }}
              lineHeight={"2.1rem"}
              mb={"1rem"}
              color={"main_black_2"}
            >
              Pre-order Bulk Farm Produce
            </Text>
            <Text
              color={"rgba(15, 15, 15, 0.7)"}
              fontSize={{ base: "14px", lg: "16px" }}
            >
              Secure premium produce for your business directly from farms
              dedicated to sustainable and regenerative practices, boosting both
              your supply chain&apos;s sustainability and your brand&apos;s green
              credentials.
            </Text>
            <StoreFrontForm setStep={setStep} />
          </>
        ) : (
          <CompleteRequest />
        )}
      </Box>
    </Box>
  );
};

export default Storefront;

