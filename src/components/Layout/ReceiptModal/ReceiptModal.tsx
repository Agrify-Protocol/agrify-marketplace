"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import BackButton from "../BackButton/BackButton";
import { ReceiptModalProps } from "./types";
import { Inter_Display } from "@/fonts";
import { readableDate } from "@/utils/parseData";

const ReceiptModal = ({ txDetail, closeModal }: ReceiptModalProps) => {
  if (!txDetail) {
    return null;
  }

  return (
    <Box
      position={"fixed"}
      inset={0}
      w={"100vw"}
      h={"100vh"}
      bgColor={"rgba(0,0,0,0.4)"}
    >
      <Box
        bgColor={"white"}
        w={"37.793rem"}
        borderRadius={"1rem"}
        p={"2.813rem 2rem"}
        pb={"8.938rem"}
        my={"6.438rem"}
        ml={"auto"}
        mr={"2.145rem"}
        fontFamily={Inter_Display.style.fontFamily}
      >
        <BackButton customFunction={closeModal} />
        <Text fontWeight={500} color={"main_black_1"} fontSize={"1.5rem"}>
          Transaction Details
        </Text>

        <Box mt={"2.5rem"}>
          <Text fontWeight={600} fontSize={"2rem"} color={"main_black_1"}>
            {txDetail?.tonnes}tc02e
          </Text>

          <Box mt={"3rem"} fontSize={"1.125rem"}>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              mb={"1rem"}
            >
              <Text>Date & Time</Text>
              <Text color={"main_black_1"}>
                {readableDate(txDetail.createdAt.toString())}
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              mb={"1rem"}
            >
              <Text>Amount</Text>
              <Text color={"main_black_1"}>${500}</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              mb={"1rem"}
            >
              <Text>Reference Code</Text>
              <Text color={"main_black_1"}>{txDetail?.paymentReference}</Text>
            </Flex>
          </Box>

          <Button
            color={"agrify_blue"}
            bgColor={"transparent"}
            fontWeight={500}
            display={"block"}
            mx={"auto"}
          >
            Download Receipt
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReceiptModal;
