import BackButton from "@/components/Common/BackButton/BackButton";
import PurchaseBody from "@/components/PurchasePageComponents/PurchaseBody/PurchaseBody";
import PurchaseHeading from "@/components/PurchasePageComponents/PurchaseHeading/PurchaseHeading";
import { Box } from "@chakra-ui/react";
import React from "react";

const Purchase = () => {
  return (
    <Box px={{base: "24px", lg:"2.5rem"}}>
      <Box mt={{ base: "39px", lg: "4rem" }}>
        <BackButton />
      </Box>

      <Box
        my={{ base: "32px", lg: "7.688rem" }}
        mx={"auto"}
        w={{ lg: "38.648rem" }}
      >
        <PurchaseHeading />
        <PurchaseBody />
      </Box>
    </Box>
  );
};

export default Purchase;
