import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { OverviewBoxProps } from "./types";

const OverviewBox = ({ content, heading, title }: OverviewBoxProps) => {
  return (
    <Box
      border={"1px solid rgba(0,0,0,0.1)"}
      p={{ base: "24px", lg: "2.888rem 2.406rem" }}
      borderRadius={"1.444rem"}
    >
      <Text fontWeight={500} fontSize={{ base: "12px", lg: "16px" }}>
        {title}
      </Text>
      <Text
        fontSize={{ base: "22.02px", lg: "2.5rem" }}
        color={"main_black_1"}
        fontWeight={500}
        mt={{ base: "6px", lg: "0.75rem" }}
        mb={{ base: "13px", lg: "1.5rem" }}
      >
        {heading}
      </Text>
      <Text
        color={"secondary_foreground"}
        fontSize={{ base: "14px", lg: "16px" }}
      >
        {content}
      </Text>
    </Box>
  );
};

export default OverviewBox;
