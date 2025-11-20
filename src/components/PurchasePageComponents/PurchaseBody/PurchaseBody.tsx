"use client";

import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext/GlobalContext";

const PurchaseBody = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { chosenProject } = useGlobalContext();

  useEffect(() => {
    if (!chosenProject) {
      router.push("/home");
    }
  }, [chosenProject]);

  return (
    <Box
      bgColor={"white"}
      borderRadius={"1rem"}
      px={{ base: "20px", lg: "2rem" }}
      py={{ base: "20px", lg: "2.813rem" }}
      mt={"3rem"}
    >
      {children}
    </Box>
  );
};

export default PurchaseBody;
