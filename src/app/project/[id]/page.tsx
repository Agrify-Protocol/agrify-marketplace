import BackButton from "@/components/BackButton/BackButton";
import ProjectIntro from "@/components/ProjectIntro/ProjectIntro";
import { Box } from "@chakra-ui/react";
import React from "react";
import { project_overview } from "./constants";

const ProjectPage = () => {
  return (
    <Box mt={"4rem"} px={"2.625rem"}>
      <BackButton />
      <ProjectIntro projectOverview={project_overview} />
    </Box>
  );
};

export default ProjectPage;
