"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import seal from "../../../assets/seal.svg";
import Image from "next/image";
import { ProduceDetailsProps } from "./types";
import Slider from "@/components/FarmPageComponents/Slider/Slider";
import Subsections from "./Subsections";
import BackButton from "@/components/Common/BackButton/BackButton";

const ProduceDetails = ({ details, btns }: ProduceDetailsProps) => {
  return (
    <Box px={{ base: 4, lg: 10 }} pt={{ base: 4, lg: 10 }}>
      <BackButton />
      <Flex direction={{ base: "column", lg: "row" }}>
        <Box flexShrink={0}>
          <Slider images={details?.project?.farms[0]?.farmImages} />
        </Box>
        <Flex
          maxH={{ base: "none", lg: "75vh" }}
          pl={{ lg: "1rem" }}
          px={{ base: "16px", lg: 0 }}
          pr={{ base: 0, lg: "32px" }}
          pb={{ base: 4, lg: 10 }}
          border={{ base: "1px solid transparent", lg: "none" }}
          flexDir="column"
          maxW="500px"
          borderLeftColor={"rgba(0, 0, 0, 0.05)"}
          overflowY={{ base: "visible", lg: "scroll" }}
          mt={{ base: 6, lg: 0 }}
        >
          <Text fontSize={{ base: "14px", lg: "18px" }} color={"black"}>
            {details?.project?.title}
          </Text>
          <Text
            fontSize={{ base: "24px", lg: "32px" }}
            color={"black"}
            textTransform="capitalize"
            mb={{ base: "15px", lg: "25px" }}
          >
            {details?.project?.category}
          </Text>

          <Text
            fontSize={{ base: "18px", lg: "24px" }}
            color={"black"}
            mb={{ base: "25px", lg: "32px" }}
            lineHeight="35px"
          >
            <Text as="span" fontSize="14px">
              Price
            </Text>
            <br />${details?.price?.toLocaleString()}/kg
          </Text>

          <Box>
            <Text
              color={"black"}
              mb={{ base: "25px", lg: "40px" }}
              fontSize="14px"
            >
              Farm Score
            </Text>

            <Box
              w={"4.5rem"}
              h={"4.5rem"}
              position={"relative"}
              mt={{ base: 0, lg: -12 }}
            >
              <Text
                fontSize={{ base: "18px", lg: "24px" }}
                color={"black"}
                position={"absolute"}
                left={0}
                right={0}
                top={"1rem"}
                textAlign={"center"}
              >
                8.5
              </Text>
              <Image
                style={{ position: "absolute", bottom: "0" }}
                src={seal}
                alt=""
              />
            </Box>
          </Box>

          <Flex py={"0.75rem"} flexDir="column" width="100%">
            {btns}
          </Flex>

          <Subsections details={details} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProduceDetails;
