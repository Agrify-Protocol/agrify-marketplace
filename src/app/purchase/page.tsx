"use client";

import Button from "@/components/Common/Button";
import PurchaseComp from "@/components/PurchasePageComponents";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const Purchase = () => {
  const { chosenProject } = useGlobalContext();
  const router = useRouter();

  return (
    <PurchaseComp
      caption={`Secure your high-quality
        ${chosenProject?.name
          ?.toLowerCase()
          ?.split("_")
          .join(" ")} directly from
        local farmers.`}
    >
      <Box
        borderBottom="1px dashed"
        borderColor="gray_2"
        pb={{ base: "1.5rem", lg: "2rem" }}
      >
        <Text
          fontWeight={500}
          fontSize={{ base: "24px", lg: "1.5rem" }}
          color="main_black_1"
          mb={{ base: "1.5rem", lg: "2.5rem" }}
        >
          Order Details
        </Text>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          mb={{ base: "0.75rem", lg: "1rem" }}
        >
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>Price</Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={500}
            color="main_black_1"
          >
            ${chosenProject?.pricePerKg?.toLocaleString()}/kg
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          mb={{ base: "0.75rem", lg: "1rem" }}
        >
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>Batch Size</Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={500}
            color="main_black_1"
          >
            {chosenProject?.batchSize?.toLocaleString()}
          </Text>
        </Flex>
      </Box>

      <Box mt={{ base: "2rem", lg: "2.5rem" }}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mb={{ base: "0.75rem", lg: "1rem" }}
        >
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>Total Price</Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={450}
            color="rgba(1, 19, 8, 0.7)"
          >
            ${chosenProject?.totalPrice?.toLocaleString()}
          </Text>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize={{ base: "14px", lg: "1.125rem" }}>VAT</Text>
          <Text
            fontSize={{ base: "14px", lg: "1.125rem" }}
            fontWeight={450}
            color="rgba(1, 19, 8, 0.7)"
          >
            $1.46
          </Text>
        </Flex>
      </Box>

      <Flex
        gap={{ base: "0.75rem", lg: "1rem" }}
        mt={{ base: "2rem", lg: "3rem" }}
        direction={{ base: "column", sm: "row" }}
      >
        <Box flex={1}>
          <Button
            width="100%"
            border="2px solid"
            borderColor="gray.300"
            bg="gray.50"
            color="gray.400"
            cursor="not-allowed"
            _hover={{ bg: "gray.50" }}
            isDisabled
          >
            Pay with Card
          </Button>

          <Text mt="4px" fontSize="xs" color="gray.400" textAlign="center">
            Coming soon
          </Text>
        </Box>

        <Button flex={1} onClick={() => router.push("/payment?method=crypto")}>
          Pay with Crypto
        </Button>
      </Flex>
    </PurchaseComp>
  );
};

export default Purchase;
