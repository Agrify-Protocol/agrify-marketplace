"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BackButton from "../BackButton/BackButton";
import { InvoiceModalProps } from "./types";
import Invoice from "@/components/PaymentPageComponents/Invoice/Invoice";
import { Inter_Display } from "@/fonts";
import { InvoiceData } from "@/components/PaymentPageComponents/Invoice/types";
import { getSingleInvoice } from "@/services/api/invoice";
import Spinner from "../Spinner/Spinner";
import { parseSingleInvoiceResponse } from "@/utils/parseSingleInvoiceResponse";

const InvoiceModal = ({ closeModal, txDetail }: InvoiceModalProps) => {
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getSingleInvoice(txDetail?.txID as string).then((response) => {
      const data = parseSingleInvoiceResponse(response);
      setInvoiceData(data);
      setIsLoading(false);
    });
  }, [txDetail]);
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
        w={"fit-content"}
        borderRadius={"1rem"}
        p={"2.813rem 2rem"}
        my={"6.438rem"}
        ml={"auto"}
        mr={"2.145rem"}
        fontFamily={Inter_Display.style.fontFamily}
        minH={"37.5rem"}
        width="45%"
        overflowY={"auto"}
      >
        {isLoading && !invoiceData ? (
          <Flex
            h={"fit-content"}
            w={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Spinner />
          </Flex>
        ) : (
          <>
            <BackButton customFunction={closeModal} />
            <Text fontWeight={500} color={"main_black_1"} fontSize={"1.5rem"}>
              Transaction Details
            </Text>
            <Text
              fontWeight={600}
              fontSize={"2rem"}
              color={"main_black_1"}
              mt={"2.5rem"}
            >
              {invoiceData?.quantity}tc02e
            </Text>
            <Invoice invoice_data={invoiceData as InvoiceData} isCompleted />
          </>
        )}
      </Box>
    </Box>
  );
};

export default InvoiceModal;
