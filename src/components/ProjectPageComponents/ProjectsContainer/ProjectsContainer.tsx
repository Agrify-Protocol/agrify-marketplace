"use client";

import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import Project from "../Project/Project";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { useAllProjects } from "@/hooks/queries/useProjectQueries";
import PageLoader from "@/components/Common/PageLoader/PageLoader";

const ProjectsContainer = () => {
  const { user } = useAuthContext();
  const { data, isLoading, isError, refetch } = useAllProjects(1, !!user);

  const projects = data?.projects ?? [];

  if (isLoading) return <PageLoader />;

  if (isError) {
    return (
      <Box textAlign="center" mt="48px" px="3.838rem">
        <Text mb="16px" color="red.500">
          Failed to load projects. Please try again.
        </Text>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <Grid
      bg={"white"}
      px={"3.838rem"}
      py={"2.879rem"}
      borderRadius={"1.439rem"}
      gap={"2.44rem"}
      gridTemplateColumns={"repeat(auto-fill, minmax(17.5rem, 1fr))"}
    >
      {projects.map((project: any) => (
        <Project key={project._id} project={project} />
      ))}
    </Grid>
  );
};

export default ProjectsContainer;
