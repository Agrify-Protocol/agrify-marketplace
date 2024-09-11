"use client";

import BackButton from "@/components/Layout/BackButton/BackButton";
import ProjectIntro from "@/components/ProjectPageComponents/ProjectIntro/ProjectIntro";
import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SectionTabs from "@/components/ProjectPageComponents/SectionTabs/SectionTabs";
import {
  ProjectPageProvider,
  useProjectPageContext,
} from "@/context/ProjectsPageContext/ProjectsPageContext";
import SectionParent from "@/components/ProjectPageComponents/SectionParent/SectionParent";
import { projectSections } from "@/context/ProjectsPageContext/constants";
import { useParams } from "next/navigation";
import { getSingleProject } from "@/services/api/projects";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import PageLoader from "@/components/Layout/PageLoader/PageLoader";

const ProjectPage = () => {
  return (
    <ProjectPageProvider>
      <ProjectPageBody />
    </ProjectPageProvider>
  );
};

export default ProjectPage;

const ProjectPageBody = () => {
  const { setProject, project, tabId, id } = useProjectPageContext();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getSingleProject(id as string).then((result) => {
        setProject(result);
      });
    }
  }, [id, user]);

  return (
    <Box mt={"4rem"} px={"2.625rem"}>
      <BackButton />
      {project ? (
        <>
          <ProjectIntro />
          <SectionTabs
            type="projects"
            sections={projectSections}
            currentSection={tabId}
            id={id}
          />
          <SectionParent />
        </>
      ) : (
        <PageLoader />
      )}
    </Box>
  );
};
