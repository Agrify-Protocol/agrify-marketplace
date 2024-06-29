"use client";

import { vat } from "@/constants";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const OrderSummary = () => {
  const { orderedAmount, orderTotal, subTotal } = useGlobalContext();

  return (
    <Box>
      <Box mt={"1.438rem"}>
        <Text>Pay for your order</Text>
        <Text
          fontSize={"2rem"}
          fontWeight={"600"}
          color={"main_black_1"}
          mt={"0.5rem"}
        >
          ${orderTotal}
        </Text>
      </Box>

      <Box mt={"2.563rem"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text color={"main_black_1"} fontWeight={500}>
            Greenfield Farms Carbon Project
          </Text>
          <Text color={"main_black_1"} fontWeight={500}>
            ${orderTotal}
          </Text>
        </Flex>
        <Text color={"main_black_1"} fontSize={"0.75rem"} fontWeight={500}>
          <Text as={"span"} color={"gray_1"}>
            Qty
          </Text>{" "}
          {orderedAmount} tonnes
        </Text>
      </Box>

      <Box mt={"3rem"} mb={"15.875rem"}>
        <Box w={"50%"} ml={"auto"}>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            py={"0.75rem"}
          >
            <Text fontWeight={450} color={"main_black_1"}>
              Subtotal
            </Text>
            <Text fontWeight={500} color={"rgba(26, 31, 54, 1)"}>
              ${subTotal}
            </Text>
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            py={"0.75rem"}
            borderY={"1px solid"}
            borderColor={"gray_2"}
          >
            <Text fontWeight={450}>VAT</Text>
            <Text fontWeight={500}>${vat}</Text>
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            py={"0.75rem"}
          >
            <Text fontWeight={450} color={"main_black_1"}>
              Total due
            </Text>
            <Text fontWeight={500} color={"rgba(26, 31, 54, 1)"}>
              ${orderTotal}
            </Text>
          </Flex>
        </Box>
      </Box>

      <Flex gap={"1rem"} alignItems={"center"}>
        <Link href="">
          <Text fontSize={"0.75rem"} fontWeight={500}>
            Terms
          </Text>
        </Link>
        <Link href="">
          <Text fontSize={"0.75rem"} fontWeight={500}>
            Privacy
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default OrderSummary;
