"use client";

import React, { useState } from "react";
import { ProjectProps } from "./types";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Project = ({ project, isGalleryItem }: ProjectProps) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const pushToProductPage = () => {
    router.push(`/project/${project.id}`);
  };

  return (
    <Box
      maxH={"22.818rem"}
      cursor={"pointer"}
      borderRadius={"0.849rem"}
      overflow={"hidden"}
      position={"relative"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        !isGalleryItem && pushToProductPage();
      }}
    >
      <Image
        src={project.image}
        alt=""
        objectFit="contain"
        style={{
          width: "100%",
          height: "100%",
          transition: "all 0.25s ease-in-out",
          scale: hovered ? "1.1" : "1",
        }}
      />
      <Flex
        flexDir={"column"}
        position={"absolute"}
        w={"100%"}
        h={"100%"}
        inset={0}
        bgColor={"rgba(0,0,0,0.4)"}
        px={"1.806rem"}
        py={"1.634rem"}
        justifyContent={"space-between"}
      >
        <Text
          bgColor={"agrify_lavender"}
          fontSize={"0.875rem"}
          color={"black"}
          h={"fit-content"}
          w={"fit-content"}
          py={"0.213rem"}
          px={"0.69rem"}
          borderRadius={"0.425rem"}
          display={isGalleryItem ? "none" : "unset"}
        >
          {project.impact}
        </Text>
        <Text
          maxW={"18.667rem"}
          fontSize={"1.5rem"}
          color={"white"}
          display={isGalleryItem ? "none" : "unset"}
        >
          {project.name}
        </Text>
      </Flex>
    </Box>
  );
};

export default Project;
