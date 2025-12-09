import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
import React from "react";

const Button = ({
  children,
  disabled,
  ...props
}: { children: React.ReactNode } & ButtonProps) => {
  return (
    <ChakraButton
      w={"100%"}
      bgColor={disabled ? "white" : "agrify_green"}
      fontWeight={500}
      color={disabled ? "black" : "white"}
      borderRadius={"2.119rem"}
      _hover={
        disabled
          ? {}
          : {
              bg: "#0ba842",
            }
      }
      disabled={disabled}
      cursor={disabled ? "not-allowed" : "pointer"}
      fontSize={{ base: "14px", lg: "16px" }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
