"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { InvoiceHeaderProps } from "./types";

const InvoiceHeader = ({ invoice_data }: InvoiceHeaderProps) => {
  return (
    <Flex
      bg={"#F5F5F5"}
      borderRadius={"0.5rem"}
      p={"1.25rem"}
      mb={"2.5rem"}
      alignItems={"start"}
      justifyContent={"space-between"}
    >
      <Box>
        <Text
          fontSize={"1.25rem"}
          fontWeight={700}
          color={"main_black_1"}
          mb={"1.938rem"}
        >
          Invoice
        </Text>

        <Box>
          <Text fontSize={"0.625rem"}>Billed To:</Text>
          <Text
            fontSize={"0.875rem"}
            fontWeight={600}
            color={"main_black_1"}
            my={"0.438rem"}
          >
            {invoice_data.client_name}
          </Text>
          <Text fontSize={"0.625rem"} color={"main_black_1"}>
            Address / Contact Info
          </Text>
        </Box>
      </Box>

      <Box>
        <Flex gap={"2.063rem"} pb={"2.188rem"}>
          <Box>
            <Text textAlign={"right"} fontSize={"0.625rem"}>
              Invoice No.
            </Text>
            <Text
              textAlign={"right"}
              fontSize={"0.813rem"}
              color={"main_black_1"}
              fontWeight={700}
            >
              #000123
            </Text>
          </Box>
          <Box>
            <Text textAlign={"right"} fontSize={"0.625rem"}>
              Status
            </Text>
            <Text
              textAlign={"right"}
              fontSize={"0.813rem"}
              color={"agrify_yellow"}
              fontWeight={500}
            >
              Pending
            </Text>
          </Box>
        </Flex>

        <Box>
          <Box mb={"0.75rem"}>
            <Text textAlign={"right"} fontSize={"0.625rem"}>
              Issued on
            </Text>
            <Text
              textAlign={"right"}
              fontSize={"0.625rem"}
              color={"main_black_1"}
            >
              December 7, 2024.
            </Text>
          </Box>
          <Box>
            <Text textAlign={"right"} fontSize={"0.625rem"}>
              Payment Due
            </Text>
            <Text
              textAlign={"right"}
              fontSize={"0.625rem"}
              color={"main_black_1"}
            >
              December 22, 2024.
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default InvoiceHeader;
