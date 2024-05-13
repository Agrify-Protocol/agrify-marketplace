import { Box } from "@chakra-ui/react";
import React from "react";
import InvoiceHeader from "../InvoiceHeader/InvoiceHeader";

const Invoice = () => {
  return (
    <Box w={"37.188rem"} p={"0.625rem"} mx={"auto"}>
      <InvoiceHeader />
    </Box>
  );
};

export default Invoice;
