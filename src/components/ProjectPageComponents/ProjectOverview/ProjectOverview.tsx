import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AvailableCarbon from "../AvailableCarbon/AvailableCarbon";
import ProjectHighlights from "../ProjectHighlights/ProjectHighlights";
import { highlights } from "./constants";
import ProjectOverviewGallery from "../ProjectOverviewGallery/ProjectOverviewGallery";
import ViewSectionButton from "@/components/Layout/ViewSectionButton/ViewSectionButton";
import { projectSections } from "@/context/ProjectsPageContext/constants";

const ProjectOverview = () => {
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
        <Text p={"0.714rem"} color={"rgba(15, 15, 15, 0.7)"}>
          It’s been a whopping five years since I last shipped one of my
          Shipping blog posts, and boy do I have a good one to come back with.
          I’ve been working on Pierre for most of the last year and we’ve been
          shipping some amazing stuff. <br />
          <br /> With the release of macOS Sonoma and Safari 17.0 earlier this
          week, we can now add web apps to the dock. Here’s a brief rundown of
          my experience testing them and customizing how Pierre appears when
          added to the dock.
        </Text>
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
          mb={"1.5rem"}
        >
          Key Insights
        </Text>
        <AvailableCarbon available_carbon={35670} total_carbon={45000} />
        <ProjectHighlights highlights={highlights} />
        <ProjectOverviewGallery />
      </Box>
    </Flex>
  );
};

export default ProjectOverview;
