"use client";

import AuthPageHeading from "@/components/AuthPageComponents/AuthPageHeading/AuthPageHeading";
import AuthPageSubmitButton from "@/components/AuthPageComponents/AuthPageSubmitButton/AuthPageSubmitButton";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import useObjectCheck from "@/hooks/useObjectCheck";
import { Box, Flex, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthPageBottom from "@/components/AuthPageComponents/AuthPageBottom/AuthPageBottom";

const Signup = () => {
  const [userData, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password_2: "",
  });
  const detailsFilled = useObjectCheck(userData);
  const handleChange = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
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
              value={userData.first_name}
              type="text"
              placeholder="Enter First Name"
              label="First Name"
              changeFunc={(e) => handleChange("first_name", e.target.value)}
            />
            <CustomInput
              value={userData.last_name}
              type="text"
              placeholder="Enter Last Name"
              label="Last Name"
              changeFunc={(e) => handleChange("last_name", e.target.value)}
            />
            <CustomInput
              value={userData.email}
              type="email"
              placeholder="Enter email address"
              label="Email Address"
              changeFunc={(e) => handleChange("email", e.target.value)}
            />
            <CustomInput
              type="password"
              value={userData.password}
              placeholder="Enter password"
              label="Password"
              changeFunc={(e) => handleChange("password", e.target.value)}
              subtext="Minimum of 6 Characters"
            />
            <CustomInput
              type="password"
              value={userData.password_2}
              placeholder="Re-type Password"
              label="Re-type Password"
              changeFunc={(e) => handleChange("password_2", e.target.value)}
              subtext="Minimum of 6 Characters"
            />
          </Flex>
          <AuthPageSubmitButton
            text="Sign Up"
            detailsFilled={detailsFilled}
            isLoading={false}
            onClickFunc={() => {}}
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
