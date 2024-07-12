"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import StoreFrontForm from "../StoreFrontForm/StoreFrontForm";
import check from "../../../assets/icon-park-solid_check-one.svg";
import Image from "next/image";

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
        p={"2.75rem"}
        border={"1px solid rgba(0, 0, 0, 0.1)"}
        borderRadius={"1rem"}
      >
        {step == 1 ? (
          <>
            <Text
              fontWeight={"500"}
              fontSize={"1.5rem"}
              lineHeight={"2.1rem"}
              mb={"1rem"}
              color={"main_black_2"}
            >
              Buy Farm Produce
            </Text>
            <Text w={"50%"} color={"rgba(15, 15, 15, 0.7)"}>
              It’s been a whopping five years since I last shipped one of my
              Shipping blog posts, and boy do I have a good one to come back
              with.{" "}
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

const CompleteRequest = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      py={"3rem"}
    >
      <Image src={check} alt="" />
      <Text
        fontSize={"1.5rem"}
        fontWeight={500}
        color={"black"}
        mt={"3.799rem"}
        mb={"1.5rem"}
      >
        Request Received!
      </Text>
      <Text
        color={"rgba(15, 15, 15, 0.7)"}
        textAlign={"center"}
        w={"27.563rem"}
      >
        You have successfully requested for a produce! We would reach out to you
        shortly with more details and how to proceed with the next steps{" "}
      </Text>
    </Flex>
  );
};
