import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Project from "../Project/Project";
import { projects } from "../ProjectsContainer/constants";
import FullGalleryImage from "../FullGalleryImage/FullGalleryImage";
import { ViewedProject } from "./types";
import { StaticImageData } from "next/image";

const ProjectGallery = () => {
  const [viewedProject, setViewedProject] = useState<ViewedProject | null>(
    null
  );

  const handleGalleryClick = (
    image: string | StaticImageData,
    metadata: string
  ) => {
    setViewedProject({ image, metadata });
  };

  const closeImage = () => setViewedProject(null);

  return (
    <Box>
      <Text
        my={"1.5rem"}
        fontWeight={450}
        fontSize={"1.125rem"}
        color={"black"}
        p={"0.714rem"}
      >
        Gallery
      </Text>
      <Grid
        mb={"1.5rem"}
        gap={"0.813rem"}
        gridTemplateColumns={"repeat(auto-fill, minmax(20rem, 1fr))"}
      >
        <Project
          project={projects[2]}
          isGalleryItem
          handleGalleryClick={handleGalleryClick}
        />
        <Project
          project={projects[2]}
          isGalleryItem
          handleGalleryClick={handleGalleryClick}
        />
        <Project
          project={projects[2]}
          isGalleryItem
          handleGalleryClick={handleGalleryClick}
        />
        <Project
          project={projects[2]}
          isGalleryItem
          handleGalleryClick={handleGalleryClick}
        />
      </Grid>

      {viewedProject && (
        <FullGalleryImage
          metadata={viewedProject.metadata}
          image={viewedProject.image}
          closeImage={closeImage}
        />
      )}
    </Box>
  );
};

export default ProjectGallery;
