"use client";

import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { Box, Flex, Text } from "@chakra-ui/react";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import Image from "next/image";
import corn from "@/assets/corn.svg";
import bg from "../../assets/hero-bg.png";
import CategoryContainer from "@/components/HomePageComponents/CategoryContainer/CategoryContainer";
import Search from "@/components/Common/Search/Search";
import { useState } from "react";

export default function Home() {
  const { fetchingUser } = useAuthContext();
  const [search, setSearch] = useState("");

  return (
    <Box
      px={{ base: "20px", sm: "25px", md: "35px", lg: "2.625rem" }}
      py={{ base: "32px", sm: "39px", md: "50px", lg: "6.963rem" }}
    >
      <Box
        maxW="1370px"
        height={{ base: "260px", sm: "280px", md: "210px" }}
        mb={{ base: "60px", sm: "80px", md: "100px" }}
        position="relative"
        rounded="16px"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgImage={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg.src})`}
          bgSize="cover"
          bgPos="center"
          zIndex="0"
        />

        <Flex
          position="relative"
          height="100%"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          zIndex="1"
          textAlign="center"
          px={{ base: "3", sm: "4" }}
        >
          <Image
            src={corn}
            alt="corn svg"
            style={{ marginBottom: "10px" }}
            width={40}
            height={40}
          />
          <Text
            color="white"
            fontSize={{ base: "20px", sm: "24px", md: "32px" }}
            fontWeight="600"
          >
            Buy Organic Produce
          </Text>
          <Text
            color="white"
            fontSize={{ base: "14px", sm: "15px", md: "16px" }}
            maxW={{ base: "100%", sm: "90%", md: "70%" }}
            mx="auto"
          >
            Buy sustainably farmed produce that from healthy soils that promote
            biodiversity and climate change resilience
          </Text>
        </Flex>
      </Box>
      <Search text="Trending Produce" search={search} setSearch={setSearch} />
      {fetchingUser ? <PageLoader /> : <CategoryContainer search={search} />}
    </Box>
  );
}
