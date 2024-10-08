"use client";

import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import no_poverty from "../assets/E_SDG_PRINT-01 1.svg";
import clean from "../assets/E_SDG_PRINT-06 1.svg";
import Image from "next/image";
import CategoryContainer from "@/components/HomePageComponents/CategoryContainer/CategoryContainer";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <Box px={"2.625rem"} py={"6.963rem"}>
      <>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading fontWeight={500} fontSize={"1.5rem"} mb={"1rem"}>
              Hello, {user?.firstname}
            </Heading>
          </Box>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={"0.25rem"}
            color={"white"}
            bgColor={"gray_2"}
            w={"6.237rem"}
            borderRadius={"2.357rem"}
            py={"0.362rem"}
            fontWeight={500}
          >
            <Image src={no_poverty} alt="" />
            <Image src={clean} alt="" />
            +3
          </Flex>
        </Flex>
        <Text mt={"0.5rem"} mb={"2.348rem"}>
          Browse a selection of aggregated regenerative farm projects tailored
          for comprehensive sustainability impact. By Investing in these carbon
          credits, you advance food security and fortify farmer resilience while
          fulfilling your carbon offset goals.
        </Text>
      </>

      <CategoryContainer />
    </Box>
  );
}
