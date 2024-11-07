"use client";

import { Box, Text } from "@chakra-ui/react";
import AuthPageSubmitButton from "../AuthPageComponents/AuthPageSubmitButton/AuthPageSubmitButton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import errorIcon from "../../../public/icons/error.svg";

const ErrorPage = () => {
  const route = useRouter();

  return (
    <Box
      maxW="558px"
      mx="auto"
      display="flex"
      alignItems="center"
      h="100vh"
      px={{ base: "28px", lg: 0 }}
    >
      <Box w="100%" textAlign="center">
        <Box mb="48px" display="flex" justifyContent="center">
          <Image src={errorIcon} alt="error icon" />
        </Box>
        <Text
          mb="32px"
          fontSize={{ base: "24px", lg: "32px" }}
          fontWeight="500"
          textColor="#282828"
        >
          Sorry , Page not found :(
        </Text>
        <AuthPageSubmitButton
          text="Go back home"
          isLoading={false}
          isDisabled={false}
          onClickFunc={() => route.push("/projects")}
        />
      </Box>
    </Box>
  );
};

export default ErrorPage;
