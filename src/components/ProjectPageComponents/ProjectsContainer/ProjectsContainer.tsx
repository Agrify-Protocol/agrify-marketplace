"use client";

import { Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { projects } from "./constants";
import Project from "../Project/Project";
import { getAllProjects } from "@/services/api/projects";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { useAuthContext } from "@/context/AuthContext/AuthContext";

const ProjectsContainer = () => {
  const { user } = useAuthContext();
  const { allProjects, setAllProjects } = useGlobalContext();

  useEffect(() => {
    if (user) {
      getAllProjects(1).then((result) => {
        setAllProjects(result);
      });
    }
  }, [user]);

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
