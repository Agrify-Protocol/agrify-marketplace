import BackButton from "@/components/Layout/BackButton/BackButton";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import check from "../../assets/icon-park-solid_check-one.svg";
import Image from "next/image";
import Project from "@/components/ProjectPageComponents/Project/Project";
import { projects } from "@/components/ProjectPageComponents/ProjectsContainer/constants";

const Confirmation = () => {
  return (
    <Box my={"4rem"} px={"2.625rem"}>
      <BackButton />
      <Box
        w={"100%"}
        bgColor={"white"}
        mt={"3.028rem"}
        borderRadius={"0.953rem"}
        py={"5.238rem"}
        textAlign={"center"}
      >
        <Flex
          w={"6.191rem"}
          h={"6.191rem"}
          bgColor={"#F5F6F8"}
          alignItems={"center"}
          justifyContent={"center"}
          mx={"auto"}
          borderRadius={"0.476rem"}
          mb={"2.444rem"}
        >
          <Image src={check} alt="" />
        </Flex>

        <Text fontSize={"1.5rem"} fontWeight={600} color={"#011308"}>
          Invoice Generated!
        </Text>
        <Text
          fontSize={"1.125rem"}
          fontWeight={450}
          mt={"1.708rem"}
          mb={"2.661rem"}
        >
          You have successfully purchased 1,000 tones of C02
        </Text>

        <Box
          w={"15.952rem"}
          maxH={"14.944rem"}
          overflow={"hidden"}
          mx={"auto"}
          borderRadius={"0.449rem"}
          position={"relative"}
          mb={"3.288rem"}
        >
          <Image
            src={projects[2].coverImage}
            alt=""
            width={255.23}
            height={239.1}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            position={"absolute"}
            inset={0}
            bgColor={"rgba(0,0,0,0.4)"}
            p={"1.329rem 1.098rem"}
          >
            <Text
              bgColor={"agrify_lavender"}
              fontSize={"0.545rem"}
              p={"0.149rem 0.483rem"}
              w={"fit-content"}
              color={"black"}
              borderRadius={"0.425rem"}
            >
              4+ SDG Impact
            </Text>
          </Box>
        </Box>

        <Text
          fontWeight={450}
          color={"black"}
          fontSize={"1.5rem"}
          mb={"2.648rem"}
        >
          {`REDD+ Project in Eastern Côte D'Ivoire`}
        </Text>

        <Button
          w={"11.375rem"}
          h={"2.688rem"}
          color={"white"}
          bgColor={"main_black_1"}
          borderRadius={"2rem"}
        >
          View Purchase
        </Button>
      </Box>
    </Box>
  );
};

export default Confirmation;
