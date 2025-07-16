"use client";

import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Category = ({ category }: { key: number | string; category: any }) => {
  return (
    <Link href={`/projects/category/${category?.name}`}>
      <Flex
        w={{ base: "100%", sm: "300px", lg: "425px" }}
        minH={{ base: "380px", md: "400px", lg: "425px" }}
        bgColor="white"
        borderRadius="15.04px"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap={{ base: "24px", md: "30px", lg: "36px" }}
        cursor="pointer"
        boxShadow="0px 3.23px 2.58px rgba(0, 0, 0, 0.028),
             0px 8.17px 6.53px rgba(0, 0, 0, 0.04),
             0px 16.66px 13.33px rgba(0, 0, 0, 0.05)"
        transition="ease-in-out"
        transitionDuration=".1s"
        _hover={{ border: "1px solid #0CC14C" }}
      >
        <Box
          bg="#F6F6F6"
          px={{ base: "20px", sm: "25px", lg: "30px" }}
          py="8px"
          rounded="9401.94px"
        >
          <Text
            fontWeight="500"
            fontSize={{ base: "14px", sm: "15px", md: "16px" }}
            color="black"
            textTransform="capitalize"
          >
            {category?.name?.split("_").join(" ")}
          </Text>
        </Box>
        <Box
          maxW={{ base: "160px", sm: "200px", md: "220px", lg: "188px" }}
          maxH={{ base: "160px", sm: "200px", md: "220px", lg: "188px" }}
        >
          <Image
            src={category?.coverImage}
            alt={`${category?.category} produce icon`}
            width={1000}
            height={1000}
          />
        </Box>
      </Flex>
    </Link>
  );
};

export default Category;
