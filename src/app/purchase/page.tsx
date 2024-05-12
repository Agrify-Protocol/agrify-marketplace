import BackButton from "@/components/ProjectPage/BackButton/BackButton";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Purchase = () => {
  return (
    <Box px={"2.5rem"}>
      <Box mt={"4rem"}>
        <BackButton />
      </Box>

      <Box my={"7.688rem"} mx={"auto"} w={"38.648rem"}>
        <Box>
          <Text
            fontSize={"0.875rem"}
            color={"secondary_foreground"}
            mb={"0.872rem"}
          >
            You’re Purchasing
          </Text>
          <Text fontSize={"2rem"} color={"black"}>
            Greenfield Farms Carbon Project
          </Text>
        </Box>

        <Box
          bgColor={"white"}
          borderRadius={"1rem"}
          px={"2rem"}
          py={"2.813rem"}
          mt={"3rem"}
        ></Box>
      </Box>
    </Box>
  );
};

export default Purchase;
