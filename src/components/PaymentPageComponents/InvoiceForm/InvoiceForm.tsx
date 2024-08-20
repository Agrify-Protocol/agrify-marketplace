"use client";

import DatePicker from "@/components/Layout/DatePicker/DatePicker";
import { usePaymentContext } from "@/context/PaymentContext/PaymentContext";
import useObjectCheck from "@/hooks/useObjectCheck";
import { validatePhoneNumber } from "@/utils/validationSchema";
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";

const InvoiceForm = () => {
  const { invoiceData, setInvoiceData, setPaymentStage } = usePaymentContext();
  const updateInvoiceData = (key: string, value: string | Date) => {
    setInvoiceData({ ...invoiceData, [key]: value });
  };
  const detailsFilled = useObjectCheck(invoiceData);

  const handleSubmit = () => {
    if (detailsFilled) {
      setPaymentStage(3);
    }
  };

  const isPhoneValid = useMemo(() => {
    return  validatePhoneNumber(invoiceData.phone_number);
  }, [invoiceData.phone_number]);

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
          focusBorderColor="gray_2"
          h={"3.5rem"}
          borderRadius={"1rem"}
          placeholder="Invoice Client Name"
          borderColor={"gray_3"}
          value={invoiceData.client_name}
          onChange={(e) => updateInvoiceData("client_name", e.target.value)}
        />
        <Box marginBottom="1rem">
          <Input
            focusBorderColor="gray_2"
            h={"3.5rem"}
            my={"1rem"}
            borderRadius={"1rem"}
            placeholder="Phone Number"
            borderColor={
              !isPhoneValid && invoiceData.phone_number !== ''
                ? "red"
                : "gray_3"
            }
            value={invoiceData.phone_number}
            type="text"
            onChange={(e) => updateInvoiceData("phone_number", e.target.value)}
          />
          {!isPhoneValid && invoiceData.phone_number !== ''  ? (
            <Text color="red" fontSize="12px" position="absolute" marginTop="-15px">
              Phone number must be valid
            </Text>
          ) : null}
        </Box>

        <DatePicker
          updateDate={(value) => updateInvoiceData("due_date", value)}
        />
        <Button
          w={"100%"}
          mt={"3rem"}
          h={"3.5rem"}
          borderRadius={"1.5rem"}
          bgColor={!detailsFilled || !isPhoneValid ? "gray_3" : "agrify_green"}
          color={!detailsFilled || !isPhoneValid ? "unset" : "white"}
          disabled={!detailsFilled || !isPhoneValid}
          onClick={handleSubmit}
          cursor={!detailsFilled || !isPhoneValid ? "not-allowed" : "pointer"}
          _hover={{
            bg: !detailsFilled || !isPhoneValid ? "gray_3" : "#0ba842",
          }}
        >
          Continue
        </Button>
      </FormControl>
    </Box>
  );
};

export default InvoiceForm;
