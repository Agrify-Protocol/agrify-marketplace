import BackButton from "@/components/Layout/BackButton/BackButton";
import PurchaseBody from "@/components/PurchasePageComponents/PurchaseBody/PurchaseBody";
import PurchaseHeading from "@/components/PurchasePageComponents/PurchaseHeading/PurchaseHeading";
import { Box } from "@chakra-ui/react";
import React from "react";

const Purchase = () => {
  return (
    <Box px={"2.5rem"}>
      <Box mt={"4rem"}>
        <BackButton />
      </Box>

      <Box my={"7.688rem"} mx={"auto"} w={"38.648rem"}>
        <PurchaseHeading />
        <PurchaseBody />
      </Box>
    </Box>
  );
};

export default Purchase;
