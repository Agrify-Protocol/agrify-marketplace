"use client";

import { Box, Input } from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { PasswordInputProps } from "./types";
import CustomInput from "../CustomInput/CustomInput";

const PasswordInput = ({ value, changeFunc }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box position={"relative"}>
      <Box
        position={"absolute"}
        top={"calc(3.5rem / 2)"}
        bottom={"calc(3.5rem / 2)"}
        right={"1rem"}
        zIndex={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
        onClick={() => setShowPassword(!showPassword)}
      >
        {!showPassword ? <Eye color="#A6A6A6" /> : <EyeOff color="#A6A6A6" />}
      </Box>
      <CustomInput
        type={!showPassword ? "password" : "text"}
        placeholder="Password"
        value={value}
        changeFunc={changeFunc}
      />
    </Box>
  );
};

export default PasswordInput;
