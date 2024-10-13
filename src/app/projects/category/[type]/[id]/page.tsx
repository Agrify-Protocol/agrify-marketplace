"use client";

import React from "react";
import {
  ProjectPageProvider,
} from "@/context/ProjectsPageContext/ProjectsPageContext";
import ProjectPageBody from "@/components/ProjectPageComponents/ProjectPageBody/ProjectPageBody";

const ProjectPage = () => {
  return (
    <ProjectPageProvider>
      <ProjectPageBody />
    </ProjectPageProvider>
  );
};

export default ProjectPage;


