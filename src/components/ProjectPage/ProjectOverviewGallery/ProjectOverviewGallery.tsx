import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import Project from "../Project/Project";
import { projects } from "../ProjectsContainer/constants";
import { ChevronRight } from "lucide-react";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { sections } from "@/context/ProjectsPageContext/constants";

const ProjectOverviewGallery = () => {
  const { setCurrentSection } = useProjectPageContext();
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
      <Button
        mt={"2.5rem"}
        fontWeight={400}
        bgColor={"white"}
        color={"secondary_foreground"}
        rightIcon={<ChevronRight />}
        onClick={() => setCurrentSection(sections[3])}
      >
        Go to gallery
      </Button>
    </Box>
  );
};

export default ProjectOverviewGallery;
