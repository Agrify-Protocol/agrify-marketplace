import BackButton from "@/components/Layout/BackButton/BackButton";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import check from "../../assets/icon-park-solid_check-one.svg";
import Image from "next/image";

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
        >
          <Image src={check} alt="" />
        </Flex>
        <Text fontSize={"1.5rem"} fontWeight={600} color={"#011308"}>
          Invoice Generated!
        </Text>
      </Box>
    </Box>
  );
};

export default Confirmation;
