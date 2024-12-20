import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { X } from "lucide-react";
import React from "react";
import { FullGalleryImageProps } from "./types";
import Image from "next/image";

const FullGalleryImage = ({
  metadata,
  image,
  closeImage,
}: FullGalleryImageProps) => {
  return (
    <Flex
      // display={{ base: "none", lg: "block" }}
      position={"fixed"}
      bgColor={"rgba(0,0,0,0.4)"}
      zIndex={100}
      minW={{ lg: "100vw" }}
      minH={{ lg: "100vh" }}
      inset={0}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      py={"2.5rem"}
    >
      <Box w={{ lg: "43rem" }} mx={"auto"} px={{ base: "16px", lg: "0px" }}>
        <Box
          bg={"white"}
          px={{ base: "16px", lg: "2.438rem" }}
          py={{ base: "16px", lg: "1.75rem" }}
          borderRadius={"1rem"}
        >
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Text>About Media</Text>
            <Button
              borderRadius={"2rem"}
              p={"0.5rem 1rem"}
              onClick={closeImage}
            >
              <X size={"1rem"} />
            </Button>
          </Flex>
          {metadata ? (
            <Text mt={"0.75rem"} color={"main_black_1"} lineHeight={"1.2rem"}>
              {metadata}
            </Text>
          ) : null}
        </Box>

        <Box mt={"1.5rem"} w={"100%"} h={{ base: "60vh", lg: "32rem" }}>
          <Image
            src={image}
            alt=""
            width={684}
            height={684}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "1.5rem",
            }}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default FullGalleryImage;
