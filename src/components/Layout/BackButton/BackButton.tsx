"use client";

import { Button } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { BackButtonProps } from "./types";

const BackButton = ({ customFunction }: BackButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    customFunction ? customFunction() : router.back();
  };

  return (
    <Button
      color={"gray_1"}
      fontWeight={500}
      fontFamily={"__Inter_aaf875"}
      leftIcon={<ArrowLeft size={"16px"} />}
      onClick={handleClick}
      bgColor={"transparent"}
      _hover={{ backgroundColor: "transparent" }}
      px={0}
    >
      back
    </Button>
  );
};

export default BackButton;
