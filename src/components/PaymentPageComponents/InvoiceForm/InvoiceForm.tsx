"use client";

import { usePaymentContext } from "@/context/PaymentContext/PaymentContext";
import useObjectCheck from "@/hooks/useObjectCheck";
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import React from "react";

const InvoiceForm = () => {
  const { invoiceData, setInvoiceData, setPaymentStage } = usePaymentContext();
  const updateInvoiceData = (key: string, value: string) => {
    setInvoiceData({ ...invoiceData, [key]: value });
  };
  const detailsFilled = useObjectCheck(invoiceData);

  const handleSubmit = () => {
    if (detailsFilled) {
      setPaymentStage(3);
    }
  };

  return (
    <Box w={"34.875rem"} mx={"auto"} my={"8.5rem"}>
      <Box>
        <Text fontSize={"1.5rem"} fontWeight={500} color={"main_black_1"}>
          Generate Invoice
        </Text>
        <Text mt={"0.75rem"}>
          Arcu posuere volutpat at duis consectetur integer etiam cras.
        </Text>
      </Box>

      <FormControl mt={"2.5rem"} mb={"3rem"} isRequired>
        <Input
          h={"3.5rem"}
          borderRadius={"1rem"}
          placeholder="Invoice Client Name"
          borderColor={"gray_3"}
          value={invoiceData.client_name}
          onChange={(e) => updateInvoiceData("client_name", e.target.value)}
        />
        <Input
          h={"3.5rem"}
          my={"1rem"}
          borderRadius={"1rem"}
          placeholder="Phone Number"
          borderColor={"gray_3"}
          value={invoiceData.phone_number}
          onChange={(e) => updateInvoiceData("phone_number", e.target.value)}
        />
        <Input
          h={"3.5rem"}
          borderRadius={"1rem"}
          placeholder="Payment Due Date"
          borderColor={"gray_3"}
          value={invoiceData.due_date}
          onChange={(e) => updateInvoiceData("due_date", e.target.value)}
        />
        <Button
          w={"100%"}
          mt={"3rem"}
          h={"3.5rem"}
          borderRadius={"1.5rem"}
          bgColor={!detailsFilled ? "gray_3" : "agrify_green"}
          color={!detailsFilled ? "unset" : "white"}
          disabled={!detailsFilled}
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </FormControl>
    </Box>
  );
};

export default InvoiceForm;
