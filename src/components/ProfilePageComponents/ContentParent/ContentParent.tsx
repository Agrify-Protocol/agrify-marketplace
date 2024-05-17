import { Box } from "@chakra-ui/react";
import React from "react";
import OverviewHolder from "../OverviewHolder/OverviewHolder";

const ContentParent = () => {
  return (
    <Box
      p={"2.814rem 2.893rem"}
      bgColor={"white"}
      borderRadius={"0.963rem"}
      my={"1.5rem"}
    >
      <OverviewHolder />
    </Box>
  );
};

export default ContentParent;
