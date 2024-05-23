"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import agrify_icon from "../../assets/agrify_icon.svg";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import useObjectCheck from "@/hooks/useObjectCheck";
import PasswordInput from "@/components/Layout/PasswordInput/PasswordInput";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const detailsFilled = useObjectCheck(loginDetails);

  const updateDetails = (key: string, value: string) => {
    setLoginDetails({ ...loginDetails, [key]: value });
  };

  return (
    <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        w={"34.875rem"}
        minH={"25.384rem"}
      >
        <Image src={agrify_icon} alt="" />
        <Heading
          fontWeight={500}
          fontSize={"2rem"}
          lineHeight={"38.4px"}
          mt={"3rem"}
        >
          Sign Into your account
        </Heading>
        <Text mt={"1rem"}>Enter you credentials to access your account</Text>

        <FormControl>
          <Flex
            w={"100%"}
            mt={"2rem"}
            mb={"3rem"}
            flexDir={"column"}
            gap={"1rem"}
          >
            <Input
              id="user_email"
              type="email"
              placeholder="Enter email address"
              h={"3.5rem"}
              borderRadius={"1rem"}
              bg={"white"}
              value={loginDetails.email}
              onChange={(e) => updateDetails("email", e.target.value)}
            />
            <PasswordInput
              value={loginDetails.password}
              changeFunc={updateDetails}
            />
          </Flex>
          <Button
            minH={"3.5rem"}
            borderRadius={"1rem"}
            bg={detailsFilled ? "agrify_green" : "white"}
            color={detailsFilled ? "white" : "unset"}
            w={"100%"}
            mb={"2.404rem"}
          >
            Sign In
          </Button>
        </FormControl>

        <Text>
          New to Agrify? <Link color={"#0CC14C"}>Sign Up</Link>
        </Text>
        <Text mt={"1rem"}>
          Forgot Password? <Link color={"#0CC14C"}>Reset Password</Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Login;
