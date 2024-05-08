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
import React, { useLayoutEffect, useState } from "react";
import agrify_icon from "../../assets/agrify_icon.svg";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [detailsFilled, setDetailsFilled] = useState(false);

  const updateDetails = (key: string, value: string) => {
    setLoginDetails({ ...loginDetails, [key]: value });
  };

  useLayoutEffect(() => {
    const values = Object.values(loginDetails);
    const fieldsAreFilled = values.every((value) => {
      return value != "";
    });
    setDetailsFilled(fieldsAreFilled);
  }, [loginDetails]);

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
                {!showPassword ? (
                  <Eye color="#A6A6A6" />
                ) : (
                  <EyeOff color="#A6A6A6" />
                )}
              </Box>
              <Input
                id="user_password"
                type={!showPassword ? "password" : "text"}
                placeholder="Password"
                h={"3.5rem"}
                borderRadius={"1rem"}
                bg={"white"}
                value={loginDetails.password}
                onChange={(e) => updateDetails("password", e.target.value)}
              />
            </Box>
          </Flex>
          <Button
            minH={"3.5rem"}
            borderRadius={"1rem"}
            bg={detailsFilled ? "#0CC14C" : "white"}
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
