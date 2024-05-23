import { Box, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";
import { CustomInputProps } from "./types";

const CustomInput = ({
  type,
  value,
  changeFunc,
  label,
  subtext,
  placeholder,
}: CustomInputProps) => {
  return (
    <Box>
      <FormLabel>{label}</FormLabel>
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
      />
      <Text>{subtext}</Text>
    </Box>
  );
};

export default CustomInput;
