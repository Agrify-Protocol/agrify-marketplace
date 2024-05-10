import BackButton from "@/components/BackButton/BackButton";
import ProjectIntro from "@/components/ProjectIntro/ProjectIntro";
import { Box } from "@chakra-ui/react";
import React from "react";
import { project_overview } from "./constants";
import SectionTabs from "@/components/SectionTabs/SectionTabs";
import { ProjectPageProvider } from "@/context/ProjectsPageContext/ProjectsPageContext";
import SectionParent from "@/components/SectionParent/SectionParent";

const ProjectPage = () => {
  return (
    <ProjectPageProvider>
      <Box mt={"4rem"} px={"2.625rem"}>
        <BackButton />
        <ProjectIntro projectOverview={project_overview} />
        <SectionTabs />
        <SectionParent />
      </Box>
    </ProjectPageProvider>
  );
};

export default ProjectPage;
