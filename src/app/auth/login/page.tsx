"use client";

import { Flex, FormControl, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthPageHeading from "@/components/AuthPageComponents/AuthPageHeading/AuthPageHeading";
import AuthPageBottom from "@/components/AuthPageComponents/AuthPageBottom/AuthPageBottom";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import AuthPageSubmitButton from "@/components/AuthPageComponents/AuthPageSubmitButton/AuthPageSubmitButton";
import { loginUser } from "@/services/api/auth";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { validateEmail, validateLength } from "@/utils/validationSchema";
import { preserveSession } from "@/app/lib/actions";
import { successToast } from "./constants";
import { useRouter, useSearchParams } from "next/navigation";
import { createProductRequest } from "@/services/api/projects";

const Login = () => {
  const toast = useToast();
  const { setUser, setAccessToken, setRefreshToken } = useAuthContext();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category");
  const sourcing_tool = searchParams.get("sourcing-tool");
  const redirect = searchParams.get("redirect");

  const id = searchParams.get("id");

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

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const result = await loginUser(loginDetails, toast);
      if (result) {
        await preserveSession(result.user, result.token, result.refreshToken);
        setUser(result.user);
        setAccessToken(result.token);
        setRefreshToken(result.refreshToken);
        toast(successToast);

        if (category && id) {
          router.push(`/home/organic-produce/category/${category}/${id}`);
        } else if (sourcing_tool) {
          const form = localStorage.getItem("sourcing_tool_form");
          const res = await createProductRequest(JSON.parse(form!), toast);

          if (res?.message) {
            localStorage.removeItem("sourcing_tool_form");
            router.push("/home/sourcing-tool/success");
          }
        } else if (redirect) {
          router.push(`/home/climate-arts/${id}`);
        } else {
          router.push("/home");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingX={{ base: "24px", lg: 0 }}
    >
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        w={"34.875rem"}
        minH={"25.384rem"}
      >
        <AuthPageHeading
          main_heading={
            sourcing_tool
              ? "Sign in to submit request"
              : "Sign into your account"
          }
          sub_heading="Enter you credentials to access your account"
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          style={{ width: "100%" }}
        >
          <FormControl>
            <Flex
              mt={{ base: "32px", lg: "2rem" }}
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
              type="submit"
              onClickFunc={() => null}
              isDisabled={
                Object.values(isValid).some((item) => !item) ||
                Object.values(loginDetails).some((item) => item === "")
              }
            />
          </FormControl>
        </form>

        <AuthPageBottom
          line_1={{
            question: "New to Agrify?",
            link_text: "Sign Up",
            route: "/auth/signup",
          }}
          line_2={{
            question: "Forgot Password?",
            link_text: "Reset Password",
            route: "/auth/reset-password",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Login;
