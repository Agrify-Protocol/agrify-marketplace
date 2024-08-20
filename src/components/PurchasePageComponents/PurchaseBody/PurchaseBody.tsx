"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CounterButton from "../CounterButton/CounterButton";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";

const PurchaseBody = () => {
  const router = useRouter();
  const { chosenProject } = useGlobalContext();

  return (
    <Box
      bgColor={"white"}
      borderRadius={"1rem"}
      px={"2rem"}
      py={"2.813rem"}
      mt={"3rem"}
    >
      <Box>
        <Text
          fontWeight={500}
          fontSize={"1.5rem"}
          color={"main_black_1"}
          mb={"2.5rem"}
        >
          Transaction Details
        </Text>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={"1rem"}
        >
          <Text fontSize={"1.125rem"}>Price</Text>
          <Text fontSize={"1.125rem"} fontWeight={500} color={"main_black_1"}>
            ${chosenProject?.projectToken.price}/tc02e
          </Text>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={"1.125rem"}>Amount</Text>
          <CounterButton />
        </Flex>
      </Box>

      <Box
        mt={"2.5rem"}
        py={"1.5rem"}
        borderY={"1px dashed"}
        borderColor={"gray_2"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={"1rem"}
        >
          <Text fontSize={"1.125rem"}>Available Tonnes</Text>
          <Text
            fontSize={"1.125rem"}
            fontWeight={450}
            color={"rgba(1, 19, 8, 0.7)"}
          >
            {chosenProject?.projectToken.availableTonnes.toLocaleString()}{" "}
            tonnes
          </Text>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={"1.125rem"}>Minimum Purchase</Text>
          <Text
            fontSize={"1.125rem"}
            fontWeight={450}
            color={"rgba(1, 19, 8, 0.7)"}
          >
            {chosenProject?.projectToken.minimumPurchaseTonnes} tonnes
          </Text>
        </Flex>
      </Box>

      <Box mt={"2.5rem"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={"1rem"}
        >
          <Text fontSize={"1.125rem"}>Payment fee</Text>
          <Text
            fontSize={"1.125rem"}
            fontWeight={450}
            color={"rgba(1, 19, 8, 0.7)"}
          >
            $0
          </Text>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={"1.125rem"}>VAT</Text>
          <Text
            fontSize={"1.125rem"}
            fontWeight={450}
            color={"rgba(1, 19, 8, 0.7)"}
          >
            $1.46
          </Text>
        </Flex>
      </Box>

      <Button
        w={"100%"}
        h={"3.5rem"}
        mt={"3rem"}
        bgColor={"agrify_green"}
        fontWeight={500}
        color={"white"}
        borderRadius={"2.119rem"}
        _hover={{
          bg: "#0ba842",
        }}
        onClick={() => router.push("/payment")}
      >
        Continue Purchase
      </Button>
    </Box>
  );
};

export default PurchaseBody;
