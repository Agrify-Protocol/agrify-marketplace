"use client";

import AuthPageHeading from "@/components/AuthPageComponents/AuthPageHeading/AuthPageHeading";
import AuthPageSubmitButton from "@/components/AuthPageComponents/AuthPageSubmitButton/AuthPageSubmitButton";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import PasswordInput from "@/components/Common/PasswordInput/PasswordInput";
import useObjectCheck from "@/hooks/useObjectCheck";
import { Box, Flex, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";

class ResetData {
  verification_code;
  new_password;
  new_password2;
  constructor(
    verification_code: string,
    new_password: string,
    new_password2: string
  ) {
    this.verification_code = verification_code;
    this.new_password = new_password;
    this.new_password2 = new_password2;
  }
}

const Reset = () => {
  const [resetData, setResetData] = useState(new ResetData("", "", ""));
  const [stage, setStage] = useState(1);
  const handleChange = (key: string, value: string) => {
    setResetData({ ...resetData, [key]: value });
  };

  const detailsAreFilled = useObjectCheck(resetData);
  const verificationCodeAvailable = resetData.verification_code != "";

  return (
    <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Box w={"34.875rem"}>
        <AuthPageHeading
          main_heading="Reset Password"
          sub_heading="Please enter the verification code sent to your mail."
        />
        <FormControl mt={"2rem"}>
          {stage == 1 ? (
            <Box mb={"3rem"}>
              <CustomInput
                type="text"
                placeholder="Verification Code"
                changeFunc={(e) =>
                  handleChange("verification_code", e.target.value)
                }
                value={resetData.verification_code}
                label="Enter Code"
              />
            </Box>
          ) : (
            <Flex flexDir={"column"} gap={"1.5rem"} mb={"3rem"}>
              <PasswordInput
                value={resetData.new_password}
                label="New Password"
                placeholder="preterlude 2930"
                subtext="6 Characters Minimum"
                changeFunc={(e) => handleChange("new_password", e.target.value)}
              />
              <PasswordInput
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
            text={stage == 1 ? "Continue" : "Reset Password"}
            detailsFilled={
              stage == 1 ? verificationCodeAvailable : detailsAreFilled
            }
            isLoading={false}
            onClickFunc={() => setStage(stage + 1)}
          />
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Reset;
