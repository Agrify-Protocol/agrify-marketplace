"use client";

import { Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { projects } from "./constants";
import Project from "../Project/Project";
import { getAllProjects } from "@/services/api/projects";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";

const ProjectsContainer = () => {
  const { allProjects, setAllProjects } = useGlobalContext();

  useEffect(() => {
    getAllProjects(1).then((result) => {
      setAllProjects(result);
    });
  }, []);

  return (
    <Grid
      bg={"white"}
      px={"3.838rem"}
      py={"2.879rem"}
      borderRadius={"1.439rem"}
      gap={"2.44rem"}
      gridTemplateColumns={"repeat(auto-fill, minmax(17.5rem, 1fr))"}
    >
      {allProjects?.projects.map((project) => {
        return <Project key={project._id} project={project} />;
      })}
    </Grid>
  );
};

export default ProjectsContainer;
