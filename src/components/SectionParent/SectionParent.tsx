"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { sections } from "@/context/ProjectsPageContext/constants";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import Storefront from "../Storefront/Storefront";

const SectionParent = () => {
  const { currentSection } = useProjectPageContext();
  return (
    <Box>
      {currentSection === sections[0] && <ProjectOverview />}
      {currentSection === sections[1] && <ProjectDetails />}
      {currentSection === sections[3] && <ProjectGallery />}
      {currentSection === sections[4] && <Storefront />}
    </Box>
  );
};

export default SectionParent;
