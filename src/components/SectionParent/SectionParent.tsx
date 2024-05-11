"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { sections } from "@/context/ProjectsPageContext/constants";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const SectionParent = () => {
  const { currentSection } = useProjectPageContext();
  return (
    <Box>
      {currentSection === sections[0] && <ProjectOverview />}
      {currentSection === sections[1] && <ProjectDetails />}
    </Box>
  );
};

export default SectionParent;
