"use client";

import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";
import { formatSnakeCaseTitle } from "@/utils/formatSnakeCaseTitle";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PurchaseHeading = ({ caption }: { caption?: string }) => {
  const { chosenProject } = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    if (!chosenProject) {
      return;
      router.push("/home");
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
        {formatSnakeCaseTitle(chosenProject?.name)}
      </Text>
      {caption && (
        <Text fontSize={"1rem"} color={"secondary_foreground"} mb={"0.872rem"}>
          {caption}
        </Text>
      )}
    </Box>
  );
};

export default PurchaseHeading;
