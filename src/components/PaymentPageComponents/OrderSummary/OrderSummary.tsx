"use client";

import { vat } from "@/constants";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const OrderSummary = () => {
  const { orderedAmount, orderTotal, subTotal, chosenProject } =
    useGlobalContext();
  const router = useRouter();

  // useEffect(() => {
  //   if (!chosenProject) {
  //     router.push("/projects");
  //   }
  // }, [chosenProject]);

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
          ${orderTotal.toLocaleString()}
        </Text>
      </Box>

      <Box mt={"2.563rem"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text
            color={"main_black_1"}
            fontWeight={500}
            maxW={"65%"}
            isTruncated
          >
            {chosenProject?.title}
          </Text>
          <Text color={"main_black_1"} fontWeight={500}>
            ${orderTotal.toLocaleString()}
          </Text>
        </Flex>
        <Text color={"main_black_1"} fontSize={"0.75rem"} fontWeight={500}>
          <Text as={"span"} color={"gray_1"}>
            Qty{" "}
          </Text>
          {`${+orderedAmount} kg`}
        </Text>
      </Box>

      <Box mt={"3rem"} mb={{ lg: "15.875rem" }}>
        <Box w={{ base: "70%", lg: "50%" }} ml={"auto"}>
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
            wrap="wrap"
          >
            <Text fontWeight={450} color={"main_black_1"}>
              Total due
            </Text>
            <Text fontWeight={500} color={"rgba(26, 31, 54, 1)"}>
              ${orderTotal.toLocaleString()}
            </Text>
          </Flex>
        </Box>
      </Box>

      <Flex
        gap={"1rem"}
        alignItems={"center"}
        display={{ base: "none", lg: "flex" }}
      >
        <Link href="/terms">
          <Text fontSize={"0.75rem"} fontWeight={500}>
            Terms
          </Text>
        </Link>
        <Link href="/privacy">
          <Text fontSize={"0.75rem"} fontWeight={500}>
            Privacy
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default OrderSummary;
