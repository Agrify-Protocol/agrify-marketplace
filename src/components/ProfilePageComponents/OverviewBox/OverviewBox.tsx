import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { OverviewBoxProps } from "./types";

const OverviewBox = ({ content, heading, title }: OverviewBoxProps) => {
  return (
    <Box
      border={"1px solid rgba(0,0,0,0.1)"}
      p={"2.888rem 2.406rem"}
      borderRadius={"1.444rem"}
    >
      <Text fontWeight={500}>{title}</Text>
      <Text
        fontSize={"2.5rem"}
        color={"main_black_1"}
        fontWeight={500}
        mt={"0.75rem"}
        mb={"1.5rem"}
      >
        {heading}
      </Text>
      <Text color={"secondary_foreground"}>{content}</Text>
    </Box>
  );
};

export default OverviewBox;
