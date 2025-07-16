"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { OptionProps } from "./types";

import { usePaymentContext } from "@/context/PaymentContext/PaymentContext";
import { payForCarbon } from "@/services/api/payments";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { PaymentPayload } from "@/services/api/types";

const PaymentOption = () => {
  const { chosenProject } = useGlobalContext(); // orderedAmount
  const { setPaymentStage } = usePaymentContext();
  const [chosenOption, setChosenOption] = useState(0);
  const handleSelect = (optionNumber: number) => {
    setChosenOption(optionNumber);
  };

  const handleSubmit = () => {
    switch (chosenOption) {
      case 1:
        const data: PaymentPayload = {
          projectId: chosenProject?._id as string,
          tonnes: 0, //+orderedAmount,
        };
        payForCarbon(data).then((response) => {
          window.open(response.data.authorization_url, "_self");
        });
        break;
      case 2:
        setPaymentStage(2);
        break;
    }
  };

  return (
    <Box
      w={{ lg: "34.875rem" }}
      mx={"auto"}
      my={{ base: "64px", lg: "12.25rem" }}
    >
      <Box mb={"9.625rem"}>
        <Option
          text="Pay with Credit card"
          optionNumber={1}
          isChosen={chosenOption == 1}
          handleSelect={handleSelect}
        />
        <Option
          text="Generate Invoice"
          optionNumber={2}
          isChosen={chosenOption == 2}
          handleSelect={handleSelect}
        />
      </Box>

      <Button
        w={"100%"}
        h={"3.5rem"}
        borderRadius={"1.5rem"}
        bgColor={chosenOption > 0 ? "agrify_green" : "gray_3"}
        fontWeight={500}
        color={chosenOption > 0 ? "white" : "unset"}
        transition={"all 0.25s ease-in-out"}
        onClick={handleSubmit}
        disabled={!chosenOption}
        cursor={chosenOption ? "pointer" : "not-allowed"}
        _hover={{
          bg: chosenOption ? "#0ba842" : "gray_3",
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default PaymentOption;

const Option = ({
  text,
  optionNumber,
  isChosen,
  handleSelect,
}: OptionProps) => {
  return (
    <Flex
      bgColor={"#F5F5F5"}
      py={{ base: "12px", lg: "1.5rem" }}
      px={{ lg: "2.875rem" }}
      borderRadius={"1rem"}
      alignItems={"center"}
      gap={"1rem"}
      mb={"1.5rem"}
      cursor={"pointer"}
      onClick={() => handleSelect(optionNumber)}
    >
      <Box
        border={"1px solid"}
        borderColor={isChosen ? "agrify_green" : "unset"}
        w={"1.125rem"}
        h={"1.125rem"}
        borderRadius={"50%"}
        bgColor={isChosen ? "agrify_green" : "transparent"}
        transition={"all 0.25s ease-in-out"}
      ></Box>
      <Text
        color={"black"}
        fontWeight={450}
        fontSize={{ base: "16px", lg: "1.125rem" }}
      >
        {text}
      </Text>
    </Flex>
  );
};
