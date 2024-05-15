"use client";

import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { AvailableCarbonProps, PillsData } from "./types";
import { CircleAlert } from "lucide-react";

const AvailableCarbon = ({
  available_carbon,
  total_carbon,
}: AvailableCarbonProps) => {
  const numberOfPills = 42;

  const arrayOfObjects: PillsData = useMemo(() => {
    const data: PillsData = [];
    for (let i = 0; i < numberOfPills; i++) {
      data.push({ id: i + 1, isFilled: false });
    }
    return data;
  }, []);

  const [pills, setPills] = useState(arrayOfObjects);

  useEffect(() => {
    const fillPills = () => {
      const availablePercentage = Math.ceil(
        (available_carbon / total_carbon) * 100
      );

      const numberOfPillsToFill = Math.ceil(
        (availablePercentage / 100) * numberOfPills
      );

      const updatedArrayOfPillObjects = pills.map((object) => {
        if (object.id < numberOfPillsToFill) {
          return { ...object, isFilled: true };
        } else return { ...object, isFilled: false };
      });

      setPills(updatedArrayOfPillObjects);
    };
    fillPills();
  }, [available_carbon, total_carbon]);

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
