"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { AvailableCarbonProps } from "./types";
import useProgressPills from "@/hooks/useProgressPills/useProgressPills";

const AvailableCarbon = ({
  available_carbon,
  total_carbon,
}: AvailableCarbonProps) => {
  const pillContainerRef = useRef(null);

  const [gapAndWidth, setGapAndWidth] = useState(() => {
    const screenWidth = window.innerWidth;
    return {
      gap: screenWidth >= 768 ? 4 : 5,
      width: screenWidth >= 768 ? 20 : 10,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setGapAndWidth({
        gap: screenWidth >= 768 ? 4 : 5,
        width: screenWidth >= 768 ? 20 : 10,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pills = useProgressPills({
    pillContainerRef,
    available_carbon,
    total_carbon,
    gapBetweenPillsInPx: gapAndWidth.gap,
    pillWidthInPx: gapAndWidth.width
  });

  return (
    <Flex flexDir={"column"}>
      <Flex alignItems={"center"}>
        <Box>
          <Text fontSize={"0.875rem"} mb={{ base: "8px", lg: "0.5rem" }}>
            Available Produce
          </Text>
          <Text fontSize={"1.5rem"} color={"main_black_2"} fontWeight={500}>
            {available_carbon?.toLocaleString()}kg
          </Text>
        </Box>
        {/* <CircleAlert size={"0.875rem"} color="rgba(1, 19, 8, 0.5)" /> */}
      </Flex>

      <Flex
        alignItems={"stretch"}
        justifyContent={"space-between"}
        gap={{ base: "3px", lg: "0.25rem" }}
        mt={"1.5rem"}
        ref={pillContainerRef}
        width={"100%"}
        minW={{ lg: "15rem" }}
      >
        {pills.map((pill) => {
          return (
            <Box
              key={pill.id}
              bg={pill.isFilled ? "agrify_green" : "gray_2"}
              minW={{ base: "7.75px", lg: "1.25rem" }}
              minH={"3.5rem"}
              borderRadius={"2rem"}
              transition={"all 0.25s ease-in-out"}
            ></Box>
          );
        })}
      </Flex>

      <Box mt={"1rem"} ml={"auto"}>
        <Text fontSize={"0.875rem"} mb={"0.5rem"} textAlign={"right"}>
          Total Produce
        </Text>
        <Text
          fontSize={"1.5rem"}
          color={"main_black_2"}
          fontWeight={500}
          textAlign={"right"}
        >
          {total_carbon?.toLocaleString()}
        </Text>
      </Box>
    </Flex>
  );
};

export default AvailableCarbon;
