"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { sections } from "@/context/ProjectsPageContext/constants";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import ProjectGallery from "../ProjectGallery/ProjectGallery";

const SectionParent = () => {
  const { currentSection } = useProjectPageContext();
  return (
    <Box>
      {currentSection === sections[0] && <ProjectOverview />}
      {currentSection === sections[1] && <ProjectDetails />}
      {currentSection === sections[3] && <ProjectGallery />}
    </Box>
  );
};

export default SectionParent;
