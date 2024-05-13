"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { OptionProps } from "./types";

import { usePaymentContext } from "@/context/PaymentContext/PaymentContext";

const PaymentOption = () => {
  const { setPaymentStage } = usePaymentContext();
  const [chosenOption, setChosenOption] = useState(0);
  const handleSelect = (optionNumber: number) => {
    setChosenOption(optionNumber);
  };

  const handleSubmit = () => {
    if (chosenOption == 2) {
      setPaymentStage(2);
    }
  };

  return (
    <Box w={"34.875rem"} mx={"auto"} my={"12.25rem"}>
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
      py={"1.5rem"}
      px={"2.875rem"}
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
      <Text color={"black"} fontWeight={450} fontSize={"1.125rem"}>
        {text}
      </Text>
    </Flex>
  );
};
