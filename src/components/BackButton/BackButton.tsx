"use client";

import { Button } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      color={"gray_1"}
      fontWeight={500}
      leftIcon={<ArrowLeft size={"16px"} />}
      onClick={() => router.back()}
    >
      back
    </Button>
  );
};

export default BackButton;
