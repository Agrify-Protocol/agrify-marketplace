"use client";

import React from "react";
import { CategoryProps } from "./types";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import leaf from "../../../assets/leaf.svg";
import { useRouter } from "next/navigation";
import { categoryImages } from "../CategoryContainer/constants";

const Category = ({ category }: CategoryProps) => {
  const router = useRouter();

  return (
    <Flex
      h={{ base: "307.99px", lg: "20.75rem" }}
      bgColor={"white"}
      borderRadius={"0.75rem"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"0.75rem"}
      cursor={"pointer"}
      onClick={() => router.push(`/projects/category/${category.category}`)}
      transition="ease-in-out"
      transitionDuration=".1s"
      _hover={{ border: "1px solid #0CC14C" }}
    >
      <Box
        shadow={"0 3px 10px rgba(0,0,0,0.15)"}
        w="111.32px"
        h="111.32px"
        display="flex"
        justifyContent="center"
        alignContent="center"
        borderRadius={"0.75rem"}
      >
        <Image src={categoryImages[category.category]} alt="" />
      </Box>
      <Text
        fontSize={"1.125rem"}
        color={"black"}
        mt={"calc(2rem - 0.75rem)"}
        textTransform="capitalize"
      >
        {category.category}
      </Text>
      <Flex
        fontSize={"0.75rem"}
        gap={"0.25rem"}
        bgColor={"#EFEFEF"}
        p={"0.188rem 0.75rem"}
        borderRadius={"1.5rem"}
        color={"rgba(141, 141, 141, 1)"}
      >
        <Image src={leaf} alt="" />
        {category.totalTonnes.toLocaleString()} kg
      </Flex>
    </Flex>
  );
};

export default Category;
