"use client";

import AuthPageHeading from "@/components/AuthPageComponents/AuthPageHeading/AuthPageHeading";
import AuthPageSubmitButton from "@/components/AuthPageComponents/AuthPageSubmitButton/AuthPageSubmitButton";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import useObjectCheck from "@/hooks/useObjectCheck";
import { Box, Flex, FormControl, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthPageBottom from "@/components/AuthPageComponents/AuthPageBottom/AuthPageBottom";
import { registerUser } from "@/services/api/auth";
import { successToast } from "./constants";
import { ToastData } from "@/utils/classes";
import { useRouter } from "next/navigation";
import { validateEmail, validateLength } from "@/utils/validationSchema";

const Signup = () => {
  const router = useRouter();
  const toast = useToast();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [tempPassword, setTempPassword] = useState("");
  const [isValid, setIsValid] = useState({
    firstname: true,
    lastname: true,
    email: true,
    password: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const detailsFilled = useObjectCheck(userData);

  const handleChange = (key: string, value: string) => {
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

    setUserData({ ...userData, [key]: value });
    setIsValid((prev) => ({ ...prev, [key]: validate() }));
  };

  const handleRegister = () => {
    setIsLoading(true);
    registerUser(userData)
      .then(() => {
        toast(successToast);
        router.push("/login");
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
      });
    // } else {
    //   toast(passwordToast);
    //   setIsLoading(false);
    // }
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
              value={userData.firstname}
              type="text"
              placeholder="Enter First Name"
              label="First Name"
              changeFunc={(e) => handleChange("firstname", e.target.value)}
              isInvalid={!isValid.firstname}
              errorMsg="Name can not be empty"
            />
            <CustomInput
              id="last_name"
              value={userData.lastname}
              type="text"
              placeholder="Enter Last Name"
              label="Last Name"
              changeFunc={(e) => handleChange("lastname", e.target.value)}
              isInvalid={!isValid.lastname}
              errorMsg="Name can not be empty"
            />
            <CustomInput
              id="email"
              value={userData.email}
              type="email"
              placeholder="Enter email address"
              label="Email Address"
              changeFunc={(e) => handleChange("email", e.target.value)}
              isInvalid={!isValid.email}
              errorMsg="Email address must be valid"
            />
            <CustomInput
              id="password_1"
              type="password"
              value={userData.password}
              placeholder="Enter password"
              label="Password"
              changeFunc={(e) => handleChange("password", e.target.value)}
              subtext="Minimum of 6 Characters"
              isInvalid={!isValid.password}
              errorMsg="Password must have minimum of 6 characters"
            />
            <CustomInput
              id="password_2"
              type="password"
              value={tempPassword}
              placeholder="Re-type Password"
              label="Re-type Password"
              changeFunc={(e) => setTempPassword(e.target.value)}
              isInvalid={userData.password !== tempPassword}
              errorMsg="Password must match"
            />
          </Flex>
          <AuthPageSubmitButton
            isDisabled={
              Object.values(isValid).some((item: boolean) => !item) ||
              Object.values(userData).some((item: string) => item === "") ||
              userData.password !== tempPassword
            }
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
