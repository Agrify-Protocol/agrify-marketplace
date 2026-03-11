"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import BackButton from "../BackButton/BackButton";
import { InvoiceModalProps } from "./types";
import Invoice from "@/components/PaymentPageComponents/Invoice/Invoice";
import { Inter_Display } from "@/fonts";
import { InvoiceData } from "@/components/PaymentPageComponents/Invoice/types";
import Spinner from "../Spinner/Spinner";
import { parseSingleInvoiceResponse } from "@/utils/parseSingleInvoiceResponse";
import { useSingleInvoice } from "@/hooks/queries/useInvoiceQueries";

const InvoiceModal = ({ closeModal, txDetail }: InvoiceModalProps) => {
  const {
    data: rawData,
    isLoading,
    isError,
    refetch,
  } = useSingleInvoice(txDetail?.txID as string | undefined);

  const invoiceData: InvoiceData | null = rawData
    ? parseSingleInvoiceResponse(rawData)
    : null;

  return (
    <Box
      position={"fixed"}
      inset={0}
      overflow={{ base: "scroll", lg: "unset" }}
      w={{ lg: "100vw" }}
      h={{ lg: "100vh" }}
      bgColor={"rgba(0,0,0,0.4)"}
    >
      <Box
        bgColor={"white"}
        w={{ base: "100%", lg: "45%" }}
        borderRadius={"1rem"}
        p={{ base: "45px 15px", lg: "2.813rem 2rem" }}
        my={"6.438rem"}
        ml={{ base: "0px", lg: "auto" }}
        mr={{ base: "0px", lg: "2.145rem" }}
        fontFamily={Inter_Display.style.fontFamily}
        minH={{ lg: "37.5rem" }}
        overflowY={{ lg: "auto" }}
      >
        {isLoading ? (
          <Flex
            h={"fit-content"}
            w={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Spinner />
          </Flex>
        ) : isError ? (
          <Box textAlign="center" mt="32px">
            <BackButton customFunction={closeModal} />
            <Text mb="16px" color="red.500">
              Failed to load invoice details. Please try again.
            </Text>
            <Button variant="outline" size="sm" onClick={() => refetch()}>
              Retry
            </Button>
          </Box>
        ) : (
          <>
            <BackButton customFunction={closeModal} />
            <Text
              fontWeight={500}
              color={"main_black_1"}
              fontSize={{ lg: "1.5rem" }}
            >
              Transaction Details
            </Text>
            <Text
              fontWeight={600}
              fontSize={"2rem"}
              color={"main_black_1"}
              mt={{ base: "40px", lg: "2.5rem" }}
            >
              {/* {invoiceData?.quantity}tc02e */}
            </Text>
            <Invoice invoice_data={invoiceData as InvoiceData} isCompleted />
          </>
        )}
      </Box>
    </Box>
  );
};

export default InvoiceModal;
