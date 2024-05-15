import { Box, Button } from "@chakra-ui/react";
import React from "react";
import InvoiceHeader from "../InvoiceHeader/InvoiceHeader";
import InvoiceBody from "../InvoiceBody/InvoiceBody";
import InvoiceFooter from "../InvoiceFooter/InvoiceFooter";
import Link from "next/link";

const Invoice = () => {
  return (
    <Box>
      <Box
        w={"37.188rem"}
        p={"0.625rem"}
        py={"2.75rem"}
        mx={"auto"}
        fontFamily={"__Inter_aaf875"}
      >
        <InvoiceHeader />
        <InvoiceBody />
        <InvoiceFooter />
      </Box>
      <Link href={"/confirmation"}>
        <Button
          w={"34.875rem"}
          h={"3.5rem"}
          bgColor={"agrify_green"}
          display={"block"}
          mx={"auto"}
          borderRadius={"1.5rem"}
          color="white"
          my={"3rem"}
        >
          Confirm
        </Button>
      </Link>
    </Box>
  );
};

export default Invoice;
