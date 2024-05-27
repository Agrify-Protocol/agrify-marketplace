"use client";

import AuthPageHeading from "@/components/AuthPageComponents/AuthPageHeading/AuthPageHeading";
import AuthPageSubmitButton from "@/components/AuthPageComponents/AuthPageSubmitButton/AuthPageSubmitButton";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import useObjectCheck from "@/hooks/useObjectCheck";
import { Box, Flex, FormControl, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthPageBottom from "@/components/AuthPageComponents/AuthPageBottom/AuthPageBottom";
import { registerUser } from "@/services/api/auth";
import { compareStrings } from "@/utils/compareStrings";
import { passwordToast, successToast } from "./constants";
import { ToastData } from "@/utils/classes";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const toast = useToast();
  const [userData, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password_2: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const detailsFilled = useObjectCheck(userData);
  const handleChange = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleRegister = () => {
    setIsLoading(true);
    if (compareStrings(userData.password, userData.password_2)) {
      registerUser(userData)
        .then(() => {
          toast(successToast);
        })
        .catch((err) => {
          const errorToast = new ToastData(
            "Something went wrong!",
            err?.message,
            "error"
          );
          toast(errorToast);
        })
        .finally(() => {
          setIsLoading(false);
          router.push("/login");
        });
    } else {
      toast(passwordToast);
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Box w={"34.875rem"} mx={"auto"} my={"6.219rem"}>
        <AuthPageHeading
          main_heading="Register on Agrify"
          sub_heading="Enter you credentials to register on Agfiry"
        />
        <FormControl mt={"2rem"}>
          <Flex flexDir={"column"} gap={"1rem"} mb={"3rem"}>
            <CustomInput
              id="first_name"
              value={userData.first_name}
              type="text"
              placeholder="Enter First Name"
              label="First Name"
              changeFunc={(e) => handleChange("first_name", e.target.value)}
            />
            <CustomInput
              id="last_name"
              value={userData.last_name}
              type="text"
              placeholder="Enter Last Name"
              label="Last Name"
              changeFunc={(e) => handleChange("last_name", e.target.value)}
            />
            <CustomInput
              id="email"
              value={userData.email}
              type="email"
              placeholder="Enter email address"
              label="Email Address"
              changeFunc={(e) => handleChange("email", e.target.value)}
            />
            <CustomInput
              id="password_1"
              type="password"
              value={userData.password}
              placeholder="Enter password"
              label="Password"
              changeFunc={(e) => handleChange("password", e.target.value)}
              subtext="Minimum of 6 Characters"
            />
            <CustomInput
              id="password_2"
              type="password"
              value={userData.password_2}
              placeholder="Re-type Password"
              label="Re-type Password"
              changeFunc={(e) => handleChange("password_2", e.target.value)}
            />
          </Flex>
          <AuthPageSubmitButton
            isDisabled={!detailsFilled}
            text="Sign Up"
            detailsFilled={detailsFilled}
            isLoading={isLoading}
            onClickFunc={handleRegister}
          />
        </FormControl>
        <AuthPageBottom
          line_1={{
            question: "Already have an account?",
            link_text: "Sign In",
            route: "/login",
          }}
          line_2={{
            question: "Forgot Password?",
            link_text: "Reset Password",
            route: "reset-password",
          }}
        />
      </Box>
    </Box>
  );
};

export default Signup;
