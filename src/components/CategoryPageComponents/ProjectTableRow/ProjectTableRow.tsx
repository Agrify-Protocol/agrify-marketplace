"use client";

import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useRef } from "react";
import { ProjectTableRowProps } from "./types";
import { generateRandomColorWithOpacity } from "@/utils/randomColors";
import useProgressPills from "@/hooks/useProgressPills";
import { useRouter } from "next/navigation";

const ProjectTableRow = ({
  project,
  total_carbon_credits,
}: ProjectTableRowProps) => {
  const router = useRouter();
  const { rgb, rgba } = generateRandomColorWithOpacity();
  const pillRef = useRef(null);
  const pills = useProgressPills({
    pillContainerRef: pillRef,
    available_carbon: project.totalTonnes,
    total_carbon: total_carbon_credits,
    pillWidthInPx: 4,
    gapBetweenPillsInPx: 3.88,
  });

  return (
    <Grid
      p={"1rem 3rem"}
      gridTemplateColumns={"repeat(4, 1fr)"}
      border={"1px solid"}
      borderColor={"transparent"}
      borderBottomColor={"rgba(0, 0, 0, 0.03)"}
      alignItems={"center"}
      cursor={"pointer"}
      transition={"all 0.25s ease-in-out"}
      _hover={{ borderColor: "#0CC14C" }}
      onClick={() => router.push(`/project/${project.projectID}`)}
    >
      <Box>
        <Flex gap={"0.5rem"} fontSize={"1.125rem"} fontWeight={450}>
          <Box
            w={"1.5rem"}
            h={"1.5rem"}
            borderRadius={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={rgb}
            bgColor={rgba}
            fontSize={"1rem"}
            fontWeight={400}
          >
            {project.state[0]}
          </Box>
          {project.state}
        </Flex>
      </Box>

      <Box textAlign={"center"}>
        <Box
          w={"fit-content"}
          mx={"auto"}
          bgColor={"#EEEEEE"}
          p={"0.313rem 0.75rem"}
          borderRadius={"0.5rem"}
        >
          {project.country}
        </Box>
      </Box>

      <Box textAlign={"center"}>
        <Box>{project.farms}</Box>
      </Box>

      <Box textAlign={"right"}>
        <Flex alignItems={"center"} gap={"1rem"}>
          <Box w={"50%"}>{project.totalTonnes.toLocaleString()}</Box>
          <Flex
            w={"50%"}
            ref={pillRef}
            gap={"0.243rem"}
            justifyContent={"space-between"}
          >
            {pills.map((pill) => {
              return (
                <Box
                  key={pill.id}
                  bg={pill.isFilled ? "agrify_green" : "gray_2"}
                  minW={"0.25rem"}
                  minH={"1.688rem"}
                  borderRadius={"2rem"}
                  transition={"all 0.25s ease-in-out"}
                ></Box>
              );
            })}
          </Flex>
        </Flex>
      </Box>
    </Grid>
  );
};

export default ProjectTableRow;
