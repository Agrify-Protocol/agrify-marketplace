import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
import React from "react";

const Button = ({
  children,
  ...props
}: { children: React.ReactNode } & ButtonProps) => {
  return (
    <ChakraButton
      w={"100%"}
      bgColor={"agrify_green"}
      fontWeight={500}
      color={"white"}
      borderRadius={"2.119rem"}
      _hover={{
        bg: "#0ba842",
      }}
      fontSize={{ base: "14px", lg: "16px" }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
