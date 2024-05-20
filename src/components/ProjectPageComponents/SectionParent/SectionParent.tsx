"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { projectSections } from "@/context/ProjectsPageContext/constants";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import Storefront from "../Storefront/Storefront";
import ProjectInsights from "../ProjectInsights/ProjectInsights";
import Purchases from "../Purchases/Purchases";

const SectionParent = () => {
  const { currentSection } = useProjectPageContext();
  return (
    <Box>
      {currentSection === projectSections[0] && <ProjectOverview />}
      {currentSection === projectSections[1] && <ProjectDetails />}
      {currentSection === projectSections[2] && <ProjectInsights />}
      {currentSection === projectSections[3] && <ProjectGallery />}
      {currentSection === projectSections[4] && <Storefront />}
      {currentSection === projectSections[5] && <Purchases />}
    </Box>
  );
};

export default SectionParent;
