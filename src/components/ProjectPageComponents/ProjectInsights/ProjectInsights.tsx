"use client";

import { Box, Text } from "@chakra-ui/react";
import InsightBarChart from "../InsightBarChart/InsightBarChart";

const ProjectInsights = () => {
  return (
    <Box minH={"30rem"}>
      <Box
        p={"2.5rem"}
        w={"58.5rem"}
        bgColor={"white"}
        my={"1.5rem"}
        borderRadius={"0.5rem"}
      >
        <Text
          fontWeight={450}
          fontSize={"1.5rem"}
          color={"black"}
          mb={"2.5rem"}
        >
          Land Primary Production Over Time
        </Text>
        <InsightBarChart />
      </Box>
    </Box>
  );
};

export default ProjectInsights;
