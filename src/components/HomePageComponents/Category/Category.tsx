"use client";

import React from "react";
import { CategoryProps } from "./types";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import leaf from "../../../assets/leaf.svg";
import { useRouter } from "next/navigation";

const Category = ({ category }: CategoryProps) => {
  const router = useRouter();
  const getUrlSafeName = () => {
    return category.name.replace(" ", "_");
  };
  return (
    <Flex
      h={"20.75rem"}
      bgColor={"white"}
      borderRadius={"0.75rem"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"0.75rem"}
      cursor={"pointer"}
      onClick={() => router.push(`/category/${getUrlSafeName()}`)}
    >
      <Box
        shadow={"0 3px 10px rgba(0,0,0,0.15)"}
        py={"2rem"}
        px={"1.75rem"}
        borderRadius={"0.75rem"}
      >
        <Image src={category.image} alt="" />
      </Box>
      <Text fontSize={"1.125rem"} color={"black"} mt={"calc(2rem - 0.75rem)"}>
        {category.name}
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
        {category.carbon_credits.toLocaleString()} tco2e
      </Flex>
    </Flex>
  );
};

export default Category;