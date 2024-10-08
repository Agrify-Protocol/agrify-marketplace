"use client";

import { Button } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import React from "react";
import { ViewSolutionButtonProps } from "./types";
import { usePathname, useRouter } from "next/navigation";

const ViewSectionButton = ({
  text,
  section,
  bgColor,
}: ViewSolutionButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Button
      mt={"1.209rem"}
      fontWeight={400}
      bgColor={bgColor ? bgColor : "white"}
      color={"secondary_foreground"}
      rightIcon={<ChevronRight />}
      onClick={() =>
        section
          ? router.push(`${pathname}?id=${section?.toLocaleLowerCase()}`)
          : null
      }
    >
      {text}
    </Button>
  );
};

export default ViewSectionButton;
