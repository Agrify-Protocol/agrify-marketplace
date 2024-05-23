import { Box, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";
import { CustomInputProps } from "./types";
import { Inter_Display } from "@/fonts";
import { Dot } from "lucide-react";

const CustomInput = ({
  type,
  value,
  changeFunc,
  label,
  subtext,
  placeholder,
}: CustomInputProps) => {
  return (
    <Box fontFamily={Inter_Display.style.fontFamily}>
      <FormLabel fontFamily={Inter_Display.style.fontFamily} fontWeight={400}>
        {label}
      </FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        h={"3.5rem"}
        borderRadius={"1rem"}
        bg={"white"}
        value={value}
        onChange={changeFunc}
        color={"gray_1"}
        _placeholder={{ color: "gray_1" }}
        fontFamily={Inter_Display.style.fontFamily}
      />
      {subtext && (
        <Flex alignItems={"center"}>
          <Dot color="#A6A6A6" />
          <Text fontSize={"0.875rem"}>{subtext}</Text>
        </Flex>
      )}
    </Box>
  );
};

export default CustomInput;
