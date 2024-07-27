"use client";

import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PurchaseHeading = () => {
  const { chosenProject } = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    if (!chosenProject) {
      router.push("/");
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
      <Text fontSize={"2rem"} color={"black"}>
        {chosenProject?.title}
      </Text>
    </Box>
  );
};

export default PurchaseHeading;
