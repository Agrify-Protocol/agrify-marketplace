import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import Project from "../Project/Project";
import { projects } from "../ProjectsContainer/constants";
import { sections } from "@/context/ProjectsPageContext/constants";
import ViewSectionButton from "@/components/Layout/ViewSectionButton/ViewSectionButton";

const ProjectOverviewGallery = () => {
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
        <Project project={projects[2]} isGalleryItem />
        <Project project={projects[2]} isGalleryItem />
        <Project project={projects[2]} isGalleryItem />
      </Grid>
      <ViewSectionButton text="Go to gallery" section={sections[3]} />
    </Box>
  );
};

export default ProjectOverviewGallery;
