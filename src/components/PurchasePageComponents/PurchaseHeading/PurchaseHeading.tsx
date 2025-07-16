"use client";

import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { getProductCategoryTitle } from "@/utils/getProductCategoryTitle";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PurchaseHeading = () => {
  const { chosenProject } = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    if (!chosenProject) {
      router.push("/projects");
    }
  }, [chosenProject]);

  return (
    <Box>
      <Text
        fontSize={"0.875rem"}
        color={"secondary_foreground"}
        mb={"0.872rem"}
      >
        You’re Purchasing
      </Text>
      <Text
        fontSize={{ base: "20px", lg: "2rem" }}
        fontWeight={{ base: "500", lg: "400" }}
        color={"black"}
      >
        {getProductCategoryTitle(chosenProject?.name)}
      </Text>
      <Text fontSize={"1rem"} color={"secondary_foreground"} mb={"0.872rem"}>
        Secure your high-quality{" "}
        {chosenProject?.name?.toLowerCase()?.split("_").join(" ")} directly from
        local farmers.
      </Text>
    </Box>
  );
};

export default PurchaseHeading;
