"use client";

import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import Project from "../Project/Project";
import { projectSections } from "@/context/ProjectsPageContext/constants";
import ViewSectionButton from "@/components/Layout/ViewSectionButton/ViewSectionButton";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { Project as ProjectType } from "@/context/GlobalContext/types";

const ProjectOverviewGallery = () => {
  const { project } = useProjectPageContext();
  const fauxProjects = project?.images.map((image) => {
    return {
      _id: image._id,
      title: image.description,
      tags: [],
      coverImage: image.image,
    } as ProjectType;
  });
  return (
    <Box mt={"3rem"}>
      <Text fontSize={"1.125rem"} color={"black"} p={"0.714rem"} pl={0}>
        Gallery
      </Text>
      <Grid
        gap={"2.44rem"}
        gridTemplateColumns={"repeat(auto-fill, minmax(17.5rem, 1fr))"}
        mt={"1.5rem"}
      >
        {fauxProjects?.map((project) => {
          return <Project key={project._id} project={project} isGalleryItem />;
        })}
      </Grid>
      <ViewSectionButton text="Go to gallery" section={projectSections[3]} />
    </Box>
  );
};

export default ProjectOverviewGallery;
