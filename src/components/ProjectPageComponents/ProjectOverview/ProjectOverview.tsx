"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AvailableCarbon from "../AvailableCarbon/AvailableCarbon";
import ProjectHighlights from "../ProjectHighlights/ProjectHighlights";
import ProjectOverviewGallery from "../ProjectOverviewGallery/ProjectOverviewGallery";
import ViewSectionButton from "@/components/Layout/ViewSectionButton/ViewSectionButton";
import { projectSections } from "@/context/ProjectsPageContext/constants";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { getCreditPeriod } from "@/utils/getCreditPeriod";

const ProjectOverview = () => {
  const { project } = useProjectPageContext();

  if (!project) {
    return null;
  }

  const highlights = {
    price: project.projectToken.price,
    location: project.location,
    crediting_period: getCreditPeriod(project)!,
    contract_type: project.contractType,
  };

  console.log(project)

  return (
    <Flex>
      <Box width={"23%"} py={"1.494rem"}>
        <Text
          color={"black"}
          fontWeight={450}
          fontSize={"1.125rem"}
          p={"0.714rem"}
        >
          About
        </Text>
        <Text p={"0.714rem"} color={"rgba(15, 15, 15, 0.7)"}>{project?.about}</Text>
        <ViewSectionButton
          text="View Project details"
          section={projectSections[1]}
        />
      </Box>
      <Box
        width={"77%"}
        py={"1.494rem"}
        px={"1.25rem"}
        pr={0}
        borderLeft={"1px"}
        borderLeftStyle={"dashed"}
        borderLeftColor={"rgba(0,0,0,0.1)"}
      >
        <Text
          color={"black"}
          fontWeight={450}
          fontSize={"1.125rem"}
          p={"0.714rem"}
          pl={"unset"}
          mb={"1.5rem"}
        >
          Key Insights
        </Text>
        <AvailableCarbon
          available_carbon={project.projectToken.availableTonnes}
          total_carbon={project.projectToken.totalTonnes}
        />
        <ProjectHighlights highlights={highlights} />
        <ProjectOverviewGallery />
      </Box>
    </Flex>
  );
};

export default ProjectOverview;
