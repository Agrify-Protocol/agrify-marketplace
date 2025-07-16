"use client";
import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Project from "../Project/Project";
import FullGalleryImage from "../FullGalleryImage/FullGalleryImage";
import { ViewedProject } from "./types";
import { StaticImageData } from "next/image";
import { useScreenFreeze } from "@/hooks/useScreenFreeze";
import { createFauxProjects } from "@/utils/createFauxProjects";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";

const ProjectGallery = () => {
  const { project } = useProjectPageContext();
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

  useScreenFreeze(viewedProject != null);

  const galleryItems = createFauxProjects(project!);

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
        {galleryItems.length ? (
          galleryItems.map((item: any) => {
            return (
              <Project
                key={item._id}
                project={item}
                isGalleryItem
                handleGalleryClick={handleGalleryClick}
              />
            );
          })
        ) : (
          <Text mx={10}>Nothing to display.</Text>
        )}
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
