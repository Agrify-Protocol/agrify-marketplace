import { Inter_Display } from "@/fonts";
import { Box, Button } from "@chakra-ui/react";
import { LoaderCircle } from "lucide-react";
import React from "react";
import { AuthPageSubmitBtnProps } from "./types";

const AuthPageSubmitButton = ({
  detailsFilled,
  isLoading,
  text,
  onClickFunc,
}: AuthPageSubmitBtnProps) => {
  return (
    <Button
      minH={"3.5rem"}
      borderRadius={"1rem"}
      bg={detailsFilled ? "agrify_green" : "white"}
      color={detailsFilled ? "white" : "unset"}
      w={"100%"}
      mb={"2.404rem"}
      fontFamily={Inter_Display.style.fontFamily}
      fontWeight={500}
      justifyContent={"space-between"}
      textAlign={"center"}
      onClick={onClickFunc}
      rightIcon={
        isLoading ? (
          <LoaderCircle
            opacity={0.4}
            style={{ display: "block", marginLeft: "auto" }}
          />
        ) : undefined
      }
    >
      <Box w={"calc(100% - 24px)"} fontFamily={Inter_Display.style.fontFamily}>
        {text}
      </Box>
    </Button>
  );
};

export default AuthPageSubmitButton;
