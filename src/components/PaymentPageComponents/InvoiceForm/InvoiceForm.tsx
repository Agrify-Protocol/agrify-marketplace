import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import React from "react";

const InvoiceForm = () => {
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
        />
        <Input
          h={"3.5rem"}
          my={"1rem"}
          borderRadius={"1rem"}
          placeholder="Phone Number"
          borderColor={"gray_3"}
        />
        <Input
          h={"3.5rem"}
          borderRadius={"1rem"}
          placeholder="Payment Due Date"
          borderColor={"gray_3"}
        />
        <Button
          w={"100%"}
          mt={"3rem"}
          h={"3.5rem"}
          borderRadius={"1.5rem"}
          bgColor={"gray_3"}
        >
          Continue
        </Button>
      </FormControl>
    </Box>
  );
};

export default InvoiceForm;
