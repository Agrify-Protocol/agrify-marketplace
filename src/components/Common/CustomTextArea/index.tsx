"use client";

import { Box, Flex, FormLabel, Textarea, Text } from "@chakra-ui/react";
import React from "react";
import { Inter_Display } from "@/fonts";
import { Dot } from "lucide-react";

interface CustomTextAreaProps {
  label?: string;
  value: string;
  changeFunc: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  id?: string;
  isInvalid?: boolean;
  errorMsg?: string;
  subtext?: string;
  rows?: number;
}

const CustomTextArea = ({
  label,
  value,
  changeFunc,
  placeholder,
  id,
  isInvalid,
  errorMsg,
  subtext,
  rows = 4,
}: CustomTextAreaProps) => {
  return (
    <Box fontFamily={Inter_Display.style.fontFamily} position="relative">
      {label && (
        <FormLabel fontFamily={Inter_Display.style.fontFamily} fontWeight={400}>
          {label}
        </FormLabel>
      )}

      <Textarea
        id={id}
        value={value}
        onChange={changeFunc}
        placeholder={placeholder}
        focusBorderColor="gray_2"
        borderColor={isInvalid && value !== "" ? "red" : "gray_2"}
        borderRadius={"1rem"}
        bg={"white"}
        color={"rgba(15, 15, 15, 0.7)"}
        _placeholder={{ color: "gray_1", fontSize: "0.875rem" }}
        fontFamily={Inter_Display.style.fontFamily}
        resize="none"
        rows={rows}
      />

      {isInvalid && value !== "" && (
        <Text color="red" fontSize="12px">
          {errorMsg}
        </Text>
      )}

      {subtext && (
        <Flex alignItems={"center"} mt={"0.25rem"}>
          <Dot color="#A6A6A6" />
          <Text fontSize={"0.875rem"}>{subtext}</Text>
        </Flex>
      )}
    </Box>
  );
};

export default CustomTextArea;
