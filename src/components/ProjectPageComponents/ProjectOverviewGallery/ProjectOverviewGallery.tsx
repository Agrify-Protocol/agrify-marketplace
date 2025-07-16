"use client";

import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import Project from "../Project/Project";
import { projectSections } from "@/context/ProjectsPageContext/constants";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { createFauxProjects } from "@/utils/createFauxProjects";
import ViewSectionButton from "@/components/Common/ViewSectionButton/ViewSectionButton";

const ProjectOverviewGallery = () => {
  const { project } = useProjectPageContext();
  const fauxProjects = createFauxProjects(project!);
  return (
    <Box mt={"3rem"}>
      <Text fontSize={"1.125rem"} color={"black"} p={"0.714rem"} pl={0}>
        Gallery
      </Text>
      <Grid
        gap={{ base: "13px", lg: "2.44rem" }}
        gridTemplateColumns={"repeat(auto-fill, minmax(17.5rem, 1fr))"}
        mt={"1.5rem"}
      >
        {fauxProjects?.map((project: any) => {
          return <Project key={project._id} project={project} isGalleryItem />;
        })}
      </Grid>
      <ViewSectionButton text="Go to gallery" section={projectSections[2]} />
    </Box>
  );
};

export default ProjectOverviewGallery;
