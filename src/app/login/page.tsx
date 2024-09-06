"use client";

import { Flex, FormControl, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthPageHeading from "@/components/AuthPageComponents/AuthPageHeading/AuthPageHeading";
import AuthPageBottom from "@/components/AuthPageComponents/AuthPageBottom/AuthPageBottom";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import AuthPageSubmitButton from "@/components/AuthPageComponents/AuthPageSubmitButton/AuthPageSubmitButton";
import { loginUser } from "@/services/api/auth";
import { errorToast, successToast } from "./constants";
import { useRouter } from "next/navigation";
import { preserveSession } from "../lib/actions";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { validateEmail, validateLength } from "@/utils/validationSchema";

const Login = () => {
  const toast = useToast();
  const router = useRouter();
  const { setUser, setAccessToken, setRefreshToken } = useAuthContext();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [isLoading, setIsLoading] = useState(false);

  const updateDetails = (key: string, value: string) => {
    const validate = () => {
      switch (key) {
        case "email":
          return validateEmail(value);
        case "password":
          return validateLength(value, 6);
        default:
          return true;
      }
    };

    setIsValid((prev) => ({ ...prev, [key]: validate() }));
    setLoginDetails({ ...loginDetails, [key]: value });
  };

  const handleLogin = () => {
    setIsLoading(true);
    loginUser(loginDetails)
      .then((result) => {
        preserveSession(result.user, result.token, result.refreshToken).then(
          () => {
            setUser(result.user);
            setAccessToken(result.token);
            setRefreshToken(result.refreshToken);
            toast(successToast);
            router.push("/");
          }
        );
      })
      .catch(() => {
        toast(errorToast);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
              id="email_input"
              type="email"
              placeholder="Enter email address"
              isInvalid={!isValid.email}
              value={loginDetails.email}
              changeFunc={(e) => updateDetails("email", e.target.value)}
              errorMsg="Email address must be valid"
            />
            <CustomInput
              id="password_input"
              type="password"
              placeholder="Password"
              isInvalid={!isValid.password}
              value={loginDetails.password}
              changeFunc={(e) => updateDetails("password", e.target.value)}
              errorMsg="Password must have minimum of 6 characters"
            />
          </Flex>
          <AuthPageSubmitButton
            text="Sign In"
            isLoading={isLoading}
            onClickFunc={handleLogin}
            isDisabled={
              Object.values(isValid).some((item) => !item) ||
              Object.values(loginDetails).some((item) => item === "")
            }
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
