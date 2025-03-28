"use client";

import React, { useState } from "react";
import { ProjectProps } from "./types";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Project = ({
  project,
  isGalleryItem,
  handleGalleryClick,
}: ProjectProps) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const pushToProductPage = () => {
    router.push(`/${pathName}id?=${project._id}?id=overview`);
  };

  const projectImpact = project.tags.length;

  return (
    <Box
      maxH={"22.818rem"}
      borderRadius={"0.849rem"}
      overflow={"hidden"}
      position={"relative"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        !isGalleryItem
          ? pushToProductPage()
          : handleGalleryClick?.(project.coverImage, project.title);
      }}
    >
      <Image
        src={project.coverImage}
        alt=""
        width={389.7}
        height={365}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
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
          {`${projectImpact}+ SDG Impact`}
        </Text>
        <Text
          maxW={"18.667rem"}
          fontSize={"1.5rem"}
          color={"white"}
          display={isGalleryItem ? "none" : "unset"}
        >
          {project.title}
        </Text>
      </Flex>
    </Box>
  );
};

export default Project;
