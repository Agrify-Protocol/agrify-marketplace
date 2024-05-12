import { Grid } from "@chakra-ui/react";
import React from "react";
import { projects } from "./constants";
import Project from "../Project/Project";

const ProjectsContainer = () => {
  return (
    <Grid
      bg={"white"}
      px={"3.838rem"}
      py={"2.879rem"}
      borderRadius={"1.439rem"}
      gap={"2.44rem"}
      gridTemplateColumns={"repeat(auto-fill, minmax(17.5rem, 1fr))"}
    >
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </Grid>
  );
};

export default ProjectsContainer;
