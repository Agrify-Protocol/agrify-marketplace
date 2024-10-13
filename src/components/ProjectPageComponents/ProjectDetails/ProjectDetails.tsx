"use client";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import FarmlistTable from "../FarmlistTable/FarmlistTable";

const ProjectDetails = () => {
  const { project } = useProjectPageContext();
  if (!project) {
    return null;
  }

  const descSection = [
    { title: "Title of Project", value: project.title },
    { title: "Description", value: project.description },
    { title: "Mission", value: project.mission },
    { title: "Location", value: project.location },
    {
      title: "Coordinates",
      value: `${project.latitude}°N, ${project.longitude}°E`,
    },
    { title: "Project Activity", value: project.methodology },
  ];

  return (
    <>
      <Box
        border={"1.1px solid rgba(0,0,0,0.1)"}
        my={"1.5rem"}
        px={{ base: "16px", lg: "2.748rem" }}
        pt={{ base: "38px", lg: "2.954rem" }}
        pb={{ base: "28px", lg: "2.954rem" }}
        borderRadius={"1.099rem"}
      >
        <Text
          fontSize={{ base: "20px", lg: "1.5rem" }}
          fontWeight={450}
          color={"main_black_1"}
        >
          1. Project Description
        </Text>
        <Box mt={{ base: "28px", lg: "2.859rem" }}>
          {descSection.map((item, index) => (
            <Box
              mb={index !== descSection.length - 1 ? "1.649rem" : "0"}
              key={item.title}
            >
              <Text fontSize={{ base: "14px", lg: "16px" }}>{item.title}</Text>
              <Text fontSize={{ lg: "1.25rem" }} color={"black"}>
                {item.value}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
      <FarmlistTable farm_list={project.farms} />
    </>
  );
};

export default ProjectDetails;
