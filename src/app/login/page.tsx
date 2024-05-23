"use client";

import { Flex, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";
import useObjectCheck from "@/hooks/useObjectCheck";
import AuthPageHeading from "@/components/AuthPageComponents/AuthPageHeading/AuthPageHeading";
import AuthPageBottom from "@/components/AuthPageComponents/AuthPageBottom/AuthPageBottom";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import AuthPageSubmitButton from "@/components/AuthPageComponents/AuthPageSubmitButton/AuthPageSubmitButton";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const detailsFilled = useObjectCheck(loginDetails);
  const [isLoading, setIsLoading] = useState(false);

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
        <AuthPageHeading
          main_heading="Sign Into your account"
          sub_heading="Enter you credentials to access your account"
        />

        <FormControl>
          <Flex
            w={"100%"}
            mt={"2rem"}
            mb={"3rem"}
            flexDir={"column"}
            gap={"1rem"}
          >
            <CustomInput
              type="email"
              placeholder="Enter email address"
              value={loginDetails.email}
              changeFunc={(e) => updateDetails("email", e.target.value)}
            />
            <CustomInput
              type="password"
              placeholder="Password"
              value={loginDetails.password}
              changeFunc={(e) => updateDetails("password", e.target.value)}
            />
          </Flex>
          <AuthPageSubmitButton
            text="Sign In"
            detailsFilled={detailsFilled}
            isLoading={isLoading}
            onClickFunc={() => {}}
          />
        </FormControl>

        <AuthPageBottom
          line_1={{
            question: "New to Agrify?",
            link_text: "Sign Up",
            route: "/signup",
          }}
          line_2={{
            question: "Forgot Password?",
            link_text: "Reset Password",
            route: "/reset-password",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Login;
