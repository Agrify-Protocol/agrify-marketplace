"use client";

import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { InvoiceBodyProps } from "./types";

const InvoiceBody = ({ order_total }: InvoiceBodyProps) => {
  return (
    <Box px={"1.25rem"}>
      <Box mb={"12.813rem"}>
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
          mt={"1.875rem"}
          fontSize={"0.688rem"}
        >
          <Text color={"main_black_1"}>Greenfield Farms Carbon Project</Text>
          <Text align={"right"}>1000 tones</Text>
          <Text align={"right"}>$100,001.46</Text>
          <Text align={"right"} color={"main_black_1"}>
            $100,001.46
          </Text>
        </Grid>

        <Flex mt={"12.813rem"} mb={"2.5rem"} alignItems={"center"}>
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
              {order_total.toLocaleString("en", {
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
