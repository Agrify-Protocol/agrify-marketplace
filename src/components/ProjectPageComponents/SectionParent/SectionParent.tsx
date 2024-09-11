"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import Storefront from "../Storefront/Storefront";
import ProjectInsights from "../ProjectInsights/ProjectInsights";
import Purchases from "../Purchases/Purchases";

const SectionParent = () => {
  const { paramsId } = useProjectPageContext();
  const currentBody = () => {
    switch (paramsId) {
      case "overview":
        return <ProjectOverview />;
      case "project details":
        return <ProjectDetails />;
      case "insights":
        return <ProjectInsights />;
      case "gallery":
        return <ProjectGallery />;
      case "storefront":
        return <Storefront />;
      case "my purchases":
        return <Purchases />;
      default:
        return <ProjectOverview />;
    }
  };

  return <Box>{currentBody()}</Box>;
};

export default SectionParent;
