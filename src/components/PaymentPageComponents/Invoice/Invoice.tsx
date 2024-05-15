import { Box } from "@chakra-ui/react";
import React from "react";
import InvoiceHeader from "../InvoiceHeader/InvoiceHeader";
import InvoiceBody from "../InvoiceBody/InvoiceBody";

const Invoice = () => {
  return (
    <Box
      w={"37.188rem"}
      p={"0.625rem"}
      py={"2.75rem"}
      mx={"auto"}
      fontFamily={"__Inter_aaf875"}
    >
      <InvoiceHeader />
      <InvoiceBody />
    </Box>
  );
};

export default Invoice;
