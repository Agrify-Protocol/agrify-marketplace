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
      px={{ base: "20px", lg: "2rem" }}
      py={{ base: "20px", lg: "2.813rem" }}
      mt={"3rem"}
    >
      <Box>
        <Text
          fontWeight={500}
          fontSize={{ base: "24px", lg: "1.5rem" }}
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
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>Price</Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={500}
            color={"main_black_1"}
          >
            ${chosenProject?.projectToken.price}/tc02e
          </Text>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>Amount</Text>
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
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>
            Available Tonnes
          </Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={450}
            color={"rgba(1, 19, 8, 0.7)"}
          >
            {`${chosenProject?.projectToken?.availableTonnes.toLocaleString()} ton${
              (chosenProject?.projectToken?.availableTonnes ?? 0) > 1
                ? "nes"
                : ""
            }`}
          </Text>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>
            Minimum Purchase
          </Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={450}
            color={"rgba(1, 19, 8, 0.7)"}
          >
            {`${chosenProject?.projectToken.minimumPurchaseTonnes.toLocaleString()} ton${
              (chosenProject?.projectToken.minimumPurchaseTonnes ?? 0) > 1
                ? "nes"
                : ""
            }`}
          </Text>
        </Flex>
      </Box>

      <Box mt={"2.5rem"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={"1rem"}
        >
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>Payment fee</Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={450}
            color={"rgba(1, 19, 8, 0.7)"}
          >
            $0
          </Text>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>VAT</Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
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
        fontSize={{ base: "14px", lg: "1.125rem" }}
        onClick={() => router.push("/payment")}
      >
        Continue Purchase
      </Button>
    </Box>
  );
};

export default PurchaseBody;
