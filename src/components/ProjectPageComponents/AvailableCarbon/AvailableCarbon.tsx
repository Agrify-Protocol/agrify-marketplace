"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { AvailableCarbonProps } from "./types";
import { CircleAlert } from "lucide-react";
import useProgressPills from "@/hooks/useProgressPills";

const AvailableCarbon = ({
  available_carbon,
  total_carbon,
}: AvailableCarbonProps) => {
  const pillContainerRef = useRef(null);

  const pills = useProgressPills({
    pillContainerRef,
    available_carbon,
    total_carbon,
  });

  return (
    <Flex flexDir={"column"}>
      <Flex alignItems={"center"} gap={"0.75rem"}>
        <Box>
          <Text fontSize={"0.875rem"} mb={"0.5rem"}>
            Available Tonnes
          </Text>
          <Text fontSize={"1.5rem"} color={"main_black_2"} fontWeight={500}>
            {available_carbon.toLocaleString()} tc02e
          </Text>
        </Box>
        <CircleAlert size={"0.875rem"} color="rgba(1, 19, 8, 0.5)" />
      </Flex>

      <Flex
        alignItems={"stretch"}
        justifyContent={"space-between"}
        gap={"0.25rem"}
        mt={"1.5rem"}
        ref={pillContainerRef}
      >
        {pills.map((pill) => {
          return (
            <Box
              key={pill.id}
              bg={pill.isFilled ? "agrify_green" : "gray_2"}
              minW={"1.25rem"}
              minH={"3.5rem"}
              borderRadius={"2rem"}
              transition={"all 0.25s ease-in-out"}
            ></Box>
          );
        })}
      </Flex>

      <Box mt={"1rem"} ml={"auto"}>
        <Text fontSize={"0.875rem"} mb={"0.5rem"} textAlign={"right"}>
          Total C02 Tonnes
        </Text>
        <Text
          fontSize={"1.5rem"}
          color={"main_black_2"}
          fontWeight={500}
          textAlign={"right"}
        >
          {total_carbon.toLocaleString()}
        </Text>
      </Box>
    </Flex>
  );
};

export default AvailableCarbon;
