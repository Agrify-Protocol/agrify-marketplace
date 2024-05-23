"use client";

import { Flex, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";
import useObjectCheck from "@/hooks/useObjectCheck";
import AuthPageHeading from "@/components/AuthPageComponents/AuthPageHeading/AuthPageHeading";
import AuthPageBottom from "@/components/AuthPageComponents/AuthPageBottom/AuthPageBottom";
import PasswordInput from "@/components/Common/PasswordInput/PasswordInput";
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
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateDetails("email", e.target.value)
              }
            />
            <PasswordInput
              value={loginDetails.password}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateDetails("password", e.target.value)
              }
            />
          </Flex>
          <AuthPageSubmitButton
            detailsFilled={detailsFilled}
            isLoading={isLoading}
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
