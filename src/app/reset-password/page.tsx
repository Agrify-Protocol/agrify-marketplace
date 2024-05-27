"use client";

import AuthPageHeading from "@/components/AuthPageComponents/AuthPageHeading/AuthPageHeading";
import AuthPageSubmitButton from "@/components/AuthPageComponents/AuthPageSubmitButton/AuthPageSubmitButton";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import useObjectCheck from "@/hooks/useObjectCheck";
import { getVerificationToken } from "@/services/api/auth";
import { ToastData } from "@/utils/classes";
import { compareStrings } from "@/utils/compareStrings";
import { Box, Flex, FormControl, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { passwordToast } from "../signup/constants";

const Reset = () => {
  const router = useRouter();
  const toast = useToast();
  const [resetData, setResetData] = useState({
    email: "",
    verification_code: "",
    new_password: "",
    new_password2: "",
  });
  const [stage, setStage] = useState(1);
  const handleChange = (key: string, value: string) => {
    setResetData({ ...resetData, [key]: value });
  };

  const detailsAreFilled = useObjectCheck(resetData);
  const verificationCodeAvailable = resetData.verification_code != "";

  const handleSubmit = () => {
    switch (stage) {
      case 1:
        getVerificationToken({ email: resetData.email })
          .finally(() => {
            setStage(stage + 1);
          })
          .catch((err) => {
            const errToast = new ToastData(
              "Something went wrong!",
              err.message,
              "error"
            );
            toast(errToast);
            setStage(1);
          });
        break;
      case 2:
        setStage(stage + 1);
        break;
      case 3:
        if (compareStrings(resetData.new_password, resetData.new_password2)) {
          router.push("/login");
        } else {
          toast(passwordToast);
        }
        break;
    }
  };

  const button_disabled_map: { [x: number]: boolean } = {
    1: resetData.email !== "",
    2: resetData.verification_code !== "",
    3: detailsAreFilled,
  };

  return (
    <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Box w={"34.875rem"}>
        <AuthPageHeading
          main_heading="Reset Password"
          sub_heading="Please enter the verification code sent to your mail."
        />
        <FormControl mt={"2rem"}>
          {stage == 1 && (
            <Box mb={"3rem"}>
              <CustomInput
                id="email_address"
                type="email"
                placeholder="agrify@agrifyafrica.xyz"
                changeFunc={(e) => handleChange("email", e.target.value)}
                value={resetData.email}
                label="Email Address"
              />
            </Box>
          )}

          {stage == 2 && (
            <Box mb={"3rem"}>
              <CustomInput
                id="verification_code"
                type="text"
                placeholder="Verification Code"
                changeFunc={(e) =>
                  handleChange("verification_code", e.target.value)
                }
                value={resetData.verification_code}
                label="Enter Code"
              />
            </Box>
          )}

          {stage == 3 && (
            <Flex flexDir={"column"} gap={"1.5rem"} mb={"3rem"}>
              <CustomInput
                id="password_1"
                type="password"
                value={resetData.new_password}
                label="New Password"
                placeholder="preterlude 2930"
                subtext="6 Characters Minimum"
                changeFunc={(e) => handleChange("new_password", e.target.value)}
              />
              <CustomInput
                id="password_2"
                type="password"
                value={resetData.new_password2}
                label="Re-type Password"
                placeholder="Re-type Password"
                changeFunc={(e) =>
                  handleChange("new_password2", e.target.value)
                }
              />
            </Flex>
          )}

          <AuthPageSubmitButton
            isDisabled={!button_disabled_map[stage]}
            text={stage == 1 ? "Continue" : "Reset Password"}
            detailsFilled={
              stage == 1 ? verificationCodeAvailable : detailsAreFilled
            }
            isLoading={false}
            onClickFunc={handleSubmit}
          />
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Reset;
