"use client";

import { Box, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { CustomInputProps, EyeContainerProps } from "./types";
import { Inter_Display } from "@/fonts";
import { Dot, Eye, EyeOff } from "lucide-react";

const CustomInput = ({
  type,
  value,
  changeFunc,
  label,
  subtext,
  placeholder,
  id,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [dynamicType, setDynamicType] = useState("password");
  return (
    <Box fontFamily={Inter_Display.style.fontFamily}>
      <FormLabel fontFamily={Inter_Display.style.fontFamily} fontWeight={400}>
        {label}
      </FormLabel>
      <Box position={"relative"}>
        <Input
          id={id}
          type={type !== "password" ? type : dynamicType}
          placeholder={placeholder}
          h={"3.5rem"}
          borderRadius={"1rem"}
          bg={"white"}
          value={value}
          onChange={changeFunc}
          color={"gray_1"}
          _placeholder={{ color: "gray_1", fontSize: "0.875rem" }}
          fontFamily={Inter_Display.style.fontFamily}
        />
        {type == "password" && (
          <EyeContainer
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setDynamicType={setDynamicType}
          />
        )}
      </Box>
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

const EyeContainer = ({
  showPassword,
  setShowPassword,
  setDynamicType,
}: EyeContainerProps) => {
  const handleClick = () => {
    setShowPassword(!showPassword);
    showPassword ? setDynamicType("password") : setDynamicType("text");
  };

  return (
    <Box
      position={"absolute"}
      top={"calc(100% / 2)"}
      bottom={"calc(100% / 2)"}
      right={"1rem"}
      zIndex={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      cursor={"pointer"}
      onClick={handleClick}
    >
      {!showPassword ? <Eye color="#A6A6A6" /> : <EyeOff color="#A6A6A6" />}
    </Box>
  );
};
