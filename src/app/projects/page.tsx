"use client";

import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import CategoryContainer from "@/components/HomePageComponents/CategoryContainer/CategoryContainer";
import Stickers from "@/components/HomePageComponents/Stickers/Stickers";
import PageLoader from "@/components/Common/PageLoader/PageLoader";

export default function Home() {
  const { fetchingUser, user } = useAuthContext();

  return (
    <Box
      px={{ base: "25px", lg: "2.625rem" }}
      py={{ base: "39px", lg: "6.963rem" }}
    >
      {fetchingUser ? (
        <PageLoader />
      ) : (
        <>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Heading
              fontWeight={500}
              fontSize={{ base: "24px", lg: "1.5rem" }}
              mb={"1rem"}
            >
              Hello, {user?.firstname}
            </Heading>
            <Stickers display={{ base: "none", lg: "flex" }} />
          </Flex>
          <Text mt={"0.5rem"} mb={{ base: "18px", lg: "2.348rem" }}>
            Browse a selection of aggregated regenerative farm projects offering
            sustainably grown produce. By purchasing directly from these
            farmers, you support food security, strengthen local communities,
            and enjoy high-quality crops grown with the environment in mind.
          </Text>
          <Stickers display={{ base: "flex", lg: "none" }} mb="50px" />
          <CategoryContainer />
        </>
      )}
    </Box>
  );
}
