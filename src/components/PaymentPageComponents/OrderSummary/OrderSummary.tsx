"use client";

import { vat } from "@/constants";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const OrderSummary = ({ chosenProject }: { chosenProject: any }) => {
  return (
    <Box>
      {/* Top Section */}
      <Box mt={{ base: "1.25rem", lg: "1.438rem" }}>
        <Text fontSize={{ base: "14px", md: "15px" }}>Pay for your order</Text>

        <Text
          fontSize={{ base: "1.75rem", md: "1.875rem", lg: "2rem" }}
          fontWeight="600"
          color="main_black_1"
          mt="0.5rem"
        >
          ${chosenProject?.totalPrice?.toLocaleString()}
        </Text>
      </Box>

      {/* Item info */}
      <Box mt={{ base: "2rem", lg: "2.563rem" }}>
        <Flex alignItems="center" justifyContent="space-between" gap={2}>
          <Text
            color="main_black_1"
            fontWeight={500}
            maxW="65%"
            isTruncated
            fontSize={{ base: "14px", md: "15px" }}
          >
            {formatSnakeCaseTitle(chosenProject?.name)}
          </Text>

          <Text
            color="main_black_1"
            fontWeight={500}
            fontSize={{ base: "14px", md: "15px" }}
          >
            ${chosenProject?.totalPrice?.toLocaleString()}
          </Text>
        </Flex>

        <Text color="main_black_1" fontSize="0.75rem" fontWeight={500} mt="2px">
          <Text as="span" color="gray_1">
            Qty{" "}
          </Text>
          {chosenProject?.batchSize?.toLocaleString()}
        </Text>
      </Box>

      {/* Pricing breakdown */}
      <Box mt="3rem" mb={{ base: "3rem", lg: "15.875rem" }}>
        <Box w={{ base: "100%", sm: "85%", lg: "50%" }} ml="auto">
          {/* Subtotal */}
          <Flex alignItems="center" justifyContent="space-between" py="0.75rem">
            <Text fontWeight={450} color="main_black_1">
              Subtotal
            </Text>
            <Text fontWeight={500} color="rgba(26, 31, 54, 1)">
              ${chosenProject?.totalPrice?.toLocaleString()}
            </Text>
          </Flex>

          {/* VAT */}
          <Flex
            alignItems="center"
            justifyContent="space-between"
            py="0.75rem"
            borderY="1px solid"
            borderColor="gray_2"
          >
            <Text fontWeight={450}>VAT</Text>
            <Text fontWeight={500}>${vat}</Text>
          </Flex>

          {/* Total Due */}
          <Flex
            alignItems="center"
            justifyContent="space-between"
            py="0.75rem"
            wrap="wrap"
          >
            <Text fontWeight={450} color="main_black_1">
              Total due
            </Text>
            <Text fontWeight={500} color="rgba(26, 31, 54, 1)">
              ${(chosenProject?.totalPrice + vat)?.toLocaleString()}
            </Text>
          </Flex>
        </Box>
      </Box>

      {/* Terms and Privacy (desktop-only) */}
      <Flex
        gap="1rem"
        alignItems="center"
        display={{ base: "none", lg: "flex" }}
      >
        <Link href="/terms">
          <Text fontSize="0.75rem" fontWeight={500}>
            Terms
          </Text>
        </Link>

        <Link href="/privacy">
          <Text fontSize="0.75rem" fontWeight={500}>
            Privacy
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default OrderSummary;
