"use client";

import { Box, Flex, FormLabel, Select, Text } from "@chakra-ui/react";
import React from "react";
import { Inter_Display } from "@/fonts";
import { Dot } from "lucide-react";

interface CustomSelectProps {
  label?: string;
  value: string;
  changeFunc: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  id?: string;
  isInvalid?: boolean;
  errorMsg?: string;
  subtext?: string;
  options: { label: string; value: string }[];
}

const CustomSelect = ({
  label,
  value,
  changeFunc,
  placeholder,
  id,
  isInvalid,
  errorMsg,
  subtext,
  options,
}: CustomSelectProps) => {
  return (
    <Box fontFamily={Inter_Display.style.fontFamily} position="relative">
      {label && (
        <FormLabel fontFamily={Inter_Display.style.fontFamily} fontWeight={400}>
          {label}
        </FormLabel>
      )}

      <Select
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changeFunc}
        focusBorderColor="gray_2"
        h={"3.5rem"}
        borderColor={isInvalid && value !== "" ? "red" : "gray_2"}
        borderRadius={"1rem"}
        bg={"white"}
        color={"rgba(15, 15, 15, 0.7)"}
        fontFamily={Inter_Display.style.fontFamily}
        _placeholder={{ color: "gray_1", fontSize: "0.875rem" }}
      >
        {options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>

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

export default CustomSelect;
