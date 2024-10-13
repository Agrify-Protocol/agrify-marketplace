"use client";

import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { InvoiceProps } from "../Invoice/types";

const InvoiceBody = ({ invoice_data }: InvoiceProps) => {
  return (
    <Box px={"1.25rem"}>
      <Box mb={{ base: "24px", lg: "12.813rem" }}>
        <Grid gridTemplateColumns={"1.5fr 1fr 1fr 1fr"}>
          <Text color={"main_black_1"} fontSize={"0.813rem"} fontWeight={700}>
            Project
          </Text>
          <Text fontSize={"0.625rem"} align={"right"}>
            Qty.
          </Text>
          <Text fontSize={"0.625rem"} align={"right"}>
            Price
          </Text>
          <Text fontSize={"0.625rem"} align={"right"}>
            Total
          </Text>
        </Grid>

        <Grid
          gridTemplateColumns={"1.5fr 1fr 1fr 1fr"}
          mt={{ lg: "1.875rem" }}
          fontSize={"0.688rem"}
        >
          <Text color={"main_black_1"}>{invoice_data?.projectName}</Text>
          <Text align={"right"}>{`${invoice_data?.quantity} ton${
            invoice_data?.quantity > 1 ? "nes" : ""
          }`}</Text>
          <Text align={"right"}>${invoice_data?.totalAmount}</Text>
          <Text align={"right"} color={"main_black_1"}>
            ${invoice_data?.totalAmount}
          </Text>
        </Grid>

        <Flex
          mt={{ base: "80px", lg: "12.813rem" }}
          mb={{ base: "80px", lg: "2.5rem" }}
          alignItems={"center"}
        >
          <Box
            h={"1px"}
            w={"calc(100% - 15.188rem)"}
            bgColor={"#F2F5F9"}
            top={"calc(50% - 1px)"}
          ></Box>
          <Flex
            w={"15.188rem"}
            ml={"auto"}
            alignItems={"center"}
            justifyContent={"space-between"}
            bgColor={"#F5F5F5"}
            py={"0.875rem"}
            px={"1.25rem"}
            borderRadius={"0.5rem"}
          >
            <Text fontSize={"0.688rem"}>
              Total (
              <Text as="span" color={"main_black_1"}>
                USD
              </Text>
              )
            </Text>
            <Text fontWeight={700} color={"main_black_1"}>
              $
              {invoice_data?.totalAmount?.toLocaleString("en", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default InvoiceBody;
