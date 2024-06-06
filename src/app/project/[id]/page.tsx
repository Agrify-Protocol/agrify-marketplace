"use client";

import BackButton from "@/components/Layout/BackButton/BackButton";
import ProjectIntro from "@/components/ProjectPageComponents/ProjectIntro/ProjectIntro";
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { project_overview } from "./constants";
import SectionTabs from "@/components/ProjectPageComponents/SectionTabs/SectionTabs";
import {
  ProjectPageProvider,
  useProjectPageContext,
} from "@/context/ProjectsPageContext/ProjectsPageContext";
import SectionParent from "@/components/ProjectPageComponents/SectionParent/SectionParent";
import { projectSections } from "@/context/ProjectsPageContext/constants";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { getSingleProject } from "@/services/api/projects";
import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

const ProjectPage = () => {
  return (
    <ProjectPageProvider>
      <ProjectPageBody />
    </ProjectPageProvider>
  );
};

export default ProjectPage;

const ProjectPageBody = () => {
  const { currentSection, setCurrentSection, setProject, project } =
    useProjectPageContext();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getSingleProject(id as string).then((result) => {
      setProject(result);
    });
  }, [id]);

  return (
    <Box mt={"4rem"} px={"2.625rem"}>
      <BackButton />
      {project ? (
        <>
          <ProjectIntro projectOverview={project_overview} />
          <SectionTabs
            sections={projectSections}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
          <SectionParent />
        </>
      ) : (
        <Flex minH={"50vh"} alignItems={"center"} justifyContent={"center"}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <LoaderCircle size={50} color="#0CC14C" />
          </motion.div>
        </Flex>
      )}
    </Box>
  );
};
